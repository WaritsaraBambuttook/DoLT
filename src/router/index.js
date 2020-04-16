import Vue from 'vue'
import Router from 'vue-router'
import detailProject from '../pages/detailProject'
import Contact from '../pages/Contact'
import Download from '../pages/Download'
// import google from '../pages/googleSheet'
// import bumper from '../components/TypeofCar/TypeTwo.vue'
// import lupd from '../components/LUPD/Lsummary.vue'
// import Lupd from '../components/LUPD/Lupd.vue'
// import local from '../pages/localStorage'
import rupd from '../components/RUPD/Rupd.vue'
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
    //   name: 'Lupd',
    //   component: Lupd
    // },
    {
      path: '/download',
      name: 'Download',
      component: Download
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
