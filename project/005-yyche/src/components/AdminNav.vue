<template>
  <div :style="{width: width}" class="card side-nav">
    <router-link to="/admin/user" class="nav-item">用户管理</router-link>
    <router-link to="/admin/vehicle" class="nav-item">车辆管理</router-link>
    <router-link to="/admin/design" class="nav-item">设计管理</router-link>
    <router-link to="/admin/brand" class="nav-item">品牌管理</router-link>
    <router-link to="/admin/model" class="nav-item">型号管理</router-link>
    <router-link to="/admin/location" class="nav-item">地址管理</router-link>
    <a href="#" class="nav-item">质检管理</a>
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
