<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">账号登录</div>
      <div class="form-wrapper">
        <input type="text" v-model="username" placeholder="账号" class="input-item">
        <input type="password" v-model="password" placeholder="密码" class="input-item">
        <input type="text" v-model="verificationCode" placeholder="验证码" class="input-item">
        <div class="form-group">
          <button type="button" @click="sendCode">发送验证码</button>
        </div>
        <button class="sign-button" @click="goTomainseen">登录</button>
      </div>
      <div class="rmm">
        <a href="b" @click="register">注册</a>
        <a href="c" @click="forget">忘记密码</a>
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
      password: '',
      verificationCode: ''
    };
  },
  methods: {
    sendCode() {
      // 发送验证码的逻辑
      console.log('发送验证码');
    },
    login() {
      // 登录的逻辑
      console.log('登录', this.username, this.password, this.verificationCode);
    }
    ,
    register() {
      // 注册的逻辑
      this.$router.push({ name: 'DLRegistrition' });
    },
    forget() {
      // 忘记密码的逻辑
      this.$router.push({ name: 'ForgetPassword' });
    },
    goTomainseen() {
      // 跳转到主页的逻辑
      this.$router.push({ name: 'Mainseen' });
    }
  }
};
</script>

<style scoped>

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
  top: 492px;
  transform: translate(-50%,-50%);
}
.header {
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  line-height: 184px;
}
.input-item {
  display: block;
  width: 372px;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(168, 81, 81);
  font-size: 15px;
  outline: none;
}
.form-group {
  margin-bottom: 20px;
}
.sign-button {
  display: inline-block;
  padding: 10px 75px;
  background-color: #4254b9;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 108px;
}
a {
  text-decoration-line: none;
  color: #abc1ee;
  margin-left: 102px;

}


/* 新增样式 */
.checkbox-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  margin-top: 20px; /* 与上方元素的间距 */
}

</style>