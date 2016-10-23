<template>
  <div id="Sidebar">
    <ul>
        <li v-for="item in menuList">
            <a v-bind:href="item.url">{{ item.name }}</a>
        </li>
    </ul>
  </div>
</template>

<script>
var menuList = [{'id': 1, 'name': '首页', 'url': '/'}, {'id': 2, 'name': '列表', 'url': '/list'}]

export default {
  data () {
    return {
      menuList: menuList
    },
	created () {
      this.fetchData()
	},
	watch: {
	  '$route': 'fetchData'
	},
	methods: {
	  fetchData () {
		this.menuList = menuList
	  }
	}
  }
}
</script>
