<template>
  <div class="pagenation">
    <fieldset id="prev" :disabled="prev_disable">
      <button @click="currentPage=1; onPageChange(currentPage)">首页</button>
      <button @click="currentPage--; onPageChange(currentPage)">上一页</button>
    </fieldset>
    <fieldset>
      <button
        v-for="page in totalPage"
        :key="page"
        @click="changePage(page)"
        v-if="showPage(page)"
        :class="{active: currentPage == page}"
      >{{page}}</button>
    </fieldset>
    <fieldset id="next" :disabled="next_disable">
      <button @click="currentPage++;onPageChange(currentPage)">下一页</button>
      <button @click="currentPage=totalPage;onPageChange(currentPage)">尾页</button>
    </fieldset>
  </div>
</template>

<script>
  export default {
    props : {
      maxBtn : {
        default: 5
      },
      totalPage: {
        default : 1
      },
      currentPage : {
        default: 1
      },
      onPageChange: {},
    },
    data () {
      return {
        prev_disable : true,
        next_disable : false,
      };
    },
    methods : {
      changePage (page) {
        this.currentPage = page;
        this.onPageChange(page);
      },
      showPage(page) {
        let show = false;
        let middle = Math.ceil(this.maxBtn/2);

        if (this.currentPage < middle) {
          if (page <= this.maxBtn)
            show = true;

        }else if (this.currentPage >= middle && this.currentPage <= (this.totalPage - middle)) {
          if (Math.abs(this.currentPage - page) < middle)
            show = true

        }else if (this.currentPage > (this.totalPage - middle)){
          if ((this.totalPage - page) < this.maxBtn)
            show = true;
        }
        return show;
      },
    },
    watch : {
      currentPage (p) {
        if (p <= 1){
          this.currentPage = 1;
          this.prev_disable = true;
          this.next_disable = false;
        }else if (p > 1 && p < this.totalPage){
          this.prev_disable = false;
          this.next_disable = false;
        }else if (p >= this.totalPage ) {
          this.currentPage = this.totalPage;
          this.prev_disable = false;
          this.next_disable = true;
        }
      },
    }
  }
</script>

<style scoped>
  fieldset {
    border: 0;
    display: inline-block;
  }

  fieldset:disabled button {
    color:#ddd;
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
