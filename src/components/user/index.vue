<template>
 <div>
  <span style="color:red;">{{error}}</span>
  <el-button type="primary" @click.native="add" >新建</el-button>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      property="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      property="address"
      label="地址">
    </el-table-column>
  </el-table>
  <div style="margin-top:10px;margin-bottom:10px;">
    <pagination/>
  </div>
  </div>
</template>

<script>
import pagination from '../pagination'

export default {
  components: {
    pagination
  },
  data () {
    return {
      tableData: [],
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = null
      this.tableData = []
      this.loading = true
      this.$http.get('http://localhost:8081/static/table.json').then((response) => {
        console.log(response.data)
        if (response.ok) {
          this.tableData = response.data
        }
      }, (response) => {
        this.error = new Error('Post not found.')
      })
    },
    add () {
      console.log(this.$route)
      this.$route.path = 'http://localhost:8081/user/add'
    }
  }
}
</script>
