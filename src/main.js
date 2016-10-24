import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
import routerConfig from './routers'

Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: routerConfig
})

new Vue(Vue.util.extend({ router }, App)).$mount('#my-app')
