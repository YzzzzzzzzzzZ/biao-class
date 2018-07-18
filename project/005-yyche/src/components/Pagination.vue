<template>
  <div class="pagenation">
    <fieldset id="prev" :disabled="prev_disable">
      <button @click="changePage(1)">首页</button>
      <button @click="changePage(--current_page)">上一页</button>
    </fieldset>
    <fieldset>
      <button
        v-for="page in totalPage"
        :key="page"
        @click="current_page == page ? false : changePage(page)"
        v-if="showPage(page)"
        :class="{active: current_page == page}"
      >{{page}}</button>
    </fieldset>
    <fieldset id="next" :disabled="next_disable">
      <button @click="changePage(++current_page)">下一页</button>
      <button @click="changePage(totalPage)">尾页</button>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    maxBtn: {
      default: 5
    },
    totalPage: {
      default: 1
    },
    currentPage: {
      default: 1
    },
    onPageChange: {}
  },
  data() {
    return {
      current_page: 1,
      prev_disable: true,
      next_disable: false
    };
  },
  methods: {
    changePage(page) {
      this.onPageChange(page);
      // console.log(this.onPageChange);
      
    },
    showPage(page) {
      let show = false;
      let middle = Math.ceil(this.maxBtn / 2);

      if (this.current_page < middle) {
        if (page <= this.maxBtn) show = true;
      } else if (
        this.current_page >= middle &&
        this.current_page <= this.totalPage - middle
      ) {
        if (Math.abs(this.current_page - page) < middle) show = true;
      } else if (this.current_page > this.totalPage - middle) {
        if (this.totalPage - page < this.maxBtn) show = true;
      }
      return show;
    }
  },
  watch: {
    currentPage(p) {
      this.current_page = p;
      if (p <= 1) {
        this.current_page = 1;
        this.prev_disable = true;
        this.next_disable = false;
      } else if (p > 1 && p < this.totalPage) {
        this.prev_disable = false;
        this.next_disable = false;
      } else if (p >= this.totalPage) {
        this.current_page = this.totalPage;
        this.prev_disable = false;
        this.next_disable = true;
      }
    }
  }
};
</script>

<style scoped>
fieldset {
  border: 0;
  display: inline-block;
}

fieldset:disabled button {
  color: #ddd;
}

button {
  background: #f0f0f0;
  color: #333;
}

button.active {
  background: #000;
  color: #fff;
}
</style>
