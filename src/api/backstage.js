var reqwest = require('reqwest')
// const basePath = 'http://www.defengenong.com:8090/module/task/getCity.html?parentId=510000&levelType=2'
const basePath = '/static'
// const basePath = 'https://api.github.com/users/github'

export default {
  // 获取表格数据
  getDate (url, data, callback) {
    reqwest({
      url: url,
      crossOrigin: true,
      method: 'post',
      data: data
    })
      .then(val => callback(null, JSON.parse(val)))
      .catch(e => callback(e))
  },
  // 获取菜单数据
  getMenu (url, callback) {
    reqwest({
      url: `${basePath}/${url}`,
      crossOrigin: true
    })
      .then(val => callback(null, val))
      .catch(e => callback(e))
  },
  // 获取实体详情
  getEntity (url, params, callback) {
    reqwest({
      url: 'http://localhost:8080/user/get.do',
      crossOrigin: true,
      method: 'post',
      data: params
    })
      .then(val => callback(null, JSON.parse(val).entity))
      .catch(e => callback(e))
  },
  // 保存实体
  saveEntity (url, params, callback) {
    reqwest({
      url: 'http://localhost:8080/user/save.do',
      crossOrigin: true,
      method: 'post',
      data: params
    })
      .then(val => callback(null, val))
      .catch(e => callback(e))
  },
  // 登录
  doLogin (username, password, callback) {
    reqwest({
      url: 'http://localhost:8079/security/login2.do',
      crossOrigin: true,
      method: 'post',
      data: {username: username, password: password}
    })
      .then(val => callback(null, val))
      .catch(e => callback(e))
  }
}
