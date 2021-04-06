const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: "./lib/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js",".jsx"],
  },
  plugins: [new CleanWebpackPlugin()],
};
