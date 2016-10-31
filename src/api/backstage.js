var reqwest = require('reqwest')
// const basePath = 'http://www.defengenong.com:8090/module/task/getCity.html?parentId=510000&levelType=2'
const basePath = '/static'
// const basePath = 'https://api.github.com/users/github'

export default {
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
  getMenu (url, callback) {
    reqwest({
      url: `${basePath}/${url}`,
      crossOrigin: true
    })
      .then(val => callback(null, val))
      .catch(e => callback(e))
  }
}
