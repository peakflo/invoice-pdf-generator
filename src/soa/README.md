# Shared SOA renderer

Server consumers import `jspdf-invoice-template/dist/soa`. This entrypoint does not load or change the invoice renderer.

All document exports use the upload-functions vendor SOA design: one `document.hbs` and one inline-styled `statement.hbs` partial. The existing `SOALayout` names remain compatible:

- `VENDOR`, `CUSTOMER_PORTAL` and `SCHEDULED_NOTIFICATION` select the same full document. Vendor documents use `vendor` details and a Vendor label; customer documents use `payer` details and a Customer label.
- `NOTIFICATION` selects only the same statement table fragment for email bodies. It contains no page styles, embedded fonts or document header. Email clients use their supported fallback font.
- `generateSOAPdf` uses A4 and background printing for every layout, closes its page on success or failure, and leaves the caller's shared browser open. Document and table print-color adjustment also retains striping when consumers print rendered HTML themselves.

Callers retain ownership of dates, statement modes, grouping, row order, amounts, payments, balances and currency totals. Rendering never calculates or filters them. Supplied dates are preserved; explicit `activity` flags add an Activity or Outstanding label, while missing flags leave the date neutral. Both raw vendor base64 logos and customer data-image URLs are accepted. The common table uses the vendor convention of dashes for zero or absent row amounts; zero currency totals still display `0.00`. Negative values retain parentheses.

PDF documents use the package's invoice fonts, including Chinese fallback, unless callers supply `fonts`. Handlebars helpers remain isolated from caller registrations, and embeddings are not mutated. The inline email fragment shares column widths, striping, numeric alignment and totals, with client-supported typography.

Both package build paths run `build:soa` to include these assets under `dist/soa`. Publish a new package version/tag and update the four server consumers (`upload-functions`, `customer-portal-be`, `peakflo-web/functions`, and `notifications`) together; the existing invoice entrypoint and accounting mappers remain unchanged.
