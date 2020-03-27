// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase';
require('firebase/firestore');
import { ButtonPlugin } from 'bootstrap-vue'
Vue.use(ButtonPlugin)
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)

// import VueFormWizard from 'vue-form-wizard'
// import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// Vue.use(VueFormWizard)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import VueGoodWizard from 'vue-good-wizard';
Vue.use(VueGoodWizard);

Vue.config.productionTip = false
var Config = {
  apiKey: "AIzaSyCREOi6bLi6nBWOQce7fYoMQbO7QGf-J1E",
  authDomain: "dolt-8cc63.firebaseapp.com",
  databaseURL: "https://dolt-8cc63.firebaseio.com",
  projectId: "dolt-8cc63",
  storageBucket: "dolt-8cc63.appspot.com",
  messagingSenderId: "363171306887",
  appId: "1:363171306887:web:a7f49f657f6937047a4722",
  measurementId: "G-6DB2DE5G4T"
};
// // Initialize Firebase
firebase.initializeApp(Config);
// firebase.analytics();
Vue.prototype.$firebase = firebase;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
