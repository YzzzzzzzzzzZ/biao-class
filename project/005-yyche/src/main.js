import 'normalize.css';
import './main.css';
import './css/admin.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Vue  from 'vue';
import VueRouter  from 'vue-router';

import Root from './Root.vue';

import Home from './page/Home.vue';
import Detail from './page/Detail';
import Login from './page/Login';
import Signup from './page/Signup';
import Search from './page/Search';

import Me from './page/settings/Me';

import Base from './page/admin/Base';
import User from './page/admin/User';
import Design from './page/admin/Design';
import Location from './page/admin/Location';
import Vehicle from './page/admin/Vehicle';
import Brand from './page/admin/Brand';
import Model from './page/admin/Model';
import Report from './page/admin/Report';
import Appo from './page/admin/Appo';

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.filter('only_day', function (value) {
  if (!value)
    return '-';

  return value.split(' ')[ 0 ];
});

Vue.filter('percentage', function (value) {
  if (!value)
    return 0;
  // return parseFloat(value).toFixed(2) * 100 + '%';
  return Math.round(value*100) + '%';
});


const routes = [
  {path: '/', component : Home},
  {path: '/detail/:id', component : Detail},
  {path: '/login', component : Login},
  {path: '/signup', component : Signup},
  {path: '/search', component : Search},
  {path: '/settings/me', component : Me},
  {
    path: '/admin/',
    component : Base,
    children: [
      {path: 'user', component: User},
      {path: 'vehicle', component: Vehicle},
      {path: 'design', component: Design},
      {path: 'location', component: Location},
      {path: 'model', component: Model},
      {path: 'brand', component: Brand},
      {path: 'report', component: Report},
      {path: 'appo', component: Appo},
    ]
  },
]

new Vue({
  render: h => h(Root),
  router : new VueRouter({
    routes,
  })
}).$mount('#root')
