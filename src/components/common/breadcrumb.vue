<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumbs">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    data () {
      return {
        breadcrumbs: [
          {
            'name': '首页'
          },
          {
            'name': document.title

          }
        ]
      }
    }
  }
</script>
