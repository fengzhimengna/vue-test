<template>
  <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="出生日期">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="form.age"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.sex">
        <el-radio :label="0">男</el-radio>
        <el-radio :label="1">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.native.prevent="onSubmit">保存</el-button>
      <el-button @click.native="cancel">取消</el-button>
    </el-form-item>
</el-form>
</template>
<script>
  import router from '../../routers'
  import api from '../../api/backstage'
  export default {
    data () {
      return {
        form: {
          id: '',
          name: '',
          birthday: '',
          sex: 0,
          age: ''
        }
      }
    },
    created () {
      if (this.$route.query.id) {
        this.getData(this.$route.query.id)
      }
    },
    methods: {
      getData (id) {
        api.getEntity('get.do', {'id': id}, (error, res) => {
          if (error) {
            console.log(error)
          } else {
            this.form.id = res.id
            this.form.name = res.name
            this.form.birthday = (res.birthday === null ? '' : new Date(res.birthday))
            this.form.age = res.age
            this.form.sex = res.sex
          }
        })
      },
      onSubmit () {
        api.saveEntity('save.do', this.form, (error, res) => {
          if (error) {
            console.log(error)
          } else {
            router.go(-1)
          }
        })
      },
      cancel () {
        router.go(-1)
      }
    }
  }
</script>
<style>
  .el-form {
    width: 80%;
    margin: 0;
    padding: 0;
  }
</style>
