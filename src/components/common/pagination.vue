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
      this.handleCurrentChange()
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        // console.log(`当前页: ${val}`)
        var url = this.$parent.actionUrl
        if (val === undefined) {
          console.log('初始化分页数据')
        } else {
          if (val % 2 === 1) {
            url = 'table.json'
          } else {
            url = 'table2.json'
          }
        }
        api.getDate(url, (error, res) => {
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
