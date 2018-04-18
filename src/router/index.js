import Vue from 'vue'
import Router from 'vue-router'
// @是src路径的别名,是Webpack配置的. 好处:无论index在哪里,这个路径都不用变!
import Login from '@/components/login/login'
import Home from '@/components/home/home'

Vue.use(Router)

export default new Router({
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
