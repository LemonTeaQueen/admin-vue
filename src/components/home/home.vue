<template>
  <el-container class="home-container">
    <el-header class="home-header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple home-logo">Logo</div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple home-title">电商后台管理系统</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple home-out">
            <a href="#" @click.prevent="logout">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="home-container">
      <el-aside class="home-aside" width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo aside-menu"
          :unique-opened="true"
          :router="true"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/users">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/roles">角色列表</el-menu-item>
            <el-menu-item index="2-3">权限列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">商品列表</el-menu-item>
            <el-menu-item index="3-2">商品分类</el-menu-item>
            <el-menu-item index="3-3">商品参数</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">数据报表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="home-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // beforeCreate () {
  //   // 如果没有登录则让用户跳转到登录组件
  //   // 如果登录,则从本地存储拿到Token
  //   // 如果有则让其通过,否则跳转的登录组件
  //   // 如何验证票据的正确性,应该由服务器验证
  //   const token = window.localStorage.getItem('admin-token')
  //   console.log(token)
  //   if (!token) {
  //     this.$router.push({
  //       name: 'login'
  //     })
  //   }
  // },
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      this.$confirm('确定退出吗', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // console.log('点击退出')
        // 删除本地存储中的Token令牌
        window.localStorage.removeItem('admin-token')
        // 跳转到登录视图
        this.$router.push({
          name: 'login'
        })
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消退出'
        })
      })
    }
  }
}
</script>

<style>
.home-container,.aside-menu{
  height: 100%;
}
.home-header{
  padding: 0;
  line-height: 60px;
  background-color: #B3C0D1;
}
.home-aside{
  background-color: #D3DCE6;
}
.home-main{
  background-color: #E9EEF3;
}
.home-logo{
  text-align: center;
}
.home-title{
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
.home-out{
  text-align: center;
}
.home-out a{
  text-decoration: none;
  color: #555;
}
</style>
