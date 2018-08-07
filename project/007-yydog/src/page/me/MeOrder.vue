<template>
  <div class="content card">
    <h2 class="col-lg-3">我的订单</h2>
    <div class="toor-bar col-lg-9">
      <form @submit="search($event)" class="col-lg-9">
        <input type="search" v-model="keyword" placeholder="输入关键词回车搜索">
        <button type="submit" hidden></button>
      </form>
    </div>
    <div class="table">
      <table>
        <thead>
          <th>订单号</th>
          <th>总价</th>
          <th>订单详情</th>
          <th>订单备注</th>
          <th class="tac">操作</th>
        </thead>
        <tbody>
          <tr :key="row.id" v-for="row in list">
            <td>{{row.oid}}</td>
            <td>{{row.sum}}</td>
            <td>{{row.product || '-'}}</td>
            <td>{{row.memo}}</td>
            <td v-if="row._paid" class="tac">
              <span style="color:red">已付款</span><br>
              <span>实付：{{row._fee}}￥</span>
            </td>
            <td v-else class="tac">
              <div class="btn-box">
                <router-link class="btn btn-sm" :to="`/new_order/${row.oid}`">
                  <span>付款</span>
                </router-link>
                <button class="btn btn-sm" @click="remove(row.id)">
                  <span>取消订单</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <Pagination
      :totalPage="last_page"
      :currentPage="currentPage"
      maxBtn="3"
      :onPageChange="on_page_change"
      />
    </div>
  </div>
</template>

<script>
import Pagination from "../../components/Pagination.vue";
import api from "../../lib/api";
import session from "../../lib/session";
import "../../css/admin.css";

export default {
  components: { Pagination },
  mounted() {
    this.read();
  },
  data() {
    return {
      // 重要的模型状态和配置
      model: null, // 当前模型，不同管理页对应着不同模型，如：'user', 'vehicle'

      // 搜索相关
      keyword: "", // 搜索关键词
      searchable: [], // 可搜索的所有属性

      // 数据相关
      current: {}, // 正在编辑的数据
      list: [], // 表格中当前页数据

      // 翻页相关
      currentPage: 1, // 当前页码
      last_page: 0 // 最后一页，一开始不知道所以是零
    };
  },
  methods: {
    /**
     * 翻页时应该做什么
     * @param {number} 页码
     * */
    on_page_change(page) {
      this.read(page);
    },

    /**
     * 创建或更新
     * create or update
     *
     * 具体常见还是更新取决于是否有id
     */
    // cou(e) {
    //   e.preventDefault();

    //   let action = this.current.id ? "update" : "create";

    //   api(`order/${action}`, this.current).then(r => {
    //     this.current = {};
    //     this.read();
    //   });
    // },

    /**
     * 获取某一页的数据并将其覆盖至this.list
     * @param {number} 页码
     * */
    read(page = 1) {
      if (page == this.current_page && page != 1) return;

      api(`order/read`, {
        where: { user_id: session.uinfo() && session.uinfo().id },
        page: page
      }).then(r => {
        this.total = r.total;
        this.list = r.data;
        this.last_page = r.last_page;
        this.currentPage = r.current_page;
      });
    },

    /**
     * 通过id删一条
     * @param {number} id
     * */
    remove(id) {
      if (!confirm("确定删除？")) return;

      api(`order/delete`, { id }).then(() => {
        this.read();
      });
    },

    /**
     * 设置当前数据行
     * 通常用于当用户点击编辑按钮时填充表单数据
     * @param row
     */
    set_current(row) {
      this.current = row;
      this.show_form = true;
      if (this.after_set_current) {
        this.after_set_current();
      }
    },

    /**
     * 搜索
     * @param {Event} e
     */
    search(e) {
      e.preventDefault();

      let param = {
        or: {}
      };

      this.searchable.forEach(prop => {
        param.or[prop] = this.keyword;
      });

      api(`order/search`, param).then(r => {
        this.list = r.data;
      });
    }

    // is_update() {
    //   return !!this.current.id;
    // }
  }
};
</script>

<style scoped>
.btn-box .btn {
  vertical-align: top;
  margin-left: 4px;
}
</style>
