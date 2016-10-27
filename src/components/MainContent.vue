<template>
  <div >
	<div id="header">
	  <img src="../assets/logo2.png">
	  <h2>华泰德丰后台内容管理系统
	  <span style="float:right;margin-right:10px;">您好，{{username}}</span>
	  </h2>
	</div>
	<div id="nav">
	  <el-menu default-active="" class="el-menu-vertical-demo" theme="light" router>
      <el-submenu v-for="item in menuList" v-bind:index='item.name' v-if='item.children != null' >
	    <template slot="title">{{ item.displayName }}</template>
		<el-menu-item v-for="child in item.children" v-bind:index='child.url'>{{child.displayName}}</el-menu-item>
	  </el-submenu>
	  <el-menu-item v-for="item in menuList" v-bind:index='item.url' v-if='item.children == null' >{{ item.displayName }}</el-menu-item>
    </el-menu>
	</div>
	<div id="main">
	  <transition name="fade" mode="out-in">
	    <router-view class="view"></router-view>
	  </transition>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [],
      error: null,
      username: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = null
      this.loading = true
      this.$http.get('http://localhost:8081/static/menu.json').then((response) => {
        if (response.ok) {
          this.username = 'admin'
          this.menuList = response.data
        }
      }, (response) => {
        this.error = new Error('Post not found.')
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
	width: 100%;
	height: 80px;
	text-align: center;
	line-height: 80px;
	font-size: 15px;
	color: #fffaf3;
	font-weight: bold;
	background-color: #20a0ff;
}
#header img{
	float: left;
	display: inline-block;
	position: relative;
    padding: 5px;
	top: 6px;
}
#nav{
	width: 160px;
	float: left;
	height: 100%;
	padding-bottom: -80px;
	text-align: center;
	font-size: 15px;
	color: #ffffff;
	font-weight: bold;
	background-color: #eff2f7;
	position: absolute;
}
#main{
	margin-left: 160px;
}
#main .view{
    border-bottom: green;
    border-style: solid;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
