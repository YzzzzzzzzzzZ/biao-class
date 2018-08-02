<template>
  <div class="content card">
    <h2 class="col-lg-3">用户列表</h2>
    <div class="toor-bar col-lg-9">
      <div class="col-lg-3">
        <button @click="show_form=!show_form">添加用户</button>
      </div>

      <form @submit="search($event)" class="col-lg-9">
        <input type="search" v-model="keyword" placeholder="输入关键词回车搜索">
        <button type="submit" hidden></button>
      </form>
    </div>

    <form v-if="show_form" @submit="cou($event)">
      <div class="input-control">
        <label>用户名</label>
        <input type="text" v-model="current.username">
      </div>
      <div class="input-control">
        <label>密码</label>
        <input type="password" v-model="current.password">
      </div>
      <div class="input-control">
        <label>重复密码</label>
        <input type="password">
      </div>
      <div class="input-control">
        <label>手机</label>
        <input type="text" v-model="current.phone">
      </div>
      <div class="input-control">
        <label>邮箱</label>
        <input type="text" v-model="current.mail">
      </div>
      <div class="input-control">
        <label>收货地址</label>
        <input type="text" v-model="current.location">
      </div>
      <div class="input-control">
        <button class="btn-primary" type="submit">提交</button>
        <button class="btn-primary" type="button" @click="show_form=false;current={}">取消</button>
      </div>
    </form>
    <div class="table">
      <table>
        <thead>
          <th>用户名</th>
          <th>手机</th>
          <th>邮箱</th>
          <th>收货地址</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr :key="row.id" v-for="(row, index) in list">
            <td>{{row.username}}</td>
            <td>{{row.phone}}</td>
            <td>{{row.mail}}</td>
            <td>{{row.location}}</td>
            <td>
              <button @click="update(index)">编辑</button>
              <button @click="remove(row.id)">删除</button>
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
  import '../../css/admin.css';

  import AdminPage      from '../../mixin/AdminPage';

  export default {
    data () {
      return {
        searchable: ['name'],
        model:'user'
      };
    },
    methods: {
      update(i) {
        this.current = this.list[i];
        this.show_form = true;
      }
    },
    mixins : [AdminPage],
  };
</script>

<style scoped>
</style>
