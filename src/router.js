import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import City from './components/city/city'
Vue.use(Router)
const router = new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/city', component: City}
  ]

})
export default router
