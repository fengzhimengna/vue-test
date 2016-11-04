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
  import commonUtil from '../../util/common'
  export default {
    data () {
      return {
        totalCount: 0,
        currentPage: 1,
        isSearch: false
      }
    },
    props: {
      conditions: {
        type: Object
      },
      isChange: {
        type: Boolean
      },
      actionUrl: {
        type: String
      }
    },
    watch: {
      isChange (val) {
        this.currentPage = 1
        this.handleCurrentChange(1)
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
        this.conditions.pageIndex = val
        var url = this.actionUrl
        var params = commonUtil.getExceptNull(this.conditions)
        console.log(params)
        commonUtil.getDataByApi(url, params, this.$parent, this)
      }
    }
  }
</script>
