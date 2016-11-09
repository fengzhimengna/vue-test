<template>
  <div id="cms2">
    <h1>{{msg}}</h1>
    <el-button @click.native="doLogin">登录</el-button>
  </div>
</template>

<script>
  export default {
    name: 'cms2',
    data () {
      return {
        msg: '登录页面'
      }
    },
    methods: {
      doLogin () {
        this.$store.dispatch('setApp', 'sddsd')
        this.$router.push('/home')
      }
    }
  }
</script>

</style>
