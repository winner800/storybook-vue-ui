const path = require('path')
const webpack = require('webpack')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require("compression-webpack-plugin")
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

// module.exports = merge(common, {
//   // ...
//   plugins: [
//     new BundleAnalyzerPlugin({ analyzerPort: 8919 })
//   ],
// });
// console.log('__dirname:::' + __dirname)
const pathResolve = p => path.join(__dirname, '..', p)
const apiMocker = require('mocker-api')

module.exports = ({ config, mode }) => {

  config.mode = 'production'
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': pathResolve('src'),
    '~': pathResolve('node_modules')
  }
  if (process.env.NODE_ENV == 'production') {
    config.optimization = {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,  // 匹配node_modules目录下的文件
            priority: -10   // 优先级配置项
          },
          // default: {
          //   minChunks: 2,
          //   priority: -20,   // 优先级配置项
          //   reuseExistingChunk: true
          // },
          // commons: {
          //   chunks: "initial",
          //   minChunks: 2,
          //   name: "commons",
          //   maxInitialRequests: 5,
          //   minSize: 0, // 默认是30kb，minSize设置为0之后
          //   // 多次引用的utility1.js和utility2.js会被压缩到commons中
          // },
          reactBase: {
            test: (module) => {
              return /react|redux|prop-types/.test(module.context);
            }, // 直接使用 test 来做路径匹配，抽离react相关代码
            chunks: "initial",
            name: "reactBase",
            priority: 10,
          },
          elementUi: {
            test: (module) => {
              return /element/.test(module.context);
            }, // 直接使用 test 来做路径匹配，抽离elementui相关代码
            chunks: "initial",
            name: "elementUi",
            priority: 10,
          },
          vue: {
            test: (module) => {
              return /vue/.test(module.context);
            }, // 直接使用 test 来做路径匹配，抽离elementui相关代码
            chunks: "initial",
            name: "vue",
            priority: 10,
          },
          // storybook: {
          //   test: (module) => {
          //     return /storybook/.test(module.context);
          //   }, // 直接使用 test 来做路径匹配，抽离elementui相关代码
          //   chunks: "initial",
          //   name: "storybook",
          //   priority: 10,
          // }
        }
      }

    }
    // Treemap sizes

    // zip压缩
    config.plugins.push(new CompressionPlugin({
      test: /\.js$|\.html$|.\css/, //匹配文件名
      threshold: 10240,//对超过10k的数据压缩
      deleteOriginalAssets: false //  不删除源文件
    }))
  }
  // config.plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true, analyzerPort: 8919 }))
  // config.plugins.push(new HtmlWebpackExternalsPlugin({
  //   externals: [{
  //     module: 'vue',
  //     entry: 'https://cdn.jsdelivr.net/npm/vue@2.6.12',
  //     global: 'Vue'
  //   }]
  // }))

  // config.plugins.push(new webpack.optimization.minimize({
  //   compress: {
  //     warnings: false
  //   }
  // })
  // )
  // config.plugins.push(new webpack.DefinePlugin({
  //   'MY_BASE_URL': JSON.stringify(process.env.MY_BASE_URL), // baseurl
  //   'SERVICE_URL': JSON.stringify(process.env.MY_NODE_ENV),
  //   'process.env': env
  // }))
  config.module.rules.push({
    test: /\.scss$/,
    include: path.resolve(__dirname, '../stories'),
    use: ['style-loader', 'css-loader', 'sass-loader']
  })
  config.module.rules.push({
    test: /\.less$/,
    include: path.resolve(__dirname, '../stories'),
    use: ['style-loader', 'css-loader', 'less-loader']
  })
  // 注意storybook中devServer不生效
  // config.devServer = {
  //   open: false,
  //   // port: 8099,
  //   // proxy: {
  //   //   '/api': 'http://www.baidu.com'
  //   // },
  //   before(app) {
  //     apiMocker(app, path.resolve('./mock/index.js'))
  //   }
  // }

  // if (process.env.NODE_ENV === 'production') {
  //   config.output.filename = 'bundle.[name].js'
  //   config.optimization.splitChunks.automaticNameDelimiter = '.'
  //   config.optimization.runtimeChunk = {
  //     name: entrypoint => `runtime.${entrypoint.name}`
  //   }
  // }
  // console.log(config);
  // console.log('process.env:\n' + JSON.stringify(process.env))
  return config
}