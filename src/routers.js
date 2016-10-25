const User = {
  template: `
    <div class="user">
      <router-view></router-view>
    </div>
  `
}

export default [{
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
