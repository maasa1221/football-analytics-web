const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const path = require("path");
const styledComponentsTransformer =
  require("typescript-plugin-styled-components").default();

const BUILD_TIME = new Date().getTime();

module.exports = {
  mode: "production",
  devServer: {
    open: true,
    openPage: "",
    contentBase: path.join(__dirname, "./dist"),
    watchContentBase: true,
    port: 3000,
    disableHostCheck: true
  },
  entry: "./src/index.tsx",
  output: {
    filename: ({ chunk }) => {
      return chunk.name === "main" ? "js/bundle.js" : "[name]/js/bundle.js";
    }
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    symlinks: false,
    cacheWithContext: false,
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, "./tsconfig.json")
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.svg(\?.+)?$/,
        use: {
          loader: "url-loader",
          options: {
            name(resourcePath) {
              const result = /src/.exec(resourcePath);
              return "./" + result[1];
            },
            publicPath(path) {
              return "/" + path.replace(/^\.\//, "");
            }
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer]
              })
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp|mp3)$/,
        loader: "file-loader",
        options: {
          name(resourcePath) {
            const result = /src\/Resources\/(.+)$/.exec(resourcePath);
            return "./" + result[1];
          },
          publicPath(path) {
            return "/" + path.replace(/^\.\//, "");
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: BUILD_TIME
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./",
          to: "./dist",
          context: "./static/app",
          transform(buf, path) {
            if (path.endsWith(".html") || path.endsWith("status")) {
              const content = buf.toString("utf-8");
              return content.replace("__BUILD_TIME__", BUILD_TIME);
            }
            return buf;
          }
        }
      ]
    }),
    new WriteFilePlugin()
  ]
};
