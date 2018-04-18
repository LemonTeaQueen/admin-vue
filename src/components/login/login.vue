<template>
<div class="login-wrap">
  <p>登录组件</p>
  <el-form ref="form" :model="userForm" label-width="80px">
    <el-form-item label="用户名">
      <el-input
        v-model="userForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        v-model="userForm.password"
        type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
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
</style>
