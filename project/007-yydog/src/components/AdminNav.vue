<template>
  <div :style="{width: width}" class="card side-nav">
    <router-link to="/admin/user" class="nav-item">用户管理</router-link>
    <router-link to="/admin/pet" class="nav-item">宠物管理</router-link>
    <router-link to="/admin/breed" class="nav-item">狗狗种类</router-link>
    <router-link to="/admin/order" class="nav-item">订单管理</router-link>
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
