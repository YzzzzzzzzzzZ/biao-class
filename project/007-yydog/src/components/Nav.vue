<template>
  <div>
    <div class="nav row">
      <div class="col-lg-5">
        <SearchBar />
      </div>
      <div class="col-lg-2 logo-area">
        <router-link class="a" to="/">
          <img src="../assets/logo.png" alt="home">
        </router-link>
      </div>
      <div class="col-lg-3"></div>
      <div class="col-lg-2 right">
        <span v-if="!loged" class="a" @click="show=!show">登录/注册</span>
        <span v-else>
          <span class="a">{{username}}</span>&nbsp;
          <span class="a" @click="session.logout()">登出</span>
        </span>
      </div>
    </div>
    <transition name="login">
      <div v-if="show" class="login-or-signup">
        <img src="../assets/icons/close.png" @click="show=false">
        <div class="row title">
          <span  :class="{active: show_login}" @click="show_login=true" class="col-lg-6 tac">登录</span>
          <span  :class="{active: !show_login}" @click="show_login=false" class="col-lg-6 tac">注册</span>
        </div>
        <div v-if="show_login" class="login">
          <Login :loged="success" />
        </div>
        <div v-else class="signup">
          <Signup :loged="success"/>
        </div>
      </div>
    </transition>
    <transition name="loged">
      <div v-if="show_success" class="loged">登录成功！</div>
    </transition>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import Login from "./Login";
import Signup from "./Signup";
import session from "../lib/session.js";

export default {
  components: { SearchBar, Login, Signup },
  data() {
    return {
      show_login: true,
      show: false,
      loged: false,
      show_success: false,
      username: "",
      session: session
    };
  },
  methods: {
    success() {
      this.show = false;
      this.show_success = true;

      setTimeout(() => {
        this.show_success = false;
      }, 1000);

      this.is_loged();
    },
    is_loged() {
      let a = session.uinfo();
      if (!a) return;
      this.username = session.uinfo() && session.uinfo().username;
      this.loged = true;
    }
  },
  mounted() {
    this.is_loged();
  }
};
</script>

<style scoped>
/* Nav */

.nav {
  padding: 10px 20px;
  height: 90px;
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 3px 3px #eee;
  z-index: 1000;
}

.nav .a {
  color: #333;
  padding: 5px 10px;
  cursor: pointer;
}

.nav div {
  vertical-align: middle;
}

.logo-area a {
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 0;
}

.logo-area img {
  width: 50px;
  margin: 0 auto;
  display: inline-block;
}

.right {
  padding-right: 40px;
}

.login-or-signup {
  background: #fff;
  position: fixed;
  top: 100px;
  right: 5%;
  padding: 15px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-size: 1rem;
  z-index: 1;
  transition: all 0.2s;
}

.login-or-signup > img {
  position: absolute;
  right: 14px;
  padding: 10px;
  box-sizing: content-box;
  transform: rotateZ(90deg);
  transition: all 0.2s;
  cursor: pointer;
}

.login-or-signup > img:hover {
  transform: rotateZ(0deg);
  transition: all 0.2s;
}

.login-or-signup span {
  color: #666;
  font-size: 1.1rem;
  cursor: pointer;
}

.login-or-signup span.active {
  color: #00c770;
  border-bottom: 2px solid #00c770;
  padding-bottom: 10px;
}

.login-or-signup div.title {
  margin-top: 10px;
  padding: 10px 0 15px;
}

.login-enter-active,
.login-leave-active {
  transition: all 0.5s;
}
.login-enter, .login-leave-to /* .fade-leave-active below version 2.1.8 */ {
  top: -250px;
  opacity: 0;
}

.loged {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #00c770;
  color: #fff;
  padding: 12px 40px;
  z-index: 1;
  box-shadow: 0px 0px 20px #00c770;
}

.loged-enter-active,
.loged-leave-active {
  transition: all 0.5s;
}
.loged-enter, .loged-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

