<template>
<div class="login-wrap">
  <el-form class="login-form" label-position="top" ref="form" :model="userForm" label-width="80px">
    <h2 class="title">用户登录</h2>
    <el-form-item label="用户名:">
      <el-input
        v-model="userForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码:">
      <el-input
        v-model="userForm.password"
        type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="login-button" type="primary" @click="login">登录</el-button>
    </el-form-item>
</el-form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      // 采集变淡数据
      // 表单验证
      // 发请求执行登录操作
      // 根据响应做交互
      // console.log(this.userForm)
      const res = await axios.post('http://localhost:8888/api/private/v1/login', this.userForm)
      // console.log(res)
      if (res.data.meta.status === 200) {
        this.$router.push({
          name: 'home'
        })
      }
    }
  }
}
</script>

<style>
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 5px;
}
.login-button {
  width: 100%;
}
h2{
  text-align: center;
}
</style>
