<template>
  <div class="main">
    <Nav/>
    <div class="row con">
      <div class="col-lg-3">
        <MeNav />
      </div>
      <div class="col-lg-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import MeNav from "../../components/MeNav";
export default {
  components: { Nav, MeNav }
};
</script>

<style scoped>
.main{
  background: #f1f1f1;
  margin-top: 90px;
  padding: 20px 40px 0;
}
.con > div{
  padding: 10px;
}
</style>


