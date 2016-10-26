import Vue from 'vue'
import VueRouter from 'vue-router'

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
      path: '', component: require('./components/user/index')
    },
    {
      path: 'add', component: require('./components/user/add')
    }
  ]
}, {
  path: '/foo',
  component: require('./components/foo/index')
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
})

export default router
