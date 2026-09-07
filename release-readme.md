# Install in local
To use pdf generator library in your local, you will need a `github personal access token` (PAT) to install the dependency. 
Look at the instructions to [generate a PAT](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
Refer the invoice-pdf-generator in your `package.json` as shown below by replacing `<PAT>` with your PAT.
You can choose to refer any particular version of the release by changing the version number towards the end of the url. 

```
...
  "dependencies": {
    ...
    "jspdf-invoice-template": "git+https://<PAT>:x-oauth-basic@github.com/peakflo/invoice-pdf-generator#v0.0.1"         
    ...
  },
...
```

# Install in stage or prod environments
The respective CI/CD pipeline is automated to replace the <PAT> value hence the build machine gets access to the git repo. 
Make sure the token is saved in the secrets.


## Shared SOA renderer (server only)

Import SOA rendering through `jspdf-invoice-template/dist/soa`. The invoice entrypoint remains unchanged. Callers continue to own data fetching, AP/AR mappings, balances, dates, authorization, and delivery. The renderer owns template compilation, number formatting, and vendor font embedding.

```ts
import { renderSOA, generateSOAPdf, SOALayout } from 'jspdf-invoice-template/dist/soa';

// Existing customer portal response: base64 HTML.
const statement = Buffer.from(
  renderSOA(embeddings, SOALayout.CUSTOMER_PORTAL)
).toString('base64');

// Existing notification flow: raw HTML for its existing PDF converter.
const html = renderSOA(embeddings, SOALayout.NOTIFICATION);

// Vendor download: PDF using the caller's existing Puppeteer browser.
const pdf = await generateSOAPdf(browser, embeddings, SOALayout.VENDOR);
```

Each layout preserves its existing template and embedding fields. AR and AP calculation semantics remain separate. `generateSOAPdf` closes its page and leaves the caller's browser open.

After releasing a version containing this entrypoint, update `jspdf-invoice-template` in `upload-functions/package.json` and `peakflo-web/functions/package.json`, and add it to `customer-portal-be/package.json`. Regenerate the corresponding lockfiles. Consumer version updates and functional testing are pending; the earlier package versions do not contain this module.
