import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail'
import Contact from '@/components/Contact'
import Address from '@/components/Address'
import Order from '@/components/Order'
import Bumpertype from '@/components/Bumpertype'
import RLtype from '@/components/RLtype'
import Stepper from '@/components/Stepper'
import Rupd from '@/components/Rupd'
import Lupd from '@/components/Lupd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stepper',
      component: Stepper
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
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
    {
      path: '/RLtype',
      name: 'RLtype',
      component: RLtype
    },
    {
      path: '/Rupd',
      name: 'Rupd',
      component: Rupd
    },
    {
      path: "/Lupd",
      name: 'Lupd',
      component: Lupd
    }
  ]
})
