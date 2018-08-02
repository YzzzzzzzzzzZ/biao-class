<template>
  <div class="main">
    <Nav />
    <div class="success">
      <div class="btn-box tac">
        <h2>支付成功！</h2>
        <router-link class="btn btn-lg" to="/search">
          <span>继续浏览</span>
          <img src="../assets/icons/right.png">
        </router-link>
        <router-link class="btn btn-lg" to="/me/order">
          <span>查看订单</span>
          <img src="../assets/icons/right.png">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  components: { Nav }
};
</script>

<style scoped>
.success {
  height: 100vh;
  /* background: url(../assets/) */
}

.btn-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  box-shadow: 4px 4px 15px #00000042;
}

.btn-box .btn {
  margin: 5px;
}

</style>


