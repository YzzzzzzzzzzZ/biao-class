let Home = Vue.component('home', {
  template : `<div><h1>Home</h1></div>`,
  data : function () {
    return {};
  },
  mounted : {

  }
});

let About = Vue.component('about', {
  template : `<div><h1>Whh</h1> <button @click="alert()">Yo~</button></div>`,
  methods : {
    alert : function () {
      alert('Yo.');
    }
  },
  data : function () {
    return {
      count : 0
    };
  }
});

new Vue({
  el : '#root',
  data : {},
  methods : {},
  router : new VueRouter({
    routes : [
      {path : '/home', component : Home},
      {path : '/about', component : About},
    ]
  })
});
