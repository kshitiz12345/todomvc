import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Data from './components/Data.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path : '/data/:id',
    component: Data,
    name: "Data"
  },
  {
    path : '/',
    component: Home,
    name: "DataList"
  }
]



const router = new VueRouter({
  routes : routes,
  mode: 'history'
})

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#vue-app')
