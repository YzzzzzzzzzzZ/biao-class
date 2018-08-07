<template>
  <div class="main">
    <div class="row tac signup-type">
      <span :class="'col-lg-6 ' + (show_phone ? 'active': '')" @click="show_phone=true">手机注册</span>
      <span :class="'col-lg-6 ' + (show_phone ? '': 'active')" @click="show_phone=false">邮箱注册</span>
    </div>
    <form @submit.prevent="submit" autocomplete="off">
      <div class="input-control">
        <label :class="{active: username_focus}" for="username">用户名</label>
        <input @focus="username_focus=true"
           @blur="current.username ? username_focus=true : username_focus=false" 
           type="text" 
           v-model="current.username" 
           id="username">
      </div>
      <div class="input-control" v-if="show_phone">
        <label :class="{active: phone_focus}" for="phone">手机号</label>
        <input @focus="phone_focus=true" @blur="current.phone ? phone_focus=true : phone_focus=false" type="text" v-model="current.phone" id="phone">
      </div>
      <div class="input-control" v-else>
        <label :class="{active: mail_focus}" for="mail">邮箱</label>
        <input @focus="mail_focus=true" @blur="current.mail ? mail_focus=true : mail_focus=false" type="text" v-model="current.mail" id="mail">
      </div>
      <div class="input-control">
        <div class="col-lg-7">
          <label :class="{active: code_focus}" for="code">验证码</label>
          <input @focus="code_focus=true" @blur="vcode ? code_focus=true: code_focus=false" type="text" v-model="vcode" id="code">
        </div>
        <div class="col-lg-1"></div>
        <div @click="send_code" class="col-lg-4 tac code">
          <span v-if="captcha.countdown == 0">发送验证码</span>
          <span v-else>{{captcha.countdown}}s后重试</span>
        </div>
      </div>
      <div class="error-list">
        <div class="error" v-if="invalid_code">验证码有误</div>
        <div id="vcode-error"></div>
      </div>
      <div class="input-control">
        <label :class="{active: password_focus}" for="password">密码</label>
        <input @focus="password_focus=true" @blur="current.password? password_focus=true : password_focus=false" type="password" v-model="current.password" id="password">
      </div>
      <div class="input-control">
        <label :class="{active: password2_focus}" for="password2">重复密码</label>
        <input @focus="password2_focus=true" @blur="password2 ? password2_focus=true : password2_focus=false" type="password" id="password2" v-model="password2">
      </div>
      <div type="submit" class="btn-box tac">
        <button class="btn btn-md">
          <span>注册</span>
          <img src="../assets/icons/right.png">
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import api from "../lib/api";
import session from "../lib/session";

export default {
  props:{
    loged: {
      default() {
        return;
      }
    }
  },
  data() {
    return {
      current: {},
      username_focus: false,
      password_focus: false,
      password2_focus: false,
      phone_focus: false,
      mail_focus: false,
      code_focus: false,
      show_phone: true,
      vcode: "",
      password2: "",
      invalid_code: false,
      captcha: {
        countdown: 0,
        timer: null
      }
    };
  },
  methods: {
    submit() {
      this.invalid_code = this.vcode !== this.code;

      if (this.invalid_code) return;

      if (!this.show_phone) delete this.current.phone;
      else delete this.current.mail;

      api('user/create', this.current)
        .then(r => {
          session.login(r.data);
          alert('注册成功');
          if(this.loged)
            this.loged();
        });
    },
    send_code() {
      if (this.captcha.countdown) return;

      let action;

      this.captcha.countdown = 60;

      action = "sms";

      if (!this.show_phone) action = "mail";

      if (
        (!this.show_phone && !this.current.mail) ||
        (this.show_phone && !this.current.phone)
      )
        return;

      this.captcha.timer = setInterval(() => {
        if (this.captcha.countdown == 0) {
          clearInterval(this.captcha.timer);
          return;
        }

        this.$set(this.captcha, "countdown", --this.captcha.countdown);
      }, 1000);

      api(`captcha/${action}`, {
        phone: this.current.phone,
        mail: this.current.mail
      }).then(r => {
        this.code = atob(r.data.result);
      });
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
  vertical-align: top;
  display: inline-block;
}

.input-control input:focus {
  outline: 0;
}

.code {
  background: #00c772;
  border: 1px solid #00c772;
  display: inline-block;
  border-radius: 8px;
  padding: 6px 5px;
  vertical-align: top;
  color: #fff;
}

.signup-type {
  border-bottom: 1px solid #00c772;
  margin-bottom: 12px;
}

.signup-type span {
  color: #666;
  padding: 8px 4px;
}

.signup-type span.active {
  color: #fff;
  background: #00c772;
}
</style>


