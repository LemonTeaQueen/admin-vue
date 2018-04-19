import Vue from 'vue'
import Router from 'vue-router'
// @是src路径的别名,是Webpack配置的. 好处:无论index在哪里,这个路径都不用变!
import Login from '@/components/login/login'
import Home from '@/components/home/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home
    }
  ]
})

// 1. 添加路由拦截器(导航钩子 导航守卫)
// 接下来所有的视图导航都必须经过这道关卡,一旦进入就必须表明
// to 跳转到哪
// from 从哪跳转来的
// next 允许通过
router.beforeEach((to, from, next) => {
  // 获取当前去请求的视图路径标识
  // 如果是登录组件,则直接通过
  // 如果是非登录组件,则检测Token是否正确
  // 有则通过,无则跳转登录组件
  // console.log(to)
  if (to.name === 'login') {
    next()
  } else {
    // 检查Token
    const token = window.localStorage.getItem('admin-token')
    if (!token) { // 如果不存在则跳转登录
      next({
        name: 'login'
      })
    } else { // 如果存在则通过
      next()
    }
  }
})
export default router
