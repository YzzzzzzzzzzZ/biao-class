<template>
  <div class="main">
    <Nav />
    <div class="container">
      <Detail :petId="pid" />
    </div>
    {{pid}}
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Detail from "../components/Detail";

export default {
  components: { Nav, Detail },
  data() {
    return {
      pid: this.$route.params.id,
    }
  },
  watch: {
    '$route' (to, from) {
      this.pid = to.params.id;      
    }
  }

};
</script>

<style scoped>
.main {
  margin-top: 90px;
  background: #f1f1f1;
}
</style>

