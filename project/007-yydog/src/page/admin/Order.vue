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
          <th>订单备注</th>
          <th>查看详情</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr :key="row.id" v-for="row in list">
            <td>{{row.$user && row.$user.username || '-'}}</td>
            <td>{{row.oid}}</td>
            <td>{{row.sum}}元</td>
            <td>{{row.memo || '-'}}</td>
            <td>
              <div @click="info=row.product_info;show=true" class="btn btn-sm">
                <span>查看详情</span>
              </div>
            </td>
            <td v-if="row._paid">
              <span>实付：{{row._fee}}</span><br>
              <span>已付款</span>
            </td>
            <td v-else>
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
    <transition name="product-info">
      <div v-if="show" class="mask" @click="show=false">
        <p>订单详情：</p>
        <table class="col-lg-8">
          <tr v-for="it in info" :key="it.id">
            <td>
              <img :src="it.cover_url">
            </td>
            <td>
              <router-link :to="`/detail/${it.id}`">{{it.title}}</router-link>
            </td>
            <td>
              {{it.price}}元
            </td>
          </tr>
        </table>
      </div>
    </transition>
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
      with: {
        model: "user",
        relation: "has_one"
      },
      show: false,
      info: []
    };
  },
  methods: {},
  mixins: [AdminPage]
};
</script>

<style scoped>
.btn-box .btn {
  vertical-align: top;
  margin-left: 4px;
}
</style>
