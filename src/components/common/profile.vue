<template>
  <div>
    <el-button @click.native="doLogout">退出</el-button>
    您好，{{username}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: this.$store.getters.getApp
      }
    },
    methods: {
      doLogout () {
        this.$store.dispatch('setApp', '')
        if (this.$store.getters.getApp === '') {
          this.$router.push('/login')
        }
      }
    }
  }
</script>

