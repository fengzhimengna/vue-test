<template>
  <div id="cms">
    <div class="demo-block demo-box demo-form">
      <div class="source">
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cms'
  }
</script>

<style>
body{
  margin: 0;
  padding: 0;
  margin-top: -20px;
}
#cms {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin-top: 0px;
  position: inherit;
}


</style>
