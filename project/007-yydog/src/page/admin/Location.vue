<template>
  <div class="content card">
    <h2 class="col-lg-3">用户列表</h2>
    <div class="toor-bar col-lg-9">
      <!-- <div class="col-lg-3">
        <button @click="show_form=!show_form">创建用户</button>
      </div> -->

      <form @submit="searchLocation($event)" class="col-lg-9 search-location">
        <label for="name">
          <div>地址</div>
          <input type="checkbox" v-model="searchable" value="name" id="name">
        </label>
        <label for="type">
          <div>国/省/市</div>
          <input type="checkbox" v-model="searchable" value="type" id="type">
        </label>
        <label for="parent_id">
          <div>parent_id</div>
          <input type="checkbox" v-model="searchable" value="parent_id" id="parent_id">
        </label>
        <label for="id">
          <div>id</div>
          <input type="checkbox" v-model="searchable" value="id" id="id">
        </label>
        <input type="search" v-model="keyword" placeholder="输入关键词回车搜索">
        <button type="submit" hidden></button>
      </form>
    </div>

    <div class="table">
      <table>
        <thead>
          <th>地址</th>
          <th>国/省/市</th>
          <th>parent_id</th>
          <th>id</th>
        </thead>
        <tbody>
          <tr v-for="row in list">
            <td>{{row.name}}</td>
            <td>{{row.type}}</td>
            <td>{{row.parent_id}}</td>
            <td>{{row.id}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <Pagination
      :totalPage="total"
      :currentPage="currentPage"
      maxBtn="5"
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
      this.model = 'location';
    },
    data () {
      return {
        searchable: [],
      };
    },
    methods : {
      searchLocation(e) {
        e.preventDefault()

        let param = {
          where: {
            or:{}
          }
        }

        this.searchable.forEach(prop => {
          param.where.or[prop] = this.keyword;
        });


        api('location/read', param)
          .then(r => {
            this.list = r.data;
          });
      },
    },
    mixins : [AdminPage],
  };
</script>

<style scoped>
.search-location label {
  width:25%;
  display: inline-block;
  text-align: center;
}

.search-location label input{
  margin-top: 12px;
  width: 20%;
}

.search-location label div{
  width: 80%;
  display: inline-block;
}
</style>
