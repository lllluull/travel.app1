
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import vueAwesomeSwiper from 'vue-awesome-swiper'
import './css/reset.css'
import './css/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.use(vueAwesomeSwiper)
fastClick.attach(document.body)
Vue.config.productionTip = false
/* eslint-disable */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
