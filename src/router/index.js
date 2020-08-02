import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Appindex from '@/components/Appindex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Appindex',
      component: Appindex
    }
  ]
})
