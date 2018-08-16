<template>
  <div class="main">
    <Nav />
    <div class="search-area tac">
      <form @submit.prevent="set_keyword()">
        <input v-model="search_params.keyword" class="search" type="search">
        <button type="submit" class="btn btn-lg">
          <span>搜索</span>
        </button>
      </form>
    </div>
    <div class="container search-criteria">
      <div>
        <p>犬种</p>
        <SelectBreed @getBreed="set_breed_id"/>
      </div>
      <div>
        <p>价格</p>
        <span :class="{active: (!search_params.price_min && !search_params.price_max)}" @click="set_price_range()">不限</span>
        <span :class="{active: (search_params.price_min == 0 && search_params.price_max == 2500)}" @click="set_price_range(0,2500)">2500元以内</span>
        <span :class="{active: (search_params.price_min == 2500 && search_params.price_max == 3000)}" @click="set_price_range(2500,3000)">2500-3000元</span>
        <span :class="{active: (search_params.price_min == 3000 && search_params.price_max == 5000)}" @click="set_price_range(3000,5000)">3000-5000元</span>
        <span :class="{active: (search_params.price_min == 5000 && search_params.price_max == 8000)}" @click="set_price_range(5000,8000)">5000-8000元</span>
        <span :class="{active: (search_params.price_min == 8000)}" @click="set_price_range(8000)">8000元以上</span>
      </div>
      <div>
        <p>品级</p>
        <span :class="{active: !search_params.level}" @click="set_where('level')">不限</span>
        <span :class="{active: search_params.level == 1}" @click="set_where('level', 1)">宠物级</span>
        <span :class="{active: search_params.level == 2}" @click="set_where('level', 2)">血统级</span>
        <span :class="{active: search_params.level == 3}" @click="set_where('level', 3)">赛级</span>
      </div>
    </div>
    <div class="container row">
      <div class="search-list">
        <div :key="row.id" v-for="row in list"  class="col-lg-4 detail-card">
          <div class="star">
            <div>
              <img src="../assets/home/hero_MDx1.jpg">
            </div>
            <div class="detail-item tac">
              <div class="detail-title">
                {{row.title}}
              </div>
              <div class="price">
                {{row.price}}
              </div>
              <div class="btn-box">
                <router-link :to="`/detail/${row.id}`" class="btn btn-md">
                  <span>查看详情</span>
                  <img src="../assets/icons/right.png">
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <Pagination 
        :totalPage="last_page"
        :currentPage="current_page"
        maxBtn="3"
        :onPageChange="on_page_change"
      />
    </div>
  </div>
</template>

<script>
import "../css/pet-list.css";

import api from "../lib/api.js";

import Nav from "../components/Nav";
import SelectBreed from "../components/SelectBreed";
import Pagination from "../components/Pagination";
export default {
  components: { Nav, SelectBreed, Pagination },
  mounted() {
    this.search();
  },
  data() {
    return {
      last_page: 0,
      current_page: 1,
      list: [],
      search_params: {}
    };
  },
  methods: {
    set_breed_id(row) {
      if(!row) {
        this.set_where('breed_id');
        return;
      }
      this.set_where('breed_id', row.id);
    },
    set_where(type, value) {
      let condition = {};
      if(!value) {
        delete this.search_params[type];
      }
      condition[type] = value;
      
      let o = this.search_params;
      let n = Object.assign({}, o, condition);

      this.$router.replace({ query: n });
    },
    set_keyword() {
      let query = Object.assign({}, this.$route.query);

      query.keyword = this.search_params.keyword;

      this.$router.replace({ query });
    },
    set_price_range(min, max) {
      let query = Object.assign({}, this.$route.query);

      if (!min && !max) {
        delete query.price_min;
        delete query.price_max;
      } else {
        let condition = {
          price_min: min,
          price_max: max
        };
        query = Object.assign({}, query, condition);
      }

      this.$router.replace({ query });
    },
    search(page = 1) {
      this.search_params = Object.assign({}, this.$route.query);
      let p = this.search_params;

      let breed_query = "",
        level_query = "",
        price_min_query = "",
        price_max_query = "";

      p.breed_id && (breed_query = `and "breed_id" = ${p.breed_id}`);
      p.level &&
        (level_query = `and "level" = ${p.level}`);
      p.price_min && (price_min_query = `and "price" >= ${p.price_min}`);
      p.price_max && (price_max_query = `and "price" <= ${p.price_max}`);

      let query = `where("title" contains "${p.keyword ||
        ""}" ${breed_query} ${level_query} ${price_min_query} ${price_max_query})`;

      api("pet/read", {
        query:query,
        limit: 12,
        page: page
      }).then(r => {
        this.last_page = r.last_page;
        this.current_page = r.current_page;
        this.list = r.data;
      });
    },
    on_page_change(page) {
      this.search(page);
    }
  },
  watch: {
    "$route.query": {
      deep: true,
      handler() {
        this.search();
      }
    }
  }
};
</script>

<style scoped>
.main {
  margin-top: 90px;
  background: #f1f1f1;
}

.search-area {
  padding: 200px 0;
  background: url(../assets/home/hero_LG.jpg) no-repeat center 20%;
  background-size: cover;
}

.search {
  border-radius: 5px;
  padding: 8px 4px;
  font-size: 1.2rem;
  margin-right: 10px;
  line-height: 1.5;
  border: 0;
  transition: all 0.2s ease;
  border-bottom: 1px solid #00c772;
  width: 500px;
  background: #ffffff73;
}

.search:focus {
  outline: 0;
  transition: all 0.2s ease;
  background: #ffffffee;
}

.search-criteria {
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin-top: -80px;
}

.search-criteria div {
  padding: 12px 0;
  width: 100%;
  border-bottom: 1px dashed #00c77233;
}

.search-criteria div:last-child {
  border: 0;
}

.search-criteria p {
  margin: 0;
  padding: 4px 12px 4px 0;
  color: #00c772;
  display: inline-block;
}

.search-criteria span {
  padding: 4px 8px;
  cursor: pointer;
  display: inline-block;
}

.more {
  float: right;
}

.more::after {
  content: "+";
  font-weight: bold;
}

.search-criteria span.active {
  background: #00c772;
  color: #fff;
}

.search-list {
  margin: 0 -10px;
  margin-top: 40px;
}

.star {
  font-size: 0;
}

.detail-card {
  padding: 10px;
}

div.hot-breed {
  width: calc(100% - 50px);
  display: inline-block;
  color: #333;
  vertical-align: top;
  padding: 0;
}
</style>


