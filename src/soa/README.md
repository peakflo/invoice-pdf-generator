# Shared SOA renderer

Server consumers import `jspdf-invoice-template/dist/soa`. This entrypoint does not load or change the invoice renderer.

- `renderSOA(embeddings, SOALayout.CUSTOMER_PORTAL)` returns the existing full AR HTML. The portal continues to base64-encode this HTML for its response.
- `renderSOA(embeddings, SOALayout.NOTIFICATION)` returns the existing AR email table fragment.
- `generateSOAPdf(browser, embeddings, SOALayout.VENDOR)` returns the existing browser's PDF byte type. It closes its page on success or failure, without closing the shared browser.

The layouts retain their existing embeddings: `currencies` with `currency`, `totalBalanceDue`, `subsidiaries`, and each subsidiary's `name` and `items`; callers supply party details and formatted dates. Rendering does not calculate balances or alter dates. Vendor rendering loads the package's existing invoice fonts unless `fonts` are supplied explicitly. Handlebars helpers are isolated from caller registrations.

Both package build paths run `build:soa` to include these assets under `dist/soa`. Publish a new package version/tag and update the three server consumers together; the existing invoice entrypoint and layout remain unchanged.
