<template>
  <form @submit="search($event);submit($event)" class="search-bar">
    <input placeholder="输入关键词搜索"
           type="search"
           @keyup="change()"
           @blur="show_search=false"
           v-model="kwd"
           :class="{active: show_search}"
           >
    <button v-if="show_search" class="submit" type="submit">
      <img src="../assets/icons/search.png">
    </button>
    <button v-else class="button" type="button" @click="show_search = !show_search">
      <img src="../assets/icons/search1.png">
    </button>
  </form>
</template>

<script>
export default {
  props: ["onChange", "onSubmit", "keyword"],

  data() {
    return {
      kwd: "",
      show_search: false
    };
  },

  methods: {
    change() {
      if (this.onChange) this.onChange(this.kwd);
    },
    submit(e) {
      e.preventDefault();

      if (this.onSubmit) this.onSubmit(this.kwd);
    },
    search(e) {
      e.preventDefault();
      this.$router.push({
        path: "/search",
        query: { keyword: this.kwd }
      });
    }
  },
  watch: {
    keyword(n) {
      this.kwd = n;
    }
  }
};
</script>

<style scoped>
.search-bar {
  width: 100%;
  display: inline-block;
  /*margin-top: 10px;*/
  /*margin-bottom: 10px;*/
}

.search-bar input {
  width: 0px;
  padding: 8px 0px;
  transition: all 0.5s ease;
  border-bottom: 1px solid #00c772;
  display: inline-block;
}

.search-bar input.active {
  width: 350px;
  padding: 8px 14px;
}

.search-bar input,
.search-bar .submit {
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid #00c772;
  vertical-align: middle;
}

.search-bar .button,
.search-bar .submit {
  width: 50px;
  border-left: 0;
  border: 0;
  background: #00c77100;
  color: #00c772;
  border-radius: 50%;
  font-size: 0;
}

.search-bar .button{
  padding: 10px;
  background: #00d87a;
}

input:focus,
button:focus {
  outline: 0;
}
</style>
