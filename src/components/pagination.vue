<template>
  <el-pagination
      @sizechange="handleSizeChange"
      @currentchange="handleCurrentChange"
      :current-page=currentPage
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total=totalCount>
    </el-pagination>
</template>

<script>
  export default {
    data () {
      return {
        totalCount: Number(this.$route.query.totalCount),
        currentPage: Number(this.$route.query.currentPage)
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>