import Vue from 'vue'
import VueRouter from 'vue-router'
import breadcrumb from './components/common/breadcrumb.vue'
import store from './vuex/store'
import Main from './components/maincontent.vue'

Vue.use(VueRouter)

const User = {
  template: `
    <div class="user">
      <router-view></router-view>
    </div>
  `
}

const routerConfig = [
  {
    path: '/login',
    component: require('./components/login')
  }, {
    path: '/',
    component: Main,
    children: [
      {
        path: 'home', component: (resolve) => require(['./components/home'], resolve) // 这种方式是按需加载
      }, {
        path: '/foo',
        component: require('./components/foo/index')
      }, {
        path: '/bar',
        component: require('./components/bar/index')
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
      }
    ]
  }, {
    path: '*',
    component: require('./components/home')
  }]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: routerConfig
})

let indexScrollTop = 0
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (store.getters.getApp.length === 0) {
      next('/login')
    } else {
      if (to.path !== '/') {
        indexScrollTop = document.body.scrollTop
      }
      document.title = to.meta.title || document.title
      next()
    }
  }
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
