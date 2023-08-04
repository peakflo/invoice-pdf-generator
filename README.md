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

