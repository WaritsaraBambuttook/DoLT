import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../views/Detail'
import Contact from '../views/Contact'
import Address from '../views/Address'
// import Order from '@/components/Order'
// import Bumpertype from '@/components/Bumpertype'
// import RLtype from '@/components/RLtype'
import Stepper from '../views/Stepper'
// import Rupd from '@/components/Rupd'
// import Lupd from '@/components/Lupd'
// import Rsummary from '@/components/Rsummary'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stepper',
      component: Stepper
    },
    // {
    //   path: '/Order',
    //   name: 'Order',
    //   component: Order
    // },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    // {
    //   path: '/',
    //   name: 'Bumpertype',
    //   component: Bumpertype
    // },
    // {
    //   path: '/RLtype',
    //   name: 'RLtype',
    //   component: RLtype
    // },
    // {
    //   path: '/Rupd',
    //   name: 'Rupd',
    //   component: Rupd
    // },
    // {
    //   path: "/Lupd",
    //   name: 'Lupd',
    //   component: Lupd
    // },
    // {
    //   path: "/",
    //   name: 'Rsummary',
    //   component: Rsummary
    // }
  ]
})
