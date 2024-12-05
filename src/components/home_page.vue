<template>
  <div>
    <div class="box">
      <!-- 导航栏 -->
      <div class="navigation">
        <ul>
          <li>登录</li>
          <li>开启新会话</li>
          <li>学术专区</li>
          <li>论文生成</li>
          <li>历史记录</li>
          <li>个人信息</li>
          <li>vip支付入口</li>
          <li>在线客服</li>
        </ul>
      </div>
      
      <!-- 按钮 -->
      <div class="home_page_botton1">论文生成</div>
      <div class="home_page_botton2">学术专区</div>
      <div class="home_page_botton3">**分钟前论文生成成功</div>

      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/tp1.png" width="500px" height="200px">
      </div>
    </div>
    
    <!-- 输入框 -->
    <div class="container">
      <input 
        type="text" 
        id="inputField" 
        placeholder="输入您想要解决的问题" 
        @keypress="handleKeyPress" 
        v-model="inputValue"
        class="input-field" 
      />
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomePage',
  data() {
    return {
      inputValue: '', // 绑定输入框值
    };
  },
  methods: {
  handleKeyPress(event) {
    // 检测是否按下了回车键（键码为13）
    if (event.key === 'Enter') {
      // 阻止默认行为（例如换行）
      event.preventDefault();
      // 跳转到存在的页面
      this.$router.push({ name: 'home_page' }); // 这里修改为你的实际路由
    }
  }
}
};
</script>


<style scoped>
/* 保留原有样式 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  position: relative;
  width: 100%;
  height: 100vh;
}

.navigation {
  width: 65px;
  height: 480px;
  background-color: hwb(184 70% 8%);
  position: absolute;
  left: 30px;
  top: 150px;
  border-radius: 10px;
}

.navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigation ul li {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 10px;
  background-color: #ffbb3d;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
}

.home_page_botton1, .home_page_botton2, .home_page_botton3 {
  width: 150px;
  height: 50px;
  background: hsl(180, 80%, 83%);
  border-radius: 10px;
  margin: 20px;
  text-align: center;
  line-height: 50px;
}

.home_page_botton1 {
  margin-top: 200px;
}

.home_page_botton2 {
  margin-top: 20px;
}

.home_page_botton3 {
  margin-top: 20px;
  width: 300px;
}

.logo {
  margin-top: 50px;
  text-align: center;
}

.logo img {
  width: 500px;
  height: 200px;
}

.container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
}

.input-field {
  width: 780px;
  height: 50px;
  padding: 10px;
  font-size: 16pt;
  border-radius: 10px;
  border: 1px solid #ccc;
}
</style>
