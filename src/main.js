
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './css/reset.css'
import './css/iconfont.css'
fastClick.attach(document.body)
Vue.config.productionTip = false
/* eslint-disable */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
