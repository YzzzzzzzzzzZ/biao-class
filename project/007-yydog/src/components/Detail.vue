<template>
  <div class="main-area">
      <div class="container row">
        <div class="col-lg-6 cover-area">
          <div class="cover">
            <img src="../assets/detail/big_1.jpg">
          </div>
          <div class="slide-bar">
            <div class="sm-cover">
              <img src="../assets/detail/big_1.jpg"/>
              <img src="../assets/detail/big_2.jpg"/>
              <img src="../assets/detail/big_3.jpg"/>
              <img src="../assets/detail/big_4.jpg"/>
            </div>
          </div>
        </div>
        <div class="col-lg-6 text-area">
          <div class="title">
            2个月的博美 母 宠物级
          </div>
          <div class="info">
            <div>品种：<span>博美</span></div>
            <div>品级：<span>宠物级</span></div>
            <div>生日：<span>2018-05-01</span></div>
            <div>年龄：<span>2个月</span></div>
          </div>
          <div class="price">
            <span>价格：</span>
            <span>2500</span>
          </div>
          <div class="prom">
            <p>漾宠保障及我们的承诺</p>
            <span><i></i><br>健康保障</span>
            <span><i></i><br>纯种承诺</span>
            <span><i></i><br>包治承诺</span>
            <span><i></i><br>靓宠实拍</span>
          </div>
          <div class="btn-box right">
            <div @click="create_order()" class="btn btn-lg buy">
              <span>购买</span>
            </div>
            <div class="btn btn-lg">
              <span>加入购物车</span>
              <img src="../assets/icons/right.png" alt="">
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import api from '../lib/api.js';
import session from '../lib/session.js';

export default {
  props: {
    petId: {
      default: 1
    }
  },
  data() {
    return {
      current: {},
    }
  },
  methods: {
    create_order() {
      let list = {};

      list.sum = this.current.price || 10;
      list.oid = this.set_oid(this.current.id);
      list.user_id = session.uinfo() && session.uinfo().id;

      if(!list.user_id) {
        alert('清先登录~');
        return;
      }

      api('order/create', list).then(r => {
        this.$router.push('/new_order/' + r.data.oid)        
      });
    },
    set_oid(id) {
      id = id || 2;
      let t = new Date;
      return t.getTime() + id + Math.round(Math.random()*10);
    }
  }
};
</script>

<style scoped>
.main-area {
  background: #fff;
}

.text-area,
.cover-area {
  padding: 15px;
  font-size: 0;
}

.cover-area .cover {
  border-radius: 20px;
  overflow: hidden;
}

.cover-area .sm-cover {
  margin: 0 -10px;
}

.cover-area .sm-cover img {
  width: 25%;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.text-area .title {
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  padding: 12px 0;
}

.text-area .price {
  font-size: 2rem;
  color: #f35719;
  padding: 20px 0;
}

.text-area .price span:first-child {
  font-size: 1rem;
  color: #666;
  padding-right: 20px;
}

.text-area .price span:nth-child(2) {
  font-weight: bold;
}

.text-area .price span:nth-child(2)::after {
  content: "元/只";
  font-size: 1rem;
  color: #666;
  padding-left: 10px;
}

.text-area .info {
  padding: 12px;
  background: #f1f1f1;
}

.text-area .info div {
  font-size: 1rem;
  color: #666;
  display: inline-block;
  width: 50%;
  padding: 5px 10px;
  vertical-align: top;
}

.text-area .info span {
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  color: #333;
  vertical-align: top;
}

.prom p {
  margin: 0;
  padding: 10px 0;
  text-align: center;
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
}

.prom span {
  font-size: 1rem;
  color: #333;
  width: 25%;
  padding: 8px;
  text-align: center;
  display: inline-block;
}

.prom span i {
  height: 50px;
  width: 50px;
  display: inline-block;
  background: url(../assets/icons/dogInfoIcon.png);
}

.prom span:nth-child(3) i {
  background-position: -50px 0;
}
.prom span:nth-child(4) i {
  background-position: -100px 0;
}
.prom span:nth-child(5) i {
  background-position: -150px 0;
}

.btn-box {
  padding: 20px 0;
  margin-top: 40px;
}

.buy {
  background: #d64810;
  margin-right: 12px;
}

.buy span::after{
  content: '￥';
  margin-left: 8px;
}

.buy:hover {
  background: #ff4800;
}
</style>

