<template>
  <div >
	<div id="header">
	  <img src="../assets/logo.png">
	  <h2>头部
	  <span style="float:right;margin-right:10px;">{{username}}</span>
	  </h2>
	</div>
	<div id="nav">
	  {{error}}
	  <ul >
		<li v-for="item in menuList"><router-link :to='item.url' exact>{{ item.displayName }}</router-link></li>
	  </ul>
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
      this.$http.get('static/menu.json').then((response) => {
        console.log(response.data)
        if (response.ok) {
          this.username = 'admin'
          this.menuList = response.data
          console.log(typeof this.menuList[0].exact)
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
	background-color: #f9c81e;
}
#header img{
	width: 70px;
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
	background-color: #cecece;
	position: absolute;
}
#main{
	margin-left: 160px;
	text-align: center;
	line-height: 280px;
	font-size: 15px;
	color: #f9c81e;
	font-weight: bold;
	background-color: #fffaf3;
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

a {
  color: #42b983;
  display: inline-block;
  padding: 10px;
  margin: 10px 10px;
}
a:hover{
	background-color: #42b983;
    color: white;
}
a.active{
	background-color: #42b983;
    color: white;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
