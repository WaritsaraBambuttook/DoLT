import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Address from '../pages/Address'
import Stepper from '../pages/Stepper'
import google from '../pages/googleSheet'
import bumper from '../components/TypeofCar/TypeOne.vue'
import rupd from '../components/RUPD/Rupd.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rupd',
      component: rupd
    },
    // {
    //   path: '/',
    //   name: 'Stepper',
    //   component: Stepper
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
