const path = require("path");
module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  externals: {
    react: "commonjs react"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css)$/,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
