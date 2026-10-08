/* These tests exercise presentation only: callers retain ownership of accounting. */
const { renderSOA, generateSOAPdf, SOALayout } = require("../src/soa");

jest.mock("../src/font", () => ({
  getVazir: () => "regular-font",
  getVazirBold: () => "bold-font",
  getNotoSC: () => "chinese-font",
}));

const pdfLayouts = [SOALayout.VENDOR, SOALayout.CUSTOMER_PORTAL, SOALayout.SCHEDULED_NOTIFICATION];
const layouts = [...pdfLayouts, SOALayout.NOTIFICATION];
const fixture = () => ({
  asAtDate: "01/10/2026 - 08/10/2026",
  activity: true,
  issuer: { name: "Issuer", address: { line1: "Issuer street", country: "Singapore" } },
  vendor: { name: "Vendor", address: { line1: "Vendor street" } },
  payer: { name: "Customer", address: { line1: "Customer street" } },
  gstRegNumber: "GST-123",
  bottomNotice: "Payment instructions\nSecond line",
  currencies: [{
    currency: "USD",
    // Deliberately does not match sum of row values: rendering must not recalculate it.
    totalBalanceDue: 765.43,
    subsidiaries: [{ name: "Subsidiary A", items: [
      { date: "01/10/2026", activity: "Bill #100", dueDate: "08/10/2026", amount: 1000, payments: 0, balance: 1000 },
      { date: "02/10/2026", activity: "Payment #200", dueDate: "-", amount: 0, payments: 200, balance: 800 },
    ] }],
  }],
});
const compact = (html: string) => html.split("\n").map((line) => line.trim()).join("\n");
const freeze = (value: any): any => {
  if (value && typeof value === "object") Object.values(value).forEach(freeze);
  return Object.freeze(value);
};

describe("shared SOA presentation", () => {
  it("renders exactly the same statement partial across all document layouts and email", () => {
    const data = fixture();
    const fragment = compact(renderSOA(data, SOALayout.NOTIFICATION));
    pdfLayouts.forEach((layout) => {
      const html = compact(renderSOA(data, layout));
      expect(html).toContain(fragment);
      expect(html).toContain('class="soa-document"');
      expect(html).toContain("regular-font");
      expect(html).toContain("bold-font");
      expect(html).toContain("print-color-adjust: exact");
    });
    expect(fragment).not.toMatch(/<style|<head|<body|@page|@font-face/);
    expect(fragment).toContain('bgcolor="#f5f5f5"');
    expect(fragment).toContain("width: 31%");
    expect(fragment).toContain("text-align: right");
    expect(fragment).toContain("USD 765.43");
  });

  it("adapts party labels and keeps the same customer portal and scheduled documents", () => {
    const data = fixture();
    const portal = renderSOA(data, SOALayout.CUSTOMER_PORTAL);
    expect(portal).toBe(renderSOA(data, SOALayout.SCHEDULED_NOTIFICATION));
    expect(portal).toContain("Customer statement");
    expect(portal).toContain("Customer street");
    expect(portal).not.toContain("Vendor street");
    const vendor = renderSOA(data, SOALayout.VENDOR);
    expect(vendor).toContain("Vendor statement");
    expect(vendor).toContain("Vendor street");
    expect(vendor).not.toContain("Customer street");
  });

  it("supports raw vendor logos and existing customer data URLs without double-prefixing", () => {
    for (const logo of ["cG5n", "data:image/png;base64,cG5n"]) {
      pdfLayouts.forEach((layout) => {
        const html = renderSOA({ ...fixture(), logo }, layout);
        expect(html).toContain('src="data:image/png;base64,cG5n"');
        expect(html).not.toContain("base64,data:image");
      });
    }
    expect(renderSOA(fixture(), SOALayout.VENDOR)).not.toContain('<img class="logo"');
  });

  it("keeps prepared portal dates and does not invent a mode when it is absent", () => {
    const data: any = fixture();
    delete data.activity;
    for (const date of ["As at 08/10/2026", "01/10/2026 - 08/10/2026"]) {
      data.asAtDate = date;
      const html = renderSOA(data, SOALayout.CUSTOMER_PORTAL);
      expect(html).toContain(date);
      expect(html).not.toContain("As at As at");
      expect(html).not.toContain("Outstanding balances");
      expect(html).not.toContain("Activity &#183;");
    }
    data.activity = false;
    data.asAtDate = "As at 08/10/2026";
    expect(renderSOA(data, SOALayout.VENDOR)).toContain("Outstanding balances &#183; As at 08/10/2026");
    expect(renderSOA(data, SOALayout.VENDOR)).not.toContain("As at As at");
  });

  it.each(layouts)("does not mutate frozen inputs in %s", (layout) => {
    const data = freeze(fixture());
    const before = JSON.stringify(data);
    expect(() => renderSOA(data, layout)).not.toThrow();
    expect(JSON.stringify(data)).toBe(before);
    expect(data).not.toHaveProperty("fonts");
  });

  it("uses invoice font selection for every PDF, allowing explicit caller fonts", () => {
    pdfLayouts.forEach((layout) => {
      const data = fixture();
      data.issuer.name = "中文";
      expect(renderSOA(data, layout)).toContain("chinese-font");
      const custom = renderSOA({ ...data, fonts: { regular: "custom", bold: "custom-bold" } }, layout);
      expect(custom).toContain("custom-bold");
      expect(custom).not.toContain("chinese-font");
    });
  });

  it("preserves grouping, row order, independent totals and negative/zero/missing display", () => {
    const data: any = fixture();
    data.currencies[0].subsidiaries.push({ name: "Subsidiary B", items: [
      { date: "03/10/2026", activity: "Credit", amount: -25.5, payments: 0, balance: undefined },
    ] });
    data.currencies.push({ currency: "SGD", totalBalanceDue: -99.1, subsidiaries: [
      { name: "Subsidiary C", items: [{ date: "04/10/2026", activity: "Zero", amount: null, balance: 0 }] },
    ] });
    const html = renderSOA(data, SOALayout.NOTIFICATION);
    expect((html.match(/class="soa-items"/g) || []).length).toBe(3);
    expect((html.match(/class="soa-total"/g) || []).length).toBe(2);
    expect(html.indexOf("Subsidiary A")).toBeLessThan(html.indexOf("Subsidiary B"));
    expect(html.indexOf("Subsidiary B")).toBeLessThan(html.indexOf("Subsidiary C"));
    expect(html).toContain("USD 765.43");
    expect(html).toContain("SGD (99.10)");
    expect(html).toContain("(25.50)");
    expect(html).toContain("1,000.00");
    expect(html).toContain("200.00");
    expect(html).toContain("800.00");
    expect((html.match(/>-<\/td>/g) || []).length).toBe(8);
    expect(html).not.toMatch(/NaN|undefined|null/);
    const zeroTotal = fixture();
    zeroTotal.currencies[0].totalBalanceDue = 0;
    expect(renderSOA(zeroTotal, SOALayout.NOTIFICATION)).toContain("USD 0.00");
  });

  it("escapes user text, preserves long references and notices, and uses wrapping", () => {
    const data = fixture();
    const reference = '<script>alert("x")</script>&' + "L".repeat(400);
    data.currencies[0].subsidiaries[0].items[0].activity = reference;
    data.issuer.name = "<b>Issuer</b>";
    data.bottomNotice = "<img src=x onerror=alert(1)>\nSecond line";
    const html = renderSOA(data, SOALayout.VENDOR);
    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("L".repeat(400));
    expect(html).toContain("&lt;b&gt;Issuer&lt;/b&gt;");
    expect(html).toContain("&lt;img src&#x3D;x onerror&#x3D;alert(1)&gt;\nSecond line");
    expect(html).toContain("overflow-wrap: anywhere");
    expect(html).toContain("white-space: pre-wrap");
  });

  it("renders empty statements using only explicitly supplied mode", () => {
    const data: any = { currencies: [] };
    expect(renderSOA(data, SOALayout.NOTIFICATION)).toContain("No statement entries");
    expect(renderSOA({ ...data, activity: true }, SOALayout.VENDOR)).toContain("No activity in this date range");
    expect(renderSOA({ ...data, activity: false }, SOALayout.VENDOR)).toContain("No outstanding balance");
  });

  it("rejects unknown layout values", () => {
    expect(() => renderSOA(fixture(), "other")).toThrow("Unsupported SOA layout");
  });
});

describe("SOA PDF lifecycle", () => {
  it.each(pdfLayouts)("prints common A4 settings and closes only its page for %s", async (layout) => {
    const output = Buffer.from("pdf");
    const page = { goto: jest.fn().mockResolvedValue(undefined), pdf: jest.fn().mockResolvedValue(output), close: jest.fn().mockResolvedValue(undefined) };
    const browser = { newPage: jest.fn().mockResolvedValue(page), close: jest.fn() };
    expect(await generateSOAPdf(browser, fixture(), layout)).toBe(output);
    expect(page.pdf).toHaveBeenCalledWith({ format: "a4", printBackground: true });
    expect(page.goto).toHaveBeenCalledWith(expect.stringMatching(/^data:text\/html;charset=UTF-8;base64,/), { waitUntil: "networkidle0" });
    expect(page.close).toHaveBeenCalledTimes(1);
    expect(browser.close).not.toHaveBeenCalled();
  });

  it.each(["goto", "pdf"])("closes the page when %s fails", async (method) => {
    const error = new Error("render failure");
    const page = { goto: jest.fn().mockResolvedValue(undefined), pdf: jest.fn().mockResolvedValue(Buffer.from("pdf")), close: jest.fn().mockResolvedValue(undefined) };
    page[method].mockRejectedValueOnce(error);
    await expect(generateSOAPdf({ newPage: async () => page }, fixture(), SOALayout.VENDOR)).rejects.toThrow(error);
    expect(page.close).toHaveBeenCalledTimes(1);
  });
});
