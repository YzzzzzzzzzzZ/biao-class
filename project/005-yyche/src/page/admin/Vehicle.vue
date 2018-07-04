<template>
  <div class="content card">
    <h2 class="col-lg-3">车辆列表</h2>
    <div class="toor-bar col-lg-9">
      <div class="col-lg-3">
        <button @click="show_form=!show_form">创建二手车</button>
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
        <label>价格(万)</label>
        <input type="float" v-model="current.price">
      </div>
      <div class="input-control">
        <label>卖车原因</label>
        <input type="text" v-model="current.publish_reason">
      </div>
      <div class="input-control">
        <label>当前里程</label>
        <input type="number" v-model="current.consumed_distance">
      </div>
      <div class="input-control">
        <label>过户次数</label>
        <input type="number" v-model="current.exchange_times">
      </div>
      <div class="input-control">
        <label>第一次上牌时间</label>
        <input type="datetime-local" v-model="current.birthday">
      </div>
      <div class="input-control">
        <label>预期出售时间</label>
        <input type="datetime-local" v-model="current.deadline">
      </div>
      <div class="input-control">
        <label>车况</label>
        <input type="number" v-model="current.condition">
      </div>
      <div class="input-control">
        <label>描述</label>
        <textarea v-model="current.description"></textarea>
      </div>
      <div class="input-control">
        <label class="dib">促销
          <input type="checkbox" v-model="current.on_sale">
        </label>
        <label class="dib">本地车牌
          <input type="checkbox" v-model="current.local">
        </label>
      </div>
      <div class="input-control">
        <button class="btn-primary" type="submit">提交</button>
      </div>
    </form>
    <div class="table">
      <table>
        <thead>
          <th>标题</th>
          <th>价格(万)</th>
          <th>里程</th>
          <th>预期出售时间</th>
          <th>车况</th>
          <th>过户次数</th>
          <th>特价</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="(row, index) in list">
            <td>{{row.title}}</td>
            <td>{{row.price}}</td>
            <td>{{row.consumed_distance || '-'}}</td>
            <td>{{row.deadline || '-'}}</td>
            <td>{{row.condition ? row.condition + '成新' : '-'}}</td>
            <td>{{row.exchange_times || '-'}}</td>
            <td>{{row.on_sale || '-'}}</td>
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
      this.model = 'vehicle';
    },
    data () {
      return {
        searchable: ['title', 'description'],
      };
    },
    mixins : [AdminPage],
  };
</script>

<style scoped>
</style>
