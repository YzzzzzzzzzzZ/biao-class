<template>
  <div class="nav row">
      <div class="col-lg-5 right">
        <a href="##">item</a>
        <a href="##">item</a>
        <a href="##">item</a>
      </div>
      <div class="col-lg-2 logo-area">
        <a href="##">
          <img src="../assets/logo.png" alt="home">
        </a>
      </div>
      <div class="col-lg-4">
        <a href="##">item</a>
        <a href="##">item</a>
        <a href="##">item</a>
      </div>
      <div class="col-lg-1 right">
        <a href="##">登录/注册</a>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* Nav */

.nav {
  padding: 10px 20px;
  height: 90px;
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 3px 3px #eee;
  z-index: 1000;
}

.nav a {
  color: #333;
  padding: 5px 10px;
}

.nav div {
  vertical-align: middle;
}

.logo-area a {
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 0;
}

.logo-area img {
  width: 50px;
  margin: 0 auto;
  display: inline-block;
}

</style>

