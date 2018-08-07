<template>
  <div class="main">
    <div  v-if="hub.cart" class="cart">
      <table>
        <tr><input type="checkbox"> 全选</tr>
        <tr v-for="it in hub.cart" :key="it.id">
          <td>
            <input type="checkbox" v-model="it._checked">
          </td>
          <td>
            <img :src="it.pet_info.cover_url">
          </td>
          <td>
            <router-link :to="`/detail/${it.pet_info.id}`">{{it.pet_info.title}}</router-link>
          </td>
          <td>
            {{it.pet_info.price}}元
          </td>
          <td>
            <div class="btn btn-sm" @click="cart_remove(it.id)">
              <span>移出购物车</span>
            </div>
          </td>
        </tr>
      </table>
      <div class="btn-box right">
        <p class="price">
          总价：{{sum}}
        </p>
        <div @click="create_order()" class="btn btn-md buy">
          <span>结算</span>
        </div>
      </div>
    </div>
    <div v-else class="kong">
      您还没有添加宠物~
    </div>
  </div>
</template>

<script>
import session from '../lib/session.js'
import api from '../lib/api.js'
import { all, remove } from "../hub/cart.js";
export default {
  data() {
    return {
      hub: all(),
      cart_remove: remove,
    };
  },
  methods: {
    create_order() {
      let list = {};

      list.sum = this.sum;
      list.oid = this.set_oid(this.hub.cart.id);
      list.user_id = session.uinfo().id;
      list.product_info = [];
      this.hub.cart.forEach(e => {
        list.product_info.push(e.pet_info);
      })

      api('order/create', list).then(r => {
        this.$router.push(`/new_order/${r.data.oid}`);
      })
      
    },
    set_oid(id) {
      id = id || 2;
      let t = new Date();
      return t.getTime() + id + Math.round(Math.random() * 10);
    },
  },
  computed: {
    sum() {
      let res = 0
      this.hub.cart.forEach(e => {
        res = e.pet_info.price + res;
      });
      return res;
    }
  }
};
</script>

<style scoped>
.main{
  margin-top: 20px;
}

.cart .btn-box{
  padding: 12px 0;
}

.kong {
  padding: 10px 80px;
  font-size: 1.1rem;
}
</style>


