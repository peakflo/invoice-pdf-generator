/** Server-only SOA rendering; deliberately independent of the invoice entrypoint. */
export declare const SOALayout: {
  readonly VENDOR: "vendor";
  readonly CUSTOMER_PORTAL: "customer-portal";
  readonly NOTIFICATION: "notification";
};
export type SOALayout = typeof SOALayout[keyof typeof SOALayout];

/** Embeddings are prepared by each caller's existing SOA mappers and party adapter. */
export declare function renderSOA(
  embeddings: object,
  layout: SOALayout
): string;

/** A structural browser contract avoids a second Puppeteer dependency. */
export interface SOABrowser<TPdf = Uint8Array> {
  newPage(): Promise<{
    goto(url: string, options: { waitUntil: "networkidle0" }): Promise<unknown>;
    pdf(options: { format: "a4"; printBackground: boolean }): Promise<TPdf>;
    close(): Promise<void>;
  }>;
}
export declare function generateSOAPdf<TPdf>(
  browser: SOABrowser<TPdf>,
  embeddings: object,
  layout: SOALayout
): Promise<TPdf>;
