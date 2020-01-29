import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail'
import Contact from '@/components/Contact'
import Address from '@/components/Address'
import Order from '@/components/Order'
import Bumpertype from '@/components/Bumpertype'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    {
      path: '/Bumpertype',
      name: 'Bumpertype',
      component: Bumpertype
    }
  ]
})
