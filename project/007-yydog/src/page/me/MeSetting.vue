<template>
  <div class="content card">
    <h2 class="col-lg-3">个人信息</h2>
    
  </div>
</template>

<script>
import api from "../../lib/api";
import session from "../../lib/session";
import "../../css/admin.css";

export default {
  data() {
    return {
      current: {}, // 正在编辑的数据
    };
  },
  methods: {
    update() {
      api(`user/update`, this.current).then(r => {
        this.current = {};
        this.read();
      });
    }
  }
};
</script>

<style scoped>
.btn-box .btn {
  vertical-align: top;
  margin-left: 4px;
}
</style>
x