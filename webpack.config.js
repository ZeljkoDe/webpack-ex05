const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  output: {
    assetModuleFilename: "images/[name][ext]",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { debug: true, useBuiltIns: "usage", corejs: 3 },
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|svg)$/,
        type: "asset",
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(ttf|otf|eot|woff)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./fonts/",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/commercial.html",
      filename: "./commercial.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/resources.html",
      filename: "./resources.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  devtool: "source-map",
  devServer: {
    contentBase: "./dist/",
  },
};
