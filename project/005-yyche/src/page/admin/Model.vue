<template>
  <div class="content card">
    <h2 class="col-lg-3">型号列表</h2>
    <div class="toor-bar col-lg-9">
      <div class="col-lg-3">
        <button @click="show_form=!show_form">添加型号</button>
      </div>

      <form @submit="search($event)" class="col-lg-9">
        <input type="search" v-model="keyword" placeholder="输入关键词回车搜索">
        <button type="submit" hidden></button>
      </form>
    </div>

    <form v-if="show_form" @submit="cou($event)">
      <div class="input-control">
        <label>型号</label>
        <input type="text" v-model="current.name">
      </div>
      <div class="input-control">
        <label>品牌</label>
        <Dropdown :list="brand_list" :onSelect="set_brand_id"/>
      </div>
      <div class="input-control">
        <label>设计</label>
        <Dropdown :list="design_list" :onSelect="set_design_id"/>
      </div>
      <div class="input-control">
        <button class="btn-primary" type="submit">提交</button>
      </div>
    </form>
    <div class="table">
      <table>
        <thead>
          <th>型号</th>
          <th>品牌</th>
          <th>设计</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="(row, index) in list">
            <td>{{row.name}}</td>
            <td>{{row.$brand.name}}</td>
            <td>{{row.$design.name}}</td>
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
  import api from '../../lib/api';


  export default {
    created() {
      this.model = 'model';
    },
    mounted() {
      this.read_brand()
      this.read_design()
    },
    methods : {
      read_brand() {
        api('brand/read')
          .then(r => {
            this.brand_list = r.data;
          });
      },
      read_design() {
        api('design/read')
          .then(r => {
            this.design_list = r.data;
          });
      },
      set_brand_id (row) {
        this.$set(this.current, 'brand_id', row.id);
      },
      set_design_id (row) {
        this.$set(this.current, 'design_id', row.id);
      },
    },
    data () {
      return {
        searchable: ['name'],
        brand_list: [],
        design_list: [],
        with       : [
          { model : 'brand', type : 'has_one' },
          { model : 'design', type : 'has_one' },
        ],
      };
    },
    mixins : [AdminPage],
  };
</script>

<style scoped>
</style>
