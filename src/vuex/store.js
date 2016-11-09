import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    SET_APP (state, username) {
      state.username = username
    }
  },
  actions: {
    setApp ({commit}, username) {
      commit('SET_APP', username)
    }
  },
  getters: {
    getApp: (state) => state.username
  }
})
