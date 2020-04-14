const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const webpack = require("webpack");
// withCss得到的是一个nextjs的config配置
module.exports = withBundleAnalyzer({
  webpack(webpackConfig) {
    webpackConfig.plugins.push(
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    );
    return webpackConfig;
  },
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),

  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html",
    },
  },
});
