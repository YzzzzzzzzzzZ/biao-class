<template>
  <div class="main">
    <Nav></Nav>
    <div class="slider">
      <img src="../assets/home/slider1.webp">
    </div>
    <div class="query-area">
      <div class="container">
        <div class="row col-lg-8">
          <div class="col-lg-3">
            <span class="huge-text">买</span>
          </div>
          <div class="col-lg-9">
            <div>
              <router-link :to="'/search?brand_id=' + row.id" v-for="row in list.brand" class="tag" :key="row.id">{{row
                .name}}
              </router-link>
            </div>
            <div>
              <span class="tag">3万以下</span>
              <span class="tag">3-5万</span>
              <span class="tag">5-10万</span>
              <span class="tag">10-15万</span>
              <span class="tag">15-20万</span>
              <span class="tag">20-30万</span>
              <span class="tag">30-60万</span>
            </div>
            <div>
              <router-link :to="'/search?design_id=' + row.id" v-for="row in list.design" class="tag" :key="row.id">{{row
                .name}}
              </router-link>
            </div>
          </div>
        </div>
        <div class="row col-lg-4">
          <div class="col-lg-3">
            <span class="huge-text">卖</span>
          </div>
          <div class="col-lg-9 right">
            <a class="btn btn-primary btn-fat buy-huge">我要买车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="guarantee">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="card">
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png">
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png">
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png">
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vehicle-nav">
      <div class="container">
        <div @click="read_main('on_sale')" class="item">特价好车</div>
          <div @click="read_main('under_5')" class="item">5万以下</div>
          <div @click="read_main('between_5_10')" class="item">5-10万</div>
          <div @click="read_main('suv')" class="item">超值SUV</div>
          <div @click="read_main('urgent')" class="item">急售降价车</div>
          <router-link to="/search" class="item">更多</router-link>
      </div>
    </div>
    <div class="vehicle-list">
      <div class="container">
        <div class="row">
          <div v-for="row in main_list" :key="row.id" class="col-lg-3">
            <div class="card">
              <div class="thumbnail">
                <img :src="get_main_cover_url(row)">
              </div>
              <div class="detail">
                <div class="title">{{row.title}}</div>
                <div class="desc">2015年02月 / 3.07万公里</div>
                <div class="others">
                  <span class="price">{{row.price}}</span>
                  <span>首付3.5万</span>
                  <router-link :to="'/detail/' + row.id" class="btn btn-primary buy">购买</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <Location :onSelect="set_location_id" />
  </div> -->
</template>

<script>
import "../css/vehicle-list.css";
import Nav from "../components/Nav.vue";
import VehicleList from "../mixin/VehicleList";
import Reader from "../mixin/Reader";
import api from "../lib/api";

export default {
  mixins: [VehicleList, Reader],
  components: { Nav },
  mounted() {
//    this.read_main("on_sale");
    this.read_main("");
    this.find_design("suv");
    this.read("brand");
    this.read("design");
  },
  data() {
    return {
      list: {},
      design: {},
      main_list: []
    };
  },
  methods: {
    find_design(name) {
      api("design/search", { or: { name: name } }).then(r => {
        this.design[name] = r.data[0];
      });
    },

    read_main(type) {
      let condition = {};

      switch (type) {
        case "on_sale":
          condition = {
            where: {
              and: {
                on_sale: true
              }
            }
          };
          break;
        case "under_5":
          condition = {
            where: {
              and: [["price", "<", 5]]
            }
          };
          break;
        case "between_5_10":
          condition = {
            where: {
              and: [["price", ">", 5], ["price", "<", 10]]
            }
          };
          break;
        case "suv":
          condition = {
            where: {
              and: {
                design_id: this.design.suv.id
              }
            }
          };
          break;
        case "urgent":
          let date = new Date();
          date.setDate(date.getDate() + 3);
          date = date.toISOString().split("T")[0];
          condition = { query: `where("deadline" <= "${date}")` };
          break;
      }

      api("vehicle/read", condition).then(r => {
        this["main_list"] = r.data;
      });
    }
  }
};
</script>

<style scoped>
.main {
  background: #f0f0f0;
}
.query-area {
  padding: 15px;
  background: #fff;
}

.tag {
  display: inline-block;
  font-size: 0.7rem;
  padding: 5px;
  cursor: pointer;
  color: #333;
}

.huge-text {
  position: relative;
  top: 5px;
  left: 40px;
  color: #fd521d;
}

.buy-huge {
  position: relative;
  top: 25px;
}

.vehicle-list .row {
  margin: 0 -10px;
}

.guarantee .row {
  margin: 0 -20px;
}

.guarantee .col-lg-3 {
  padding: 20px;
}

.guarantee .col-lg-3:hover > div {
  -webkit-box-shadow: 0 15px 30px #ddd;
  box-shadow: 0 15px 30px #ddd;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}

.guarantee .col-lg-3 > div {
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}

.guarantee .card {
  padding: 15px;
  background: #fff;
}

.guarantee .title {
  margin-bottom: 10px;
}

.guarantee .desc {
  font-size: 0.7rem;
  color: #999;
}

.vehicle-nav .item {
  display: inline-block;
  width: 16.66666666666%;
  text-align: center;
  background: #fff;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left-width: 0;
}

.vehicle-nav .item:first-child {
  border-left-width: 1px;
}

.vehicle-nav,
.vehicle-list {
  background: #fff;
}

.vehicle-list .col-lg-3 {
  padding: 10px;
}

.vehicle-list .card {
  background: #fff;
  border: 1px solid #fff;
}

.vehicle-list .card:hover {
  border: 1px solid #fd521d;
}

.vehicle-list .card:hover .buy {
  background: #fd521d;
  color: #fff;
}

.vehicle-list .card .detail {
  padding: 10px;
}

.vehicle-list .detail > * {
  margin-bottom: 5px;
}

.vehicle-list .card .title {
  font-size: 0.8rem;
}

.vehicle-list .card .desc,
.vehicle-list .card .others {
  font-size: 0.6rem;
  color: #888;
}

.vehicle-list .card .price {
  color: #fd521d;
  font-size: 1.3rem;
}

.vehicle-list .card {
  position: relative;
}

.vehicle-list .card .buy {
  position: absolute;
  right: 3px;
  bottom: 3px;
  font-size: 0.8rem;
  padding-left: 25px;
  padding-right: 25px;
  background: transparent;
  color: #fd521d;
  border-color: #fd521d;
}
</style>
