const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    libraryTarget: 'var',
    library: 'Client'
},
  // output: {
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node-module/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "/src/client/images/[hash]-[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html",
      filename: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/client/icons", to: "icons" },
      ],
    }),
    new WorkboxPlugin.GenerateSW()
  ],
};
