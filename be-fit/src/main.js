// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
global.jQuery = jQuery
let Bootstrap = require('bootstrap')

Vue.use(VueResource)
Vue.use(Bootstrap)
Vue.config.productionTip = false
Vue.http.options.root = 'http://localhost:3000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
