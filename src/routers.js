export default [{
  path: '/',
  component: require('./components/index')
}, {
  path: '/user',
  component: require('./components/user/index')
}, {
  path: '/foo',
  component: require('./components/foo/index')
}, {
  path: '*',
  component: require('./components/index')
}]
