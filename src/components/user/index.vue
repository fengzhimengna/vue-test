<template>
  <div>
    <div>
      <!--<form :model="query" method="post" action="http://localhost:8080/user/list.do">
        <input v-model="query.name" name="name">
        <button type="submit">搜索</button>
      </form>-->
      <el-form :inline="true" :model="query" @submit.prevent="onSubmit">
        <el-form-item label="日期">
          <el-col :span="8">
            <el-date-picker type="date" placeholder="开始日期" v-model="query.startDate" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="8">
            <el-date-picker type="date" placeholder="结束日期" v-model="query.endDate" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="姓名">
          <el-col :span="16">
            <el-input v-model="query.name" placeholder="输入姓名" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="性别" style="width: 120px">
          <el-col :span="16">
            <select v-model="query.sex">
              <option value="">请选择</option>
              <option value="0">男</option>
              <option value="1">女</option>
            </select>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" icon="search" @click.native.prevent="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="button-bar">
      <el-button type="primary" icon="plus" @click.native="add" >新建</el-button>
    </div>
    <el-table
      :data="tableData" stripe style="width: 100%">
      <el-table-column property="id" label="ID" align="center" width="180"></el-table-column>
      <el-table-column property="name" align="center" label="姓名" width="180"></el-table-column>
      <el-table-column property="age" align="center" label="年龄"></el-table-column>
      <el-table-column property="sex" align="center" label="性别" :formatter="sexFormatter"></el-table-column>
      <el-table-column property="birthday" :formatter="dateFormatter" align="center" label="出生日期"></el-table-column>
      <el-table-column inline-template fixed="right" label="操作" property="id" width="80">
        <el-button type="text" size="small" @click.native="edit(row.id)">编辑</el-button>
      </el-table-column>
    </el-table>
    <div style="margin-top:10px;margin-bottom:10px;" id="pageDiv">
      <component :is="currentView" :conditions="query" :paged="paged" :actionUrl="actionUrl"></component>
    </div>
  </div>
</template>

<script>
import pagination from '../common/pagination'
import router from '../../routers'
import commonUtil from '../../util/common'

export default {
  components: {
    pagination
  },
  created () {
    document.title = '列表'
  },
  data () {
    return {
      query: {
        name: '',
        sex: null,
        startDate: '',
        endDate: '',
        pageIndex: 1
      },
      conditions: null,
      paged: false,
      tableData: [], // 必须项
      error: null,
      currentView: pagination,
      actionUrl: 'http://localhost:8080/user/list.do' // 必须项
    }
  },
  methods: {
    dateFormatter (row, column) {
      if (row.birthday) {
        return commonUtil.dateFormatter(row.birthday)
      } else {
        return ''
      }
    },
    sexFormatter (row, column) {
      return row.sex === 0 ? '男' : '女'
    },
    add () {
      router.push('/user/add')
    },
    edit (id) {
      router.push({path: '/user/add', query: { id: id }})
    },
    onSubmit () {
      // 触发翻页
      this.paged = !this.paged
    }
  }
}
</script>

<style scoped>
  .button-bar .el-button{
    float: left;
    margin-bottom: 5px;
    margin-right: 10px;
  }
  .el-form--inline .el-form-item {
    margin-right: 0;
  }
  select {
    width: 100%;
    height: 36px;
    color: #1f2d3d;
    background-color: #fff;
    border: 1px solid #C0CCDA;
    border-radius: 4px;
  }
</style>
