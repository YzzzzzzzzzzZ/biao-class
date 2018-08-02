<template>
  <div class="content card">
    <h2 class="col-lg-3">宠物狗列表</h2>
    <div class="toor-bar col-lg-9">
      <form @submit="search($event)" class="col-lg-9">
        <input type="search" v-model="keyword" placeholder="输入关键词回车搜索">
        <button type="submit" hidden></button>
      </form>
    </div>
    <div class="table">
      <table>
        <thead>
          <th>用户</th>
          <th>订单号</th>
          <th>总价</th>
          <th>订单详情</th>
          <th>订单备注</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr :key="row.id" v-for="(row, index) in list">
            <td>{{row.$user && row.$user.username || '-'}}</td>
            <td>{{row.oid}}</td>
            <td>{{row.sum}}</td>
            <td>{{row.product || '-'}}</td>
            <td>{{row.memo}}</td>
            <td v-if="row._paid">
              <span>已付款</span>
            </td>
            <td v-else>
              <button @click="update(index)">付款</button>
              <button @click="remove(row.id)">取消订单</button>
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
import "../../css/admin.css";

import AdminPage from "../../mixin/AdminPage";

export default {
  data() {
    return {
      searchable: ["name"],
      model: "order",
    };
  },
  methods: {
    update(i) {
      this.current = this.list[i];
      this.show_form = true;
    }
  },
  mixins: [AdminPage]
};
</script>

<style scoped>
</style>
