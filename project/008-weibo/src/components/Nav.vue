<template>
  <mu-appbar style="width: 100%;" z-depth="1" color="indigo500">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    <router-link to="/" slot="default">
      <img alt="LOGO">
    </router-link>
    <mu-button flat slot="right" to="/login">
      Login
    </mu-button>
    <mu-button flat slot="right" to="/signup">
      SIGNUP
    </mu-button>
  </mu-appbar>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-nav {
  color: inherit;
  height: 100%;
}
</style>

