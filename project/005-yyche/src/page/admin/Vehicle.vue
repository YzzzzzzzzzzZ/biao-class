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
          <input v-validator="'required|max_length:40'"
                  error-el="#title-error"
                  type="text" v-model="current.title">
          <div class="error-list">
            <div id="title-error"></div>
          </div>
        </div>
        <div class="input-control">
          <label>价格</label>
          <input v-validator="'positive'"
                  error-el="#price-error"
                  type="text" v-model="current.price">
          <div class="error-list">
            <div id="price-error"></div>
          </div>
        </div>
        <div class="input-control">
          <label>卖车原因</label>
          <input v-validator="'max_length:140'"
                  error-el="#publish_reason-error" type="text" v-model="current.publish_reason">
          <div class="error-list">
            <div id="publish_reason-error"></div>
          </div>
        </div>
        <div class="input-control">
          <label>当前里程</label>
          <input v-validator="'positive'"
                  error-el="#consumed_distance-error"
                  type="number" v-model="current.consumed_distance">
          <div class="error-list">
            <div id="consumed_distance-error"></div>
          </div>
        </div>
        <div class="input-control">
          <label>过户次数</label>
          <input v-validator="'positive'"
                  error-el="#exchange_times-error"
                  type="number" v-model="current.exchange_times">
          <div class="error-list">
            <div id="exchange_times-error"></div>
          </div>
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
          <input v-validator="'required|positive|max:9'"
                  error-el="#condition-error"
                  type="number" v-model="current.condition">
          <div class="error-list">
            <div id="condition-error"></div>
          </div>
        </div>
        <div class="input-control">
          <label>描述</label>
          <textarea v-validator="'max_length:10000'"
                    v-model="current.description"></textarea>
        </div>
        <div class="input-control">
          <label>发布人</label>
          <Dropdown :list="user_list" displayKey="username"/>
        </div>
        <div class="input-control">
          <label>品牌</label>
          <Dropdown :list="brand_list"/>
        </div>
        <div class="input-control">
          <label>型号</label>
          <Dropdown :list="model_list"/>
        </div>
        <div class="input-control">
          <label>设计</label>
          <Dropdown :list="design_list"/>
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
import "../../css/admin.css";

import api from "../../lib/api";

import AdminPage from "../../mixin/AdminPage";
import Dropdown from "../../components/Dropdown";
import validator from "../../directive/validator";

export default {
  directives: { validator },
  components: { Dropdown },
  mounted() {
    this.list_user();
    this.list_brand();
    this.list_model();
    this.list_design();
  },
  created() {
    this.model = "vehicle";
  },
  data() {
    return {
      searchable: ["title", "description"]
    };
  },
  methods: {
    list_user() {
      api("user/read").then(r => {
        this.user_list = r.data;
      });
    },
    list_model() {
      api("model/read").then(r => {
        this.model_list = r.data;
      });
    },
    list_brand() {
      api("brand/read").then(r => {
        this.brand_list = r.data;
      });
    },
    list_design() {
      api("design/read").then(r => {
        this.design_list = r.data;
      });
    }
  },
  mixins: [AdminPage]
};
</script>

<style scoped>
</style>
