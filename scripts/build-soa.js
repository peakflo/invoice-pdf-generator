const { cpSync, mkdirSync, writeFileSync } = require("fs");
const { join } = require("path");

const root = join(__dirname, "..");
mkdirSync(join(root, "dist", "soa"), { recursive: true });
cpSync(join(root, "src", "soa"), join(root, "dist", "soa"), { recursive: true });

// Webpack's invoice bundle does not expose the standalone font entrypoint.
const { transformFileSync } = require("@babel/core");
const font = transformFileSync(join(root, "src", "font.js"), {
  babelrc: false,
  configFile: false,
  plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
  compact: true,
});
writeFileSync(join(root, "dist", "font.js"), font.code);
