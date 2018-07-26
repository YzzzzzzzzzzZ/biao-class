<template>
  <div class="main">
    <Nav />
    <div class="container">
      <Detail petId="1" />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Detail from "../components/Detail";

export default {
  components: { Nav, Detail }
};
</script>

<style scoped>
.main {
  margin-top: 90px;
  background: #f1f1f1;
}
</style>

