import Vue from 'vue'
import Router from 'vue-router'
// @是src路径的别名,是Webpack配置的. 好处:无论index在哪里,这个路径都不用变!
import Login from '@/components/login/login'
import Home from '@/components/home/home'
// 用户管理组件
import UserList from '@/components/user-list/user-list.vue'
// 角色管理组件
import RoleList from '@/components/role-list/role-list.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'login', // login组件会渲染到APP.Vue根组件中的router-view标签中
      path: '/login',
      component: Login
    },
    {
      name: 'home', // home组件会渲染到APP.Vue根组件中的router-view标签中
      path: '/',
      component: Home,
      // 通过配置子路由的方式让某个组件渲染到父路由组件
      // 1 在父路由中添加<router-view><router-view>标记
      // 2 在父路由中通过children来声明子路由
      // 3 在children数组中配置一个一个子路由对象
      // 当访问user-list组件时,会先渲染它的父路由组件
      // 再将user-list组件渲染到父路由的router-view标签中
      children: [
        {
          name: 'user-list',
          path: '/users',
          component: UserList
        },
        {
          name: 'role-list',
          path: '/roles',
          component: RoleList
        }
      ]
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
