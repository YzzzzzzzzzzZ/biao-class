<template>
  <div class="init">
    <Nav />
    <div class="banner">
      <div class="text-area">
        <div class="main-title">
          <p>购宠无忧，上漾宠！</p>
          <span>坚持繁殖段直售 坚持实地拍摄 坚持全程防疫监控</span>
        </div>
        <router-link to="/search" class="btn btn-lg row">
          <span>购宠</span>
          <img src="../assets/icons/right.png">
        </router-link>
      </div>
      <div class="info">
        <div class="container row">
          <div class="col-lg-3 tac prom">100%纯种
            <span>全站狗狗100%纯正</span>
          </div>
          <div class="col-lg-3 tac prom">30天质保
            <span>30天内有问题随时调换</span>
          </div>
          <div class="col-lg-3 tac prom">养宠顾问
            <span>私人养宠顾问1对1服务</span>
          </div>
          <div class="col-lg-3 tac prom">终身售后
            <span>终身全程免费养宠售后</span>
          </div>
        </div>
      </div>
    </div>
    <div class="race-area">
      <div class="container row">
        <div class="col-lg-12 tac title">
          <p>热门犬种</p>
          <span>HOT PET DOG</span>
        </div>
        <div class="col-lg-4 card">
          <div class="border-r row">
            <div class="col-lg-12">
              <div class="title-race">
                <span>小型犬类</span>
                <span>成年时体重不超过10公斤，身高在40厘米以下</span>
              </div>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="col-lg-12 tac btn-box">
              <a class="btn btn-md"><span>查看更多</span>
                <img src="../assets/icons/right.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 card">
          <div class="border-r row">
            <div class="col-lg-12">
              <div class="title-race">
                <span>中型犬类</span>
                <span>成年时体重在11-30公斤，身高在41-60厘米</span>
              </div>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="col-lg-12 tac btn-box">
              <a class="btn btn-md"><span>查看更多</span>
                <img src="../assets/icons/right.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 card">
          <div class="border-r row">
            <div class="col-lg-12">
              <div class="title-race">
                <span>大型犬类</span>
                <span>成年时体重在30-40公斤，身高在60-70厘米</span>
              </div>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item col-lg-6">
              <img src="../assets/home/hero_MDx1.jpg">
              <p>金毛</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="item-s col-lg-4">
              <p>萨摩</p>
            </div>
            <div class="col-lg-12 tac btn-box">
              <a class="btn btn-md"><span>查看更多</span>
                <img src="../assets/icons/right.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="stars-area">
      <div class="container row">
        <div class="col-lg-12 tac title">
          <p>明星狗狗</p>
          <span>FAVORITE PET DOG</span>
        </div>
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
    <div class="footer">
      <div class="container">
        <p>CopyRight©2018 京-ICP备案号：8974-236514-54981-1125</p>
      </div>
    </div>
  </div>
</template>

<script>
import "../main.css";
import "../css/pet-list.css";

import api from '../lib/api.js';

import Nav from "../components/Nav";
export default {
  mounted() {
    this.read();
  },
  components: { Nav },
  data() {
    return {
      list:[],
    }
  },
  methods: {
    read() {
      api('pet/read', {limit:6}).then(r => {
        this.list = r.data;
      })
    }
  },
};
</script>

<style scoped>
.init {
  background: #f1f1f1;
}

/* Banner */

.banner {
  width: 100%;
  height: 100vh;
  background: url(../assets/home/hero_LG.jpg) no-repeat;
  background-size: cover;
  position: relative;
}

.text-area {
  position: absolute;
  right: 20%;
  top: 50%;
}

.main-title p {
  color: #00c772;
  font-size: 3rem;
  margin: 0;
}

.main-title span {
  color: #666;
  font-size: 1.2rem;
  font-weight: lighter;
  padding: 20px 0;
  display: inline-block;
}

/* 特色 */

.info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 0;
  border-bottom: 2px solid #eee;
  background: #fff;
}

.prom {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 15px 0;
  border-right: 1px dashed #61d286;
}

.prom:first-child {
  border-left: 1px dashed #61d286;
}

.prom span {
  font-size: 0.9rem;
  color: #666;
  width: 100%;
  font-weight: normal;
  display: inline-block;
}

/* 犬种 */

.title {
  margin-top: 20px;
  position: relative;
}

.title::after,
.title::before {
  content: " ";
  position: absolute;
  top: 50%;
  height: 1px;
  width: 140px;
  background: #00c772;
}

.title::before {
  left: 30%;
}

.title::after {
  right: 30%;
}

.title p {
  font-size: 2rem;
  color: #00c772;
  font-weight: bold;
  margin: 0;
  padding: 10px 0;
}

.title span {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
  padding: 8px 0;
}

.detail-card,
.card {
  padding: 10px;
  font-size: 0;
  margin-top: 20px;
}

.border-r {
  overflow: hidden;
  transition: all 0.2s;
  background: #fff;
  padding: 8px 15px;
}

.title-race {
  margin: 8px;
  background: #fefefe;
  padding: 12px;
  text-align: center;
}

.title-race span {
  width: 100%;
}

.title-race span:first-child {
  color: #333;
  font-size: 1.1rem;
  font-weight: bold;
  display: inline-block;
}

.title-race span:nth-child(2) {
  color: #666;
  font-size: 0.9rem;
}

.item-s,
.item {
  padding: 4px;
}

.item p {
  font-weight: bold;
  text-align: center;
  margin: 2px 0;
}

.item img {
  transition: all 0.2s ease;
}

.item-s p {
  color: #666;
  font-size: 0.9rem;
  background: #eee;
  padding: 4px 8px;
  text-align: center;
  width: 100%;
  display: inline-block;
  border-radius: 5px;
  transition: all 0.2s ease;
  margin: 0;
}

.item-s p:hover {
  transition: all 0.2s ease;
  background: #e4e4e4;
}

.item:hover img {
  border-radius: 15px;
  transform: scale(0.9);
  transition: all 0.2s ease;
}

.btn-box {
  margin-top: 8px;
}


</style>


