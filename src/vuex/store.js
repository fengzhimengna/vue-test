import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/user_info'
import actions from './actions/user_actions'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    userInfo
  },
  actions,
  strict: debug
})
