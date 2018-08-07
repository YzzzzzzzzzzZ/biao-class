<template>
  <div>
    <h2>您的订单</h2>
    <div>订单号：{{current.oid}}</div>
    <div>总价：{{current.sum}}元</div>
    <div>
      <p>订单详情：</p>
      <table class="col-lg-8">
        <tr v-for="it in current.product_info" :key="it.id">
          <td>
            <img :src="it.cover_url">
          </td>
          <td>
            <router-link :to="`/detail/${it.id}`">{{it.title}}</router-link>
          </td>
          <td>
            {{it.price}}元
          </td>
        </tr>
      </table>
    </div>
    <div>
      {{current.pay_by}}
      <label for="wechat">微信支付</label>
      <input type="radio" name="pay-by" id="wechat" value="wechat" v-model="current.pay_by" hidden>
      <label for="alipay">支付宝</label>
      <input type="radio" name="pay-by" id="alipay" value="alipay" v-model="current.pay_by" hidden>
    </div>
    <div>
      {{discount}}
      <label for="discount">老板吐血大酬宾！每单仅需1分钱！</label>
      <input type="checkbox" name="discount" v-model="discount">
    </div>
    <div>需支付：{{total}}元</div>
    <span @click="pay">前往支付</span>
    <transition name="wechat">
      <div v-if="wechat" class="mask" @click="wechat=false">
        <div>
          <img :src="qrcode">
          <div class="btn btn-md">
            <span @click="pay_for_success">支付完成</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import api from "../lib/api.js";

export default {
  mounted() {
    this.find().then(r => {
      if (!r.data) {
        alert("订单号不正确！");
        this.go_me_order();
      }
      if (r.data._paid) {
        alert("此订单已支付");
        this.go_me_order();
      }
      this.current = Object.assign({}, r.data, this.current);
      if (this.discount) {
        this.total = 0.01;
      } else {
        this.total = r.data.sum;
      }
    });
  },
  component: { Nav },
  data() {
    return {
      wechat: false,
      current: {
        pay_by: "wechat"
      },
      qrcode: "",
      discount: true,
      total: 0
    };
  },
  methods: {
    go_me_order() {
      this.$router.push("/me/order");
    },
    find() {
      let oid = this.$route.params.oid;
      return api("order/first", {
        oid: oid,
        // with: {
        //   relation: 'has_many',
        //   model: 'pet'
        // }
      });
    },
    pay() {
      api("order/payment/url", {
        id: this.current.id,
        pay_by: this.current.pay_by,
        fee: this.total,
        return_url: this.url("/#/pay_for_success")
      }).then(r => {
        if (r.data.url) location.href = r.data.url;
        else {
          this.qrcode = r.data.qrcode;
          this.wechat = true;
        }
      });
    },
    url(segment) {
      return location.protocol + "//" + location.host + segment;
    },
    pay_for_success() {
      this.find().then(r => {
        if(r.data._paid){
          this.$router.push('/pay_for_success')
        }else{
          alert('订单未支付！')
        }
      });
    }
  },
  watch: {
    discount() {
      if (this.discount) {
        this.total = 0.01;
      } else {
        this.total = this.current.sum;
      }
    }
  }
};
</script>

<style scoped>
.mask {
  position: fixed;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.mask > div {
  width: 300px;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: #00000077;
  padding: 10px;
}

.mask img,
.mask .btn {
  display: inline-block;
}

.mask img {
  width: 100%;
  margin-bottom: 20px;
}
</style>


