<template>
  <div :style="{width:width}" class="card side-nav">
    <a class="nav-item active">基础信息</a>
    <a class="nav-item">修改密码</a>
    <a class="nav-item">车辆买卖</a>
  </div>
</template>

<script>
 export default {
   props : ['width']
 }
</script>

<style scoped>
.side-nav {
  background: #fff;
}

.nav-item {
  color: #555;
  display: block;
  padding: 10px 20px;
}

.nav-item.active {
  color: #fd521d;
}

.nav-item:hover {
  background: rgba(0, 0, 0, .02);
}
</style>
