var path = require("path");

module.exports = {
  entry: './app/index.js',
  output: {
    path: './build/',
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};