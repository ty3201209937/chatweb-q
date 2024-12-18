<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">账号登录</div>
      <div class="form-wrapper">
        <input type="text" v-model="username" placeholder="账号" class="input-item">
        <input type="password" v-model="password" placeholder="密码" class="input-item">
        <div class="button-group">
          <button class="sign-button login-button" @click="login">登录</button>
          <button class="sign-button register-button" @click="register">注册</button>
        </div>
      </div>
      <div class="rmm">
        <a href="#" @click="forget">忘记密码</a>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="mycheckbox" />
        <label for="mycheckbox">登录及同意用户协议</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // 登录的逻辑
      console.log('登录', this.username, this.password);
    },
    register() {
      // 注册的逻辑
      this.$router.push({ name: 'registrition' });
    },
    forget() {
      // 忘记密码的逻辑
      this.$router.push({ name: 'ForgetPassword' });
    }
  }
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 20px;
}

.login-wrapper {
  background-color: rgba(0, 0, 0, .1);
  width: 465px;
  height: 620px; /* 增加高度 */
  border-radius: 10px;
  padding: 40px; /* 增加内边距 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
 
}

.header {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 20px; /* 减少间距 */
  transform: translateY(-100px); /* 上移标题 */
}

.input-item {
  width: 93%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  margin-left: 4px;
}

.input-item:focus {
  border-color: #4254b9;
}

.button-group {
  display: flex;
  justify-content: space-between;
  width: 78%;
  margin-top: 20px;
  margin-left: 55px;
}

.sign-button {
  width: calc(50% - 5px);
  padding: 15px;
  background-color: rgba(0, 0, 0, .15);
  color: white;
  border: none;
  border-radius: 5px; 
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sign-button:hover {
  background-color: #3548a1;
}

.register-button {
  background-color: #f0f0f0;
  color: #333;
}

.register-button:hover {
  background-color: #e0e0e0;
}

.rmm {
  margin-top: 25px;
  text-align: center;
  font-size: 14px;
  color: #666;
}

.rmm a {
  color:  rgb(0 0 0 / 47%);
  text-decoration: none;
  margin-left: 10px;
}

.checkbox-container {
  display: flex;
  justify-content: center;
  margin-top: 22px;
}

.checkbox-container input[type="checkbox"] {
  margin-right: 10px;
}
</style>