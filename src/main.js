import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
import routerConfig from './routers'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: routerConfig
})

new Vue(Vue.util.extend({ router }, App)).$mount('#my-app')
let indexScrollTop = 0
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop
  }
  document.title = route.meta.title || document.title
  next()
})

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop
    })
  }
})
