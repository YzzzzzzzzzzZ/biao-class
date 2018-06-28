<template>
 <div class="main-nav" :style="{
  marginBottom: this.pushDown ? '10px': 0,
 }">
   <div class="row container">
     <div class="col left">
       <router-link to="/" href="#" class="logo"></router-link>
       <div class="nav-item">西安</div>
       <div class="nav-item">买车</div>
       <div class="nav-item">买车</div>
       <div class="nav-item">服务保障</div>
     </div>
     <div class="col right">
       <router-link to="/Login" class="nav-item">登录</router-link>
       <router-link to="/Signup" class="nav-item">注册</router-link>
       <div class="nav-item tel">400-678-6666</div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  props : {
    pushDown : {
      default : false,
    }
  }

}
</script>

<style scoped>
.main-nav {
  background: #fff;
  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
  -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
  box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
}

.logo {
  display: inline-block;
  width: 130px;
  height: 62px;
  background: #fd521d;
  vertical-align: top;
}

.left {
  left: 130px;
  width: 60%;
}

.right {
  width: 40%;
}

.nav-item {
  display: inline-block;
  padding: 20px;
}

.nav-item {
  color: #555;
  text-decoration: none;
}

.tel {
  font-weight: bold;
  color: #fd521d;
}
</style>
