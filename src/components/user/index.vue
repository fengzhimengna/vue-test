<template>
  <div>
    <span style="color:red;">{{error}}</span>
    <el-button type="primary" @click.native="add" >新建</el-button>
    <el-table
      :data="tableData" stripe style="width: 100%">
      <el-table-column property="id" label="ID" align="center" width="180"></el-table-column>
      <el-table-column property="name" align="center" label="姓名" width="180"></el-table-column>
      <el-table-column property="age" align="center" label="年龄"></el-table-column>
    </el-table>
    <div style="margin-top:10px;margin-bottom:10px;">
      <pagination/>
    </div>
  </div>
</template>

<script>
import pagination from '../common/pagination'
import router from '../../routers'

export default {
  components: {
    pagination
  },
  data () {
    return {
      tableData: [], // 必须项
      error: null,
      actionUrl: 'http://localhost:8080/user/list.do' // 必须项
    }
  },
  methods: {
    add () {
      router.push('/user/add')
    }
  }
}
</script>

<style>

</style>
