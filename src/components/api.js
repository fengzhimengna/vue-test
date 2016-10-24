export function getPost (id, cb) {
  // fake an API request
  this.$http.get('/menu.json').then((response) => {
    // success callback
    cb(null, response)
  }, (response) => {
    // error callback
    cb(new Error('Post not found.'))
  })
}
