<template>
    <div class="container">
      <div class="login-wrapper">
        <div class="header">用户注册</div>
        <button type="button" id="return" class="return-item" @click="goBack">返回</button>
        <div class="form-wrapper">
          <img src="@/assets/tp1.png" class="logol-item">
          <input type="text" name="输入手机号码" placeholder="输入手机号码" class="input-item" v-model="phone">
          <input type="password" name="输入密码" placeholder="输入密码" class="input-item" v-model="password">
          <input type="password" name="确认密码" placeholder="确认密码" class="input-item" v-model="confirmPassword">
          <input type="yzm" name="输入验证码" placeholder="输入验证码" class="input-item" v-model="verificationCode">
          <button type="button" id="send-code" @click="sendVerificationCode">发送验证码</button>
          <div class="btn" @click="register">注册</div>
        </div>
        <div class="msg">
          <a href="#" @click.prevent="agreeTerms">注册及同意用户协议</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegistrationForm',
    data() {
      return {
        phone: '',
        password: '',
        confirmPassword: '',
        verificationCode: ''
      };
    },
    methods: {
      goBack() {this.$router.push({name: 'DLSign'});
        // 实现返回逻辑
      },
      sendVerificationCode() {
        // 实现发送验证码逻辑
      },
      register() {
        // 实现注册逻辑
      },
      agreeTerms() {
        // 实现同意用户协议逻辑
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    margin-bottom: -107\px;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  
  .login-wrapper {
    background-color: bisque;
    width: 385px;
    height: 600px;
    border-radius: 30px;
    padding: 0 50px;
    position: relative;
    left: 50%;
    top: 482px;
    transform: translate(-50%,-50%);
  }
  .header {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    line-height: 67px;
    margin-left: -295px;
    margin-bottom: -14px;
  }
  .return-item {
    width: 65px;
    height: 30px;
    margin-left: 342px;
  }
  .logol-item {
    width: 140px;
    height: 140px;
    border-radius: 800px;
    margin-left: 122px;
    margin-bottom: 18px;
  }
  .input-item {
    display: block;
    width: 365px;
    margin-bottom: 23px;
    border: 0;
    padding: 10px;
    border-bottom: 1px solid rgb(168, 81, 81);
    font-size: 15px;
    outline: none;
  }
  .rmm {
    text-align: center;
    line-height: 100px;
    margin: 0px;
  }
  .msg {
    text-align: center;
    line-height: 165px;
  }
  .input-item::placeholder {
    text-transform: uppercase;
  }
  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 141px;
    margin-top: -1px;
    background-image: linear-gradient(to right,#a6c1ee, #fbc2eb);
    color: #fff;
    margin-left: 114px;
    margin-bottom: 56px;
  }
  a {
    text-decoration-line: none;
    color: #abc1ee;
  }
  </style>