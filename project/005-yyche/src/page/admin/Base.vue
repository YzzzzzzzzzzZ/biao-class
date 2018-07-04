<template>
  <div class="main">
    <Nav :push-down="true"/>
    <div>
      <div class="container row">
        <div class="col-lg-3">
          <AdminNav/>
        </div>
        <div class="col-lg-9">
          <router-view></router-view>
        </div>
      </div>
      <AdminFooter />
    </div>
  </div>
</template>

<script>
  import '../../css/admin.css';

  import AdminNav from '../../components/AdminNav.vue';
  import Nav from '../../components/Nav.vue';
  import AdminFooter from '../../components/AdminFooter.vue';

  export default {
    components: {
      AdminNav,
      AdminFooter,
      Nav,
    },
  };
</script>

<style scoped>
.container {
  max-width: 95% !important;
}
.main {
  background: #f0f0f0;
}
</style>
