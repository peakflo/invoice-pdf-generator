const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    library: "jsPDFInvoiceTemplate",
    libraryTarget: "umd",
    globalObject: "this",
    publicPath: "",
  },
  // Produce a single bundle — no code-split chunks.
  // Chunk files (e.g. 120.index.js) break downstream bundlers like Vite that
  // only resolve the main entry point and can't load webpack runtime chunks,
  // causing "Cannot read properties of undefined (reading
  // 'webpackChunkjsPDFInvoiceTemplate')" at runtime.
  optimization: {
    splitChunks: false,
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      esmodules: true,
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
