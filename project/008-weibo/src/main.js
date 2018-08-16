
import Vue from 'vue'
import VueRouter from 'vue-router'

import Muse from 'muse-ui'
import 'muse-ui/dist/muse-ui.css';
import 'material-design-icons/iconfont/material-icons.css';

import './main.css'

import App from './App.vue'

import Home from './page/Home'
import Login from './page/Login'
import Signup from './page/Signup'

Vue.use(VueRouter);
Vue.use(Muse);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Home
  }, 
  {path: '/login', component: Login},
  {path: '/signup', component: Signup},
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')