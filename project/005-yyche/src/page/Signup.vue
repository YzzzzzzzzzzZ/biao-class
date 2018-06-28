<template>
  <div class="main">
    <Nav />
    <div class="container">
      <div class="sign-area">
        <div class="user-login">
          <img src="../assets/logo.png">
          用户注册
        </div>
        <div class="error-box">
          <div class="error">用户名不能为空</div>
        </div>
        <form class="main-form">
          <div>
            <label for="username">用户名：</label>
            <input type="text" id="username">
          </div>
          <div>
            <label for="password">密码：</label>
            <input type="password" id="password">
          </div>
          <div>
            <label for="password">重复密码：</label>
            <input type="password" id="password">
          </div>
          <div>
            <label></label>
            <button type="submit">注册</button>
            <button type="reset">重置</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from '../components/Nav'

 export default {
   components : {
     Nav,
   }
 }
</script>

<style scoped>
  .main {
    background: rgba(0,0,0,.1);
    padding-bottom:20px;
  }

  .main img {
    width:30px;
    margin: 8px auto;
  }

  .sign-area {
    margin: 20px 0;
    padding: 20px;
    background: rgba(255,255,255);
    -webkit-box-shadow: 0 2px 10px rgba(0,0,0,.2);
    box-shadow: 0 2px 10px rgba(0,0,0,.2);
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
    width: 400px;
    margin: 0 auto;
    font-size: 1rem;
  }

  .main-form div {
    width: 100%;
    margin-bottom: 20px;
  }

  .main-form div label {
    display: inline-block;
    padding-right: 8px;
    width:30%;
    text-align: right;
  }

  .main-form div input {
    width: 70%;
    margin-top: 5px;
    padding: 8px 3px;
    border:1px solid #999;
  }

  .main-form div input:focus {
    outline: 1px solid #fd521d;
    border: 1px solid transparent;
  }

  .main-form button {
    width: 20%;
    margin: 0 5%;
    display: inline-block;
    padding: 8px 20px;
    text-align: center;
    background: #fd521d;
    color: #fff;
    border: 0;
    margin-top:10px;
  }
</style>
