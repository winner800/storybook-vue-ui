// const CompressionPlugin = require("compression-webpack-plugin")
// import { withNotes } from '@storybook/addon-notes'

// addDecorator(withNotes)

module.exports = {
  "title": "fe-ui-main",
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-notes/register',
    // '@storybook/addon-storysource',
    // 'storybook-readme/register',
    // '@storybook/addon-knobs',
    // {
    //   name: '@storybook/addon-docs',
    //   // options: {
    //   //   sourceLoaderOptions: {
    //   //     injectStoryParameters: false,
    //   //   },
    //   // },
    // },
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     loaderOptions: {
    //       injectStoryParameters: false,
    //     },
    //   },
    // },
  ],
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ['style-loader', 'css-loader', 'sass-loader'],
  //   });
  //   // config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 8919 }))
  //   config.plugins.push(new CompressionPlugin({
  //     test: /\.js$|\.html$|.\css/, //匹配文件名
  //     threshold: 10240,//对超过10k的数据压缩
  //     deleteOriginalAssets: false //不删除源文件
  //   }))

  //   return config;
  // },
}