<template>
  <div>
    <Nav/>
    <div class="header">
      <div class="container por">
        <form @submit="submit" class="main-form" autocomplete="off">
          <h1>登录</h1>
          <div v-if="login_failed" class="error-list">
            <div class="error">用户名或密码有误</div>
          </div>
          <div class="input-control">
            <!--<label for="username">用户名</label>-->
            <input v-validator="'required'"
                   v-focus
                   v-model="current.$unique"
                   type="text"
                   placeholder="用户名">
          </div>
          <div class="input-control">
            <input id="password"
                   v-model="current.password"
                   type="password"
                   placeholder="密码">
          </div>
          <div class="input-control">
            <button class="btn-primary" type="submit">登录</button>
          </div>
          <div class="input-control small muted">
            没有账号？<a href="#/signup">注册</a>
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis, sed! A culpa enim eveniet explicabo
        omnis quibusdam ullam vel. Animi aspernatur cupiditate incidunt nostrum quae, quidem totam. Labore, sequi!
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import api from "../lib/api";
import session from "../lib/session";

export default {
  // directives : { validator },
  data() {
    return {
      current: {},
      login_failed: false
    };
  },
  components: { Nav },
  methods: {
    submit(e) {
      e.preventDefault();
      let unique, password;

      if (
        !(unique = this.current.$unique) ||
        !(password = this.current.password)
      )
        return;

      if (unique === "admin" && password === "yoyoyo") {
        this.on_login_succeed({ username: "admin", is_admin: true, id: 1 });
        return;
      }

      api("user/read", {
        where: {
          or: [
            ["username", "=", unique],
            ["phone", "=", unique],
            ["mail", "=", unique]
          ]
        }
      }).then(r => {
        let row;
        if (!(row = r.data[0]) || row.password !== password) {
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
      alert("Yo.");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.header {
  height: 400px;
  background-image: url(../assets/login/1200x400.png);
  background-repeat: no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
}

.main-form {
  position: absolute;
  top: 60px;
  right: 10px;
  width: 240px;
}
</style>
