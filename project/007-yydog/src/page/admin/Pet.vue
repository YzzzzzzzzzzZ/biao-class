<template>
  <div class="content card">
    <h2 class="col-lg-3">宠物狗列表</h2>
    <div class="toor-bar col-lg-9">
      <div class="col-lg-3">
        <button @click="show_form=!show_form">添加宠物狗</button>
      </div>

      <form @submit="search($event)" class="col-lg-9">
        <input type="search" v-model="keyword" placeholder="输入关键词回车搜索">
        <button type="submit" hidden></button>
      </form>
    </div>

    <form v-if="show_form" @submit="cou($event)">
      <div class="input-control">
        <label>标题</label>
        <input type="text" v-model="current.title">
      </div>
      <div class="input-control">
        <label>价格</label>
        <input type="number" v-model="current.price">
      </div>
      <div class="input-control">
        <label>生日</label>
        <input type="date" v-model="current.birthday">
      </div>
      <div class="input-control">
        <label>性别：</label>
        <input type="radio" v-model="current.sex" name="sex" value="male" id="male">
        <label for="male">公</label>&nbsp;&nbsp;
        <input type="radio" name="sex" id="female" value="famela" v-model="current.sex">
        <label for="female">母</label>
      </div>
      <div class="input-control">
        <label>犬种</label>
        <input>
      </div>
      <div class="input-control">
        <label>封面地址</label>
        <input type="text" v-model="current.cover_url">
      </div>
      <div class="input-control">
        <label>品级</label>
        <input type="number" v-model="current.level">
      </div>
      <div class="input-control">
        <button class="btn-primary" type="submit">提交</button>
        <button class="btn-primary" type="button" @click="show_form=false;current={}">取消</button>
      </div>
    </form>
    <div class="table">
      <table>
        <thead>
          <th>标题</th>
          <th>犬种</th>
          <th>品级</th>
          <th>售价</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr :key="row.id" v-for="(row, index) in list">
            <td>{{row.title}}</td>
            <td>{{row.breed_id}}</td>
            <td>{{row.level}}</td>
            <td>{{row.price}}</td>
            <td>{{row.birthday | age}}</td>
            <td>{{row.sex == 'male' ? '公' : '母'}}</td>
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
        model:'pet'
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
