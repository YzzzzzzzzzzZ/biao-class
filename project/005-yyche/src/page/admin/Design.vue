<template>
  <div class="content card">
    <h2 class="col-lg-3">设计列表</h2>
    <div class="toor-bar col-lg-9">
      <div class="col-lg-3">
        <button @click="show_form=!show_form">添加设计</button>
      </div>

      <form @submit="search($event)" class="col-lg-9">
        <input type="search" v-model="keyword" placeholder="输入关键词回车搜索">
        <button type="submit" hidden></button>
      </form>
    </div>

    <form v-if="show_form" @submit="cou($event)">
      <div class="input-control">
        <label>设计</label>
        <input type="text" v-model="current.name">
      </div>
      <div class="input-control">
        <button class="btn-primary" type="submit">提交</button>
      </div>
    </form>
    <div class="table">
      <table>
        <thead>
          <th>设计</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="(row, index) in list">
            <td>{{row.name}}</td>
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
      :totalPage="total"
      :currentPage="currentPage"
      maxBtn="3"
      :onPageChange="page"
      />
    </div>
  </div>
</template>

<script>
  import '../../css/admin.css';

  import AdminPage      from '../../mixin/AdminPage';

  export default {
    created() {
      this.model = 'design';
    },
    data () {
      return {
        searchable: ['name'],
      };
    },
    mixins : [AdminPage],
  };
</script>

<style scoped>
</style>
