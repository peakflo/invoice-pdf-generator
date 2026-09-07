const { readFileSync } = require("fs");
const { join } = require("path");
const Handlebars = require("handlebars");
const numbro = require("numbro");

const SOALayout = Object.freeze({
  VENDOR: "vendor",
  CUSTOMER_PORTAL: "customer-portal",
  NOTIFICATION: "notification",
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
const templates = new Map();

/** Render existing SOA layouts without changing document balances or transport. */
function renderSOA(embeddings, layout) {
  if (!Object.values(SOALayout).includes(layout)) {
    throw new Error(`Unsupported SOA layout: ${layout}`);
  }
  if (!templates.has(layout)) {
    templates.set(
      layout,
      handlebars.compile(readFileSync(join(__dirname, "templates", `${layout}.hbs`), "utf8"))
    );
  }
  if (layout === SOALayout.VENDOR && !embeddings.fonts) {
    const { getVazir, getVazirBold, getNotoSC } = require("../font");
    const useChineseFont = /[\u4E00-\u9FFF]/.test(JSON.stringify(embeddings));
    const regular = useChineseFont ? getNotoSC() : getVazir();
    embeddings = {
      ...embeddings,
      fonts: { regular, bold: useChineseFont ? regular : getVazirBold() },
    };
  }
  return templates.get(layout)(embeddings);
}

/** Use the caller's existing browser while owning the page lifecycle. */
async function generateSOAPdf(browser, embeddings, layout) {
  const html = renderSOA(embeddings, layout);
  const page = await browser.newPage();
  try {
    await page.goto(`data:text/html;charset=UTF-8;base64,${Buffer.from(html).toString("base64")}`, {
      waitUntil: "networkidle0",
    });
    return await page.pdf({ format: "a4", printBackground: true });
  } finally {
    await page.close();
  }
}

module.exports = { SOALayout, renderSOA, generateSOAPdf };
