<template>
  <div class="main">
    <Nav />
    <div class="search-area tac">
      <form>
        <input class="search" type="search">
        <button class="btn btn-lg" type="submit">
          <span>搜索</span>
        </button>
      </form>
    </div>
    <div class="container search-criteria">
      <div>
        <p>犬种</p>
        <span class="active">热门</span>
        <span :key="item" v-for="item in 10">{{item}}</span>
        <span class="more right">
          更多
        </span>
      </div>
      <div>
        <p>价格</p>
        <span class="active">不限</span>
        <span>2500元以内</span>
        <span>2500-3000元</span>
        <span>3000-5000元</span>
        <span>5000-8000元</span>
        <span>8000元以上</span>
      </div>
      <div>
        <p>品级</p>
        <span class="active">不限</span>
        <span >宠物级</span>
        <span>血统级</span>
        <span>赛级</span>
      </div>
      <div>
        <p>月龄</p>
        <span class="active">不限</span>
        <span >2月龄以内</span>
        <span>2-3月龄</span>
        <span>3-6月龄</span>
        <span>6月龄以上</span>
      </div>
    </div>
    <div class="container row">
      <div class="search-list">
        <div class="col-lg-4 detail-card">
          <div class="star">
            <div>
              <img src="../assets/home/hero_MDx1.jpg">
            </div>
            <div class="detail-item tac">
              <div class="detail-title">
                金毛 公 3个月 宠物级
              </div>
              <div class="price">
                2500
              </div>
              <div class="btn-box">
                <a href="##" class="btn btn-md">
                  <span>查看详情</span>
                  <img src="../assets/icons/right.png">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 detail-card">
          <div class="star">
            <div>
              <img src="../assets/home/hero_MDx1.jpg">
            </div>
            <div class="detail-item tac">
              <div class="detail-title">
                金毛 公 3个月 宠物级
              </div>
              <div class="price">
                2500
              </div>
              <div class="btn-box">
                <a href="##" class="btn btn-md">
                  <span>查看详情</span>
                  <img src="../assets/icons/right.png">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 detail-card">
          <div class="star">
            <div>
              <img src="../assets/home/hero_MDx1.jpg">
            </div>
            <div class="detail-item tac">
              <div class="detail-title">
                金毛 公 3个月 宠物级
              </div>
              <div class="price">
                2500
              </div>
              <div class="btn-box">
                <a href="##" class="btn btn-md">
                  <span>查看详情</span>
                  <img src="../assets/icons/right.png">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 detail-card">
          <div class="star">
            <div>
              <img src="../assets/home/hero_MDx1.jpg">
            </div>
            <div class="detail-item tac">
              <div class="detail-title">
                金毛 公 3个月 宠物级
              </div>
              <div class="price">
                2500
              </div>
              <div class="btn-box">
                <a href="##" class="btn btn-md">
                  <span>查看详情</span>
                  <img src="../assets/icons/right.png">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 detail-card">
          <div class="star">
            <div>
              <img src="../assets/home/hero_MDx1.jpg">
            </div>
            <div class="detail-item tac">
              <div class="detail-title">
                金毛 公 3个月 宠物级
              </div>
              <div class="price">
                2500
              </div>
              <div class="btn-box">
                <a href="##" class="btn btn-md">
                  <span>查看详情</span>
                  <img src="../assets/icons/right.png">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 detail-card">
          <div class="star">
            <div>
              <img src="../assets/home/hero_MDx1.jpg">
            </div>
            <div class="detail-item tac">
              <div class="detail-title">
                金毛 公 3个月 宠物级
              </div>
              <div class="price">
                2500
              </div>
              <div class="btn-box">
                <a href="##" class="btn btn-md">
                  <span>查看详情</span>
                  <img src="../assets/icons/right.png">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 detail-card">
          <div class="star">
            <div>
              <img src="../assets/home/hero_MDx1.jpg">
            </div>
            <div class="detail-item tac">
              <div class="detail-title">
                金毛 公 3个月 宠物级
              </div>
              <div class="price">
                2500
              </div>
              <div class="btn-box">
                <a href="##" class="btn btn-md">
                  <span>查看详情</span>
                  <img src="../assets/icons/right.png">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 detail-card">
          <div class="star">
            <div>
              <img src="../assets/home/hero_MDx1.jpg">
            </div>
            <div class="detail-item tac">
              <div class="detail-title">
                金毛 公 3个月 宠物级
              </div>
              <div class="price">
                2500
              </div>
              <div class="btn-box">
                <a href="##" class="btn btn-md">
                  <span>查看详情</span>
                  <img src="../assets/icons/right.png">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 detail-card">
          <div class="star">
            <div>
              <img src="../assets/home/hero_MDx1.jpg">
            </div>
            <div class="detail-item tac">
              <div class="detail-title">
                金毛 公 3个月 宠物级
              </div>
              <div class="price">
                2500
              </div>
              <div class="btn-box">
                <a href="##" class="btn btn-md">
                  <span>查看详情</span>
                  <img src="../assets/icons/right.png">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/pet-list.css";

import Nav from "../components/Nav";
export default {
  components: { Nav },
  data() {
    return {};
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
</style>


