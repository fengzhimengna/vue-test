<template>
  <div>
    <span style="color:red;">{{error}}</span>
    <el-button type="primary" @click.native="add" >新建</el-button>
    <el-table
      :data="tableData" stripe style="width: 100%">
      <el-table-column property="date" label="日期" width="180"></el-table-column>
      <el-table-column property="name" label="姓名" width="180"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
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
      actionUrl: 'table.json' // 必须项
    }
  },
  methods: {
    add () {
      router.push('/user/add')
    }
  }
}
</script>
