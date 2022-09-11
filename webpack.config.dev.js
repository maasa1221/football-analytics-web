const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const BUILD_TIME = new Date().getTime();

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
    static: [{ directory: path.join(__dirname, "./dist") }]
  },
  entry: "./src/index.tsx",
  output: {
    filename: ({ chunk }) => {
      if (chunk.name === "main") {
        return "js/bundle.js";
      }
      if (chunk.name === "init") {
        return "js/init.js";
      }
      return "[name]/js/bundle.js";
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
        test: /@jsonforms\/.+\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.svg(\?.+)?$/,
        use: {
          loader: "url-loader",
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
      },
      {
        test: /\.(jpe?g|png|gif|ico|mp3|m4a)(\?.+)?$/,
        use: {
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
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              happyPackMode: true
              // getCustomTransformers: () => ({
              //   before: [styledComponentsTransformer]
              // })
            }
          }
        ]
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
    })
  ]
};
