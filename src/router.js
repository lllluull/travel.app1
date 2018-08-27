import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import City from './components/city/city'
import Detail from './components/detail'
Vue.use(Router)
const router = new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/city', component: City},
    {path: '/detail/:id', component: Detail}
  ]

})
export default router
