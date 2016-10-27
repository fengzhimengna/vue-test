import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './routers'
import store from './vuex/store'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.debug = true

Vue.use(VueResource)
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#cms-app')

