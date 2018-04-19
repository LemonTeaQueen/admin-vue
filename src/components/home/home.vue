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
      <el-aside class="home-aside" width="200px">Aside</el-aside>
      <el-main class="home-main">Main</el-main>
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
.home-container{
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
