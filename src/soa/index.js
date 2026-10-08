const { readFileSync } = require("fs");
const { join } = require("path");
const Handlebars = require("handlebars");
const numbro = require("numbro");

const SOALayout = Object.freeze({
  VENDOR: "vendor",
  CUSTOMER_PORTAL: "customer-portal",
  NOTIFICATION: "notification",
  SCHEDULED_NOTIFICATION: "scheduled-notification",
});

// Keep SOA helpers isolated from invoice and caller Handlebars registrations.
const handlebars = Handlebars.create();
handlebars.registerHelper("numberFormat", (value) =>
  numbro(value).format({
    thousandSeparated: true,
    mantissa: 2,
    negative: "parenthesis",
  })
);
handlebars.registerHelper("isOdd", (value) => value % 2 !== 0);
handlebars.registerHelper("displayNumber", (value) =>
  value ? handlebars.helpers.numberFormat(value) : "-"
);
let documentTemplate;
let statementTemplate;

function loadTemplates() {
  if (!statementTemplate) {
    statementTemplate = handlebars.compile(
      readFileSync(join(__dirname, "templates", "statement.hbs"), "utf8")
    );
    handlebars.registerPartial("statement", statementTemplate);
    documentTemplate = handlebars.compile(
      readFileSync(join(__dirname, "templates", "document.hbs"), "utf8")
    );
  }
}

// Callers own dates, statement mode and every monetary value. Only adapt labels.
function presentation(embeddings, layout) {
  const isVendor = layout === SOALayout.VENDOR;
  const asAtDate = embeddings.asAtDate || "";
  let dateLabel = asAtDate;
  let modeLabel;
  let emptyMessage = "No statement entries";
  if (embeddings.activity === true) {
    modeLabel = "Activity";
    emptyMessage = "No activity in this date range";
  } else if (embeddings.activity === false) {
    const dated = /^as at\b/i.test(asAtDate) ? asAtDate : `As at ${asAtDate}`;
    dateLabel = dated;
    modeLabel = "Outstanding balances";
    emptyMessage = "No outstanding balance";
  }
  return {
    ...embeddings,
    partyLabel: isVendor ? "Vendor" : "Customer",
    logoSrc: embeddings.logo
      ? (embeddings.logo.startsWith("data:image/")
        ? embeddings.logo
        : `data:image/png;base64,${embeddings.logo}`)
      : undefined,
    party: isVendor ? embeddings.vendor : embeddings.payer,
    dateLabel,
    modeLabel,
    emptyMessage,
  };
}

/** Render one SOA design without changing caller-supplied accounting data. */
function renderSOA(embeddings, layout) {
  if (!Object.values(SOALayout).includes(layout)) {
    throw new Error(`Unsupported SOA layout: ${layout}`);
  }
  loadTemplates();
  const view = presentation(embeddings, layout);
  // Email bodies receive the same inline-styled table, without document CSS/fonts.
  if (layout === SOALayout.NOTIFICATION) {
    return statementTemplate(view);
  }
  if (!view.fonts) {
    const { getVazir, getVazirBold, getNotoSC } = require("../font");
    const useChineseFont = /[\u4E00-\u9FFF]/.test(JSON.stringify(embeddings));
    const regular = useChineseFont ? getNotoSC() : getVazir();
    view.fonts = { regular, bold: useChineseFont ? regular : getVazirBold() };
  }
  return documentTemplate(view);
}

/** Use the caller's existing browser while owning the page lifecycle. */
async function generateSOAPdf(browser, embeddings, layout) {
  const html = renderSOA(embeddings, layout);
  const page = await browser.newPage();
  try {
    await page.goto(`data:text/html;charset=UTF-8;base64,${Buffer.from(html).toString("base64")}`, {
      waitUntil: "networkidle0",
    });
    return await page.pdf({
      format: "a4",
      printBackground: true,
    });
  } finally {
    await page.close();
  }
}

module.exports = { SOALayout, renderSOA, generateSOAPdf };
