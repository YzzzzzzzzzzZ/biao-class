<template>
 <div class="main-nav">
   <div class="row container">
     <div class="col left">
       <a href="#" class="logo"></a>
       <div class="nav-item">西安</div>
       <div class="nav-item">买车</div>
       <div class="nav-item">买车</div>
       <div class="nav-item">服务保障</div>
     </div>
     <div class="col right">
       <div class="nav-item">登录</div>
       <div class="nav-item">注册</div>
       <div class="nav-item tel">400-678-6666</div>
     </div>
   </div>
 </div>
</template>

<script>
export default {}
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
