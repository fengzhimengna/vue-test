/**
 * Created by YY on 2016/11/2.
 */
import api from '../api/backstage'

export default {
  // 去除null属性
  getExceptNull (obj) {
    var res = {}
    for (var key in obj) {
      if (obj[key] != null) {
        console.log(obj[key].toString().length)
        if (obj[key].toString().length > 0) {
          res[key] = obj[key]
        }
      }
    }
    return res
  },
  dateFormatter (val) {
    var d = new Date(val)
    var day = d.getDate()
    var month = d.getMonth() + 1
    var year = d.getFullYear()
    if (day < 10) {
      day = '0' + day
    }
    if (month < 10) {
      month = '0' + month
    }
    return year + '-' + month + '-' + day
  },
  getDataByApi (url, params, thatTable, thatPage) {
    api.getDate(url, params, (error, res) => {
      if (error) {
        console.log('error=' + error)
      } else {
        thatTable.tableData = res.dataList
        thatPage.totalCount = res.totalCount
      }
    })
  }
}
