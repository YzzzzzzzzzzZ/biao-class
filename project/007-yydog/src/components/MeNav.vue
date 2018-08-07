<template>
  <div :style="{width: width}" class="card side-nav">
    <router-link to="/me/order" class="nav-item">我的订单</router-link>
    <router-link to="/me/setting" class="nav-item">我的设置</router-link>
  </div>
</template>

<script>
  import '../css/sidenav.css';
  export default {
    props : {
      width : {},
    },
    data () {
      return {
        path : '',
      };
    },
    mounted () {
      this.path = this.$route.path;
    }
  };
</script>

<style scoped></style>
