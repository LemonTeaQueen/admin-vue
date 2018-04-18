<template>
  <el-container class="home-container">
    <el-header class="home-header">Header</el-header>
    <el-container class="home-container">
      <el-aside class="home-aside" width="200px">Aside</el-aside>
      <el-main class="home-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
.home-container{
  height: 100%;
}
.home-header{
  background-color: #B3C0D1;
}
.home-aside{
  background-color: #D3DCE6;
}
.home-main{
  background-color: #E9EEF3;
}
</style>
