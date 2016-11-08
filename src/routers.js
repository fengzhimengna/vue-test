import Vue from 'vue'
import VueRouter from 'vue-router'
import breadcrumb from './components/common/breadcrumb.vue'

Vue.use(VueRouter)

const User = {
  template: `
    <div class="user">
      <router-view></router-view>
    </div>
  `
}

const routerConfig = [{
  path: '/',
  component: require('./components/index')
}, {
  path: '/user',
  component: User,
  children: [
    {
      path: 'index', component: (resolve) => require(['./components/user/index'], resolve) // 这种方式是按需加载
    },
    {
      path: 'add', component: require('./components/user/add')
    }
  ]
}, {
  path: '/foo',
  component: require('./components/foo/index')
}, {
  path: '/login',
  component: require('./views/login')
}, {
  path: '*',
  component: require('./components/index')
}]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: routerConfig
})

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
  // 更改面包屑导航
  breadcrumb.breadcrumbs = [
    {
      'name': '首页'
    },
    {
      'name': '列表3'
    }
  ]
  // console.log(breadcrumb.breadcrumbs)
})

export default router
