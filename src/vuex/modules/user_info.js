/**
 * Created by YY on 2016/10/28.
 */
// content
import {
  SET_BASEINFO,
  SET_DETAIL,
  SET_USERNAME
} from '../mutation_types'
const state = {
  // 保存第一页数据
  id: '',
  accessToken: '',
  loginName: '',
  avatarUrl: '',
  score: '',
  recentTopics: '',
  recentReplies: '',
  github: '',
  createAt: ''
}

const mutations = {
  // 设置 token 登录名 头像
  [SET_BASEINFO] (state, data) {
    try {
      state.id = data.id
      state.accessToken = data.accesstoken
      state.loginName = data.loginname
      state.avatarUrl = data.avatar_url
    } catch (err) {
      console.log(err)
    }
  },
  [SET_DETAIL] (state, data) {
    try {
      state.score = data.score
      state.recentTopics = data.recent_topics
      state.recentReplies = data.recent_replies
      state.github = data.githubUsername || ''
      state.createAt = data.create_at
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
