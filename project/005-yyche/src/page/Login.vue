<template>
  <div class="main">
    <Nav />
    <img src="../assets/logo.png">
    <div class="login-area">
      <div class="user-login">用户登录</div>
      <div class="error-box" id="username-error">
      </div>
      <form class="main-form">
        <div>
          <label for="username">用户名</label>
          <input
            v-validator="{required:true,min_length:2,max_length:4,username:true}"
            error-el="#username-error"
            type="text"
            id="username">
        </div>
        <div>
          <label for="password">密码</label>
          <input type="password" id="password">
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'

import validator from '../directive/validator'

 export default {
   directives : {validator},
   components : {
     Nav,
   }
 }
</script>

<style scoped>
  .main {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.1);
  }

  .main img {
    width:130px;
    margin: 30px auto;
  }

  .login-area {
    position: fixed;
    left: 50%;
    top:46%;
    -webkit-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    display: inline-block;
    padding: 30px 30px 50px;
    background: rgba(255,255,255);
    -webkit-box-shadow: 0 2px 30px rgba(0,0,0,.2);
    box-shadow: 0 2px 30px rgba(0,0,0,.2);
  }

  .user-login   {
    font-size: 1.5rem;
    text-align: center;
    border-bottom: 1px solid #fd521d;
    padding-bottom: 8px;
    color: #333;
    font-weight: bold;
  }

  .main-form {
    width: 300px;
    font-size: 1rem;
  }

  .main-form div {
    width: 100%;
    margin-bottom: 20px;
  }

  .main-form div label {
    display: block;
    margin: 0;
  }

  .main-form div input {
    width: 100%;
    margin-top: 5px;
    padding: 8px 3px;
    border:1px solid #999;
  }

  .main-form div input:focus {
    outline: 1px solid #fd521d;
    border: 1px solid transparent;
  }

  .main-form button {
    width: 100%;
    padding: 8px;
    text-align: center;
    background: #fd521d;
    color: #fff;
    border: 0;
    padding: 10px 0;
    margin-top:10px;
  }
</style>
