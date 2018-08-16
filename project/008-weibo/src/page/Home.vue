<template>
  <div>
    <Nav />
    <mu-container class="container">
      <mu-row gutter>
        <mu-col span="3"><div class="card">a</div></mu-col>
        <mu-col span="6"><div class="card">b</div></mu-col>
        <mu-col span="3"><div class="card">c</div></mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
  components:{Nav}
};
</script>

<style scoped>
.row{
  margin: 10px -10px;
  padding: 10px 0;
  background: rgba(0, 0, 0, .1)
}
.card{
  background: #fff;
}
</style>


