<template>
    <div class="login-page">
      <h2>登录</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">账号：</label>
          <input type="text" id="username" v-model="username" placeholder="请输入账号" required>
        </div>
        <div class="form-group">
          <label for="password">密码：</label>
          <input type="password" id="password" v-model="password" placeholder="请输入密码" required>
        </div>
        <button type="submit">确认登录</button>
      </form>
      <div class="register-link">
        <router-link to="/register" class="register-btn">注册账号</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        // 处理登录逻辑，可以在这里提交表单或者进行其他操作
        console.log('登录信息:', this.username, this.password);
        // 模拟登录成功后，可以进行页面跳转等操作
        // 这里简单跳转回首页
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .register-link {
    margin-top: 10px;
  }
  
  .register-btn {
    color: blue;
    text-decoration: underline;
  }
  </style>
  