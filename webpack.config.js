var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",

  output: {
    path: "./public",
    filename: "bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"})
  ],

  devServer: {
    contentBase: "./public"
  }
};
