import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Address from '../pages/Address'
import Stepper from '../pages/Stepper'
// import Register from '../views/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stepper',
      component: Stepper
    },
    // {
    //   path: '/',
    //   name: 'Register',
    //   component: Register
    // },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },

  ]
})
