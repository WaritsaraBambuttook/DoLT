import Vue from 'vue'
import Router from 'vue-router'
import detailProject from '../pages/detailProject'
import Contact from '../pages/Contact'
import Stepper from '../pages/Stepper'
import google from '../pages/googleSheet'
import bumper from '../components/TypeofCar/TypeTwo.vue'
import rupd from '../components/RUPD/Rsummary.vue'
import Lupd from '../components/LUPD/Lupd.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'detailProject',
      component: detailProject
    },
    // {
    //   path: '/',
    //   name: 'Stepper',
    //   component: Stepper
    // },
    {
      path: '/download',
      name: 'Stepper',
      component: Stepper
    },
    {
      path: '/detailProject',
      name: 'detailProject',
      component: detailProject
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },

  ]
})
