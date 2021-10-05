import Vue from 'vue'
import Router from 'vue-router'
import CookingRecipe from '@/components/CookingRecipe'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CookingRecipe',
      component: CookingRecipe
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
