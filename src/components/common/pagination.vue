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
  import api from '../../api/backstage'
  export default {
    data () {
      return {
        totalCount: 0,
        currentPage: 0
      }
    },
    created () {
      this.handleCurrentChange(1)
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
        var url = this.$parent.actionUrl
        api.getDate(url, {'pageIndex': val}, (error, res) => {
          if (error) {
            console.log(error)
          } else {
            this.$parent.tableData = res.dataList
            this.totalCount = res.totalCount
          }
          // console.log('next page')
        })
      }
    }
  }
</script>
