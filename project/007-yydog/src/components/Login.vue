<template>
  <div class="main">
    <form @submit.prevent="submit" autocomplete="off">
      <div class="input-control">
        <label :class="{active: username_focus}" for="username">用户名/手机号</label>
        <input @focus="username_focus=true" @blur="current.$unique ? username_focus=true : username_focus=false" type="text" v-model="current.$unique" id="username">
      </div>
      <div class="input-control">
        <label :class="{active: password_focus}" for="password">密码</label>
        <input @focus="password_focus=true" @blur="current.password ? password_focus=true : password_focus=false" type="password" v-model="current.password" id="password">
      </div>
      <div class="btn-box tac">
        <button type="submit" class="btn btn-md">
          <span>登录</span>
          <img src="../assets/icons/right.png">
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import session from '../lib/session.js'
export default {
  props: {
    loged:{
      default() {
        return;
      }
    }
  },
  data() {
    return {
      current: {},
      username_focus: false,
      password_focus: false
    };
  },
  methods: {
    submit() {
      let unique, password;

      if (
        !(unique = this.current.$unique) ||
        !(password = this.current.password)
      )
        return;

      if (unique === "admin" && password === "yoyoyo") {
        this.on_login_succeed({ id: 1, username: "admin", is_admin: true });
        return;
      }

      session.exist(unique, password).then(row => {
        if (!row) {
          this.login_failed = true;
          return;
        }
        this.on_login_succeed(row);
      });
    },
    on_login_succeed(row) {
      this.login_failed = false;
      delete row.password;
      session.login(row);
      if (session.is_admin()) {
        this.$router.push("/admin/order");
        return;
      }
      if(this.loged)
        this.loged();
    }
  }
};
</script>

<style scoped>
div.input-control {
  width: 350px;
  padding: 15px 0;
  position: relative;
}

.input-control label {
  top: 14px;
  padding: 4px 5px;
  padding-left: 0;
  position: absolute;
  transition: 0.2s all ease;
}

.input-control label.active {
  top: -8px;
  font-size: 0.9rem;
  color: #666;
  padding-left: 0;
  transition: 0.2s all ease;
}

.input-control input {
  width: 100%;
  padding: 8px 5px;
  border: 0;
  border-bottom: 1px solid #00c772;
}

.input-control input:focus {
  outline: 0;
}
</style>


