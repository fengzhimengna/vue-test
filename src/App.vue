<template>
  <div id="cms">

    <main-content></main-content>
  </div>
</template>

<script>
import MainContent from './components/MainContent'

export default {
  name: 'cms',
  components: {
    MainContent
  }
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
