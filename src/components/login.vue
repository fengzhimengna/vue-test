<template>
  <div id="cms2">
    <h1>{{msg}}</h1>
    <div>
      <span>
        <label>用户名：<el-input type="text" v-model="username"/></label>
      </span>
      <span>
        <label>密&nbsp;&nbsp;码：<el-input type="text" v-model="password"/></label>
      </span>

      <el-button @click.native="doLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
  import api from '../api/backstage'
  export default {
    name: 'cms2',
    data () {
      return {
        msg: '登录页面',
        username: '',
        password: ''
      }
    },
    methods: {
      doLogin () {
        api.doLogin(this.username, this.password, (error, data) => {
          if (error) {
            console.log(error)
          } else {
            console.log(data)
            this.$store.dispatch('setApp', this.username)
            this.$router.push('/home')
          }
        })
      }
    }
  }
</script>

</style>
