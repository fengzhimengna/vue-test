/**
 * Created by YY on 2016/10/28.
 */
// content
import {
  SET_BASEINFO,
  SET_USERNAME
} from '../mutation_types'
const state = {
  // 保存第一页数据
  id: '',
  loginName: 'ss'
}

const mutations = {
  // 设置 token 登录名 头像
  [SET_BASEINFO] (state, data) {
    try {
      state.id = data.id
      state.loginName = data.loginname
    } catch (err) {
      console.log(err)
    }
  },
  [SET_USERNAME] (state, data) {
    try {
      state.loginName = data
    } catch (err) {
      console.log(err)
    }
  }
}

export default {
  state,
  mutations
}
