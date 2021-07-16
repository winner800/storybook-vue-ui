const proxy = require('http-proxy-middleware')
const path = require('path')
const apiMocker = require('mocker-api')

module.exports = function expressMiddleware(router) {
  apiMocker(router, path.resolve('./mock/index.js'))

  // router.use(
  //   '/api/user/list',
  //   proxy({
  //     target: `http://localhost:3721/`, // 服务器 api地址
  //     changeOrigin: true
  //   })
  // )
}