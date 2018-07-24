import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import Home from './page/Home.vue'
import Detail from './page/Detail.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home
},
{
  path: '/detail',
  component: Detail
}];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')