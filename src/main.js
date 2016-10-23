import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import appSidebar from './SideBar'
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(VueRouter)
// 定义 (用 Vue.extend() 创建一个组件构造器)
var appHeader = Vue.extend({
  template: '<div id="Header">上方列</div>'
})
// 注册 (要把这个构造器用作组件，需要用 Vue.component(tag, constructor) 注册 ：)
// 注意！组件注册后，会去替换 自定义的元素
Vue.component('app-header', appHeader)
Vue.component('app-sidebar', appSidebar)
Vue.component('app-body', App)
const routes = [
  { path: '/:module', component: App }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
// 创建根实例
new Vue({
  router
}).$mount('#app')
