import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import jQuery from 'jquery';
import 'popper.js';
import './assets/css/style.css';
import {fb} from './firebase.js';
import VueFirestore from 'vue-firestore';
import Swal from 'sweetalert2';
require('firebase/firestore')

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

Vue.use(VueFirestore, {
  key: 'id',
  enumerable: true
})

Vue.use(VueFirestore)
window.$ = window.jQuery = jQuery;
window.Swal = Swal;
window.Toast = Toast;




Vue.config.productionTip = false;

let app='';

fb.auth().onAuthStateChanged(function() {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});


