const proxy = {

  //业务接口 start





  //业务接口 end

  // 接口参考示例  start -----------------------------------------------------------------------
  'POST /api/user': { id: 1, username: 'kenny', sex: 6 },
  'GET /api/user/list': [
    { id: 1, username: 'kenny', sex: 6 },
    { id: 2, username: 'kenny', sex: 7 }
  ],
  'GET /api/login/account': (req, res) => {
    const { password, username } = req.body
    if (password === '888888' && username === 'admin') {
      return res.send({
        status: 'ok',
        code: 0,
        token: 'sdfsdfsdfdsf',
        data: { id: 1, username: 'kenny', sex: 6 }
      })
    } else {
      return res.send({ status: 'error', code: 403 })
    }
  },
  'DELETE /api/user/:id': (req, res) => {
    console.log('---->', req.body)
    console.log('---->', req.params.id)
    res.send({ status: 'ok', message: '删除成功！' })
  },
  // 接口参考示例  end-----------------------------------------------------------------------
}
module.exports = proxy