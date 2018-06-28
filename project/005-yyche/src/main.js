import 'normalize.css';
import './main.css';
import './css/admin.css';

import Vue  from 'vue'
import VueRouter  from 'vue-router'

import Root from './Root.vue';

import Home from './page/Home.vue';
import Detail from './page/Detail';
import Login from './page/Login';
import Signup from './page/Signup';
import Me from './page/settings/Me';
import User from './page/admin/User';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/', component : Home},
  {path: '/detail', component : Detail},
  {path: '/login', component : Login},
  {path: '/signup', component : Signup},
  {path: '/settings/me', component : Me},
  {path: '/admin/user', component : User},
]

new Vue({
  render: h => h(Root),
  router : new VueRouter({
    routes,
  })
}).$mount('#root')