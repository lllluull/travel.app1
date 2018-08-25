import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
Vue.use(Router)
const router = new Router({
  routes: [
    {path: '/home', component: Home}
  ]

})
export default router
