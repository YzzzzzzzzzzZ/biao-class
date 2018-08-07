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
          <th>种类名</th>
          <th>体型</th>
          <th>性格</th>
          <th>类型</th>
        </thead>
        <tbody>
          <tr :key="row.id" v-for="(row) in list">
            <td>{{row.name}}</td>
            <td>{{row.type_size}}</td>
            <td>{{row.type_feat || '-'}}</td>
            <td>{{row.type_func}}</td>
            <td>
              <button v-if="!row.hot" @click="hot(row)">设置为热门</button>
              <div v-else>
                <span>已设置为热门</span><br>
                <button @click="remove_hot(row)">取消热门</button>
              </div>
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
        searchable: ['name', 'type_size'],
        model:'breed',
      };
    },
    methods: {
      hot(row) {
        this.current = row;
        this.current.hot = true;
        this.cou();
      },
      remove_hot(row) {
        this.current = row;
        this.current.hot = false;
        this.cou();
      }
    },
    mixins : [AdminPage],
  };
</script>

<style scoped>
</style>
