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
import SearchResult from './page/SearchResult';
import Me from './page/settings/Me';
import Base from './page/admin/Base';
import User from './page/admin/User';
import Vehicle from './page/admin/Vehicle';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/', component : Home},
  {path: '/detail/:id', component : Detail},
  {path: '/login', component : Login},
  {path: '/signup', component : Signup},
  {path: '/search/:keyword', component : SearchResult},
  {path: '/settings/me', component : Me},
  {
    path: '/admin/',
    component : Base,
    children: [
      {path: 'user', component: User},
      {path: 'vehicle', component: Vehicle},
    ]
  },
]

new Vue({
  render: h => h(Root),
  router : new VueRouter({
    routes,
  })
}).$mount('#root')
