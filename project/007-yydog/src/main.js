import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import Home from './page/Home.vue'
import Detail from './page/Detail.vue'
import Search from './page/Search.vue'
import NewOrder from './page/NewOrder.vue'
import PayForSuccess from './page/PayForSuccess.vue'

import Base from './page/admin/Base.vue'
import Pet from './page/admin/Pet'
import User from './page/admin/User'
import Breed from './page/admin/Breed'
import Order from './page/admin/Order'

import Me from './page/me/Me.vue'
import MeOrder from './page/me/MeOrder.vue'



Vue.config.productionTip = false;
Vue.use(VueRouter);


Vue.filter('only_day', function (value) {
  if (!value)
    return '-';

  return value.split(' ')[0];
});

Vue.filter('percentage', function (value) {
  if (!value)
    return 0;
  // return parseFloat(value).toFixed(2) * 100 + '%';
  return Math.round(value * 100) + '%';
});

Vue.filter('size', function (value) {
  if (!value)
    return '-';

  return value.split('$')[0];
});

Vue.filter('level', function (value) {
  if (!value)
    return '-';

  if (value == 1) return "宠物级";
  else if (value == 2) return "血统级";
  else return "赛级";
});

Vue.filter('age', function (birthday) {
  if (!birthday) {
    return '-';
  }

  birthday = birthday.split(' ')[0];

  let arr = birthday.split('-');

  let b_y = arr[0];
  let b_m = arr[1];
  let b_d = arr[2];

  let date = new Date;
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();

  let r = '';
  let age_y = y - b_y;
  let age_m = m - b_m;
  let age_d = d - b_d;

  let get_date = new Date(y, m - 1, 0);
  let day = get_date.getDate();

  if (age_y < 0) {
    return '生日不合法！';
  } else if (age_y <= 0 && age_m < 0) {
    return '生日不合法！';
  }

  if (age_y >= 1 && age_m < 0) {
    age_y = age_y - 1;
    age_m = 12 + age_m;
  }

  if (age_y > 0) {
    r = age_y + '岁零';
  }

  if (age_m >= 2) {
    r = r + age_m + '个月';
  } else if (age_m < 2) {
    if (age_m == 1 && age_d > 0) {
      age_d = age_d + day;
    } else if (age_d < 0) {
      age_d = age_d + day;
    }
    r = age_d + '天大';
  }

  return r;
});

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/new_order/:oid',
    component: NewOrder
  },
  {
    path: '/pay_for_success',
    component: PayForSuccess
  },
  {
    path: '/me/',
    component: Me,
    children: [{
      path: 'order',
      component: MeOrder
    }, ]
  },
  {
    path: '/admin/',
    component: Base,
    children: [{
        path: 'pet',
        component: Pet
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'breed',
        component: Breed
      },
      {
        path: 'order',
        component: Order
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')