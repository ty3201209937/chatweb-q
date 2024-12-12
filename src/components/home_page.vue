<template>
  <div class="box">
    <div class="navigation">
      <ul style="list-style: none;">
        <li>登录</li>
        <li>开启新会话</li>
        <li>学术专区</li>
        <li>论文生成</li>
        <li>历史记录</li>
        <li>个人信息</li>
        <img src="@/assets/vip.jpg" alt="VIP支付入口" @click="gotoVIPPurchasePage" class="nav-icon">
        <img src="@/assets/zaixian.jpg" alt="在线客服" @click="gotoOnline" class="nav-icon">
      </ul>
    </div>
    <!-- 使用 Flexbox 布局来控制按钮间距 -->
    <div class="button-container">
      <ContinueApplicationButton
        buttonText="论文生成入口"
        paperClass="paper"
        :onClick="gotoPaperGenerator"
        class="button-margin"
      />
      <ContinueApplicationButton
        buttonText="学术专区入口"
        paperClass="paper1"
        :onClick="gotomainpage"
        class="button-margin"
      />
    </div>
    <div class="home_page_botton3">**分钟前论文生成成功</div>
    <div class="logo">
      <img src="@/assets/logo1.png" width="500px" height="200px">
    </div>
      <input class="input-field" type="text"  placeholder="输入您想要解决的问题" @keydown="onKeyPress">
  </div>
</template>

<script>
import ContinueApplicationButton from '@/components/Button/ContinueApplicationButton.vue';

export default {
  components: {
    ContinueApplicationButton
  },
  data() {
    return {
      isLoggedIn: false // 假设这是你的登录状态变量
    };
  },
  methods: {
    onKeyPress(event) {
      if (event.key === 'Enter') {
        this.goToSearch();
      }
    },
    gotoVIPPurchasePage() {
      this.$router.push({ name: 'VIPPurchase' });
    },
    gotomainpage() {
      this.$router.push({ name: 'mainpage' });
    },
    gotoOnline() {
      this.$router.push({ name: 'online' });
    },
    gotoPaperGenerator() {
      this.$router.push({ name: 'PaperGenerator' }); // 确保路由名称正确
    },
    goToSearch() {
    this.$router.push({ name: 'NoPage' }); // 跳转到 /no-page 页面
  },
  },
  mounted() {
    console.log('Component mounted');
    const inputField = document.getElementById('inputField');
    if (inputField) {
      console.log('Input field found');
    } else {
      console.log('Input field not found');
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  transform: scale(1);
  margin: 0;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 使容器充满整个视口 */
  position: relative; /* 添加相对定位 */
  overflow: visible; /* 确保子元素不会被裁剪 */
}


.home_page_botton3 {
  width: 300px;
  height: 50px;
  background-color: hsl(180, 80%, 83%);
  position: absolute;
  top: 633px;
  left: 800px;
  border-radius: 10px;
}

.navigation {
  width: 65px;
  height: 480px;
  background-color: hwb(184 70% 8%);
  position: absolute;
  left: 30px;
  top: 268px;
  border-radius: 10px;
}

.logo {
  width: 500px;
  height: 250px;
  background: #ffffff;
  position: absolute;
  top: 80px;
  left: 1478px;
  margin: 10px auto;
  text-align: center;
  line-height: 100px;
}

.navigation ul li {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 40px 10px 20px -30px;
  background-color: #ffbb3d;
  border-radius: 10px;
  margin-top: -3px;
}

.logo img {
  width: 250px;
  height: 240px;
  margin-top: 90px;
  margin-left: -1600px;
}

.nav-icon {
  width: 40px;
  height: 40px;
  margin: 40px 10px 20px -30px;
  border-radius: 10px;
  margin-top: -3px;
}

.button-link {
  padding: 10px 15px;
  color: white;
  background-color: blue;
  text-decoration: none;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  top: -722px;
  left: 440px;
  position: relative;
}

.button-container {
  position: absolute;
  top: 710px;
  left: 750px; /* 将 left 属性增加 100px */
  display: flex;
  gap: 20px; /* 控制按钮之间的间距 */
}

.paper, .paper1 {
  flex: 1; /* 使按钮宽度一致 */
}

  .input-field {
    width: 750px;
    height: 120px;
    border-radius: 30px;
    border: 2px solid #ccc;
    padding: 10px;
    position: absolute;
    top: 433px;
    left: 550px;
    border-radius: 10px;
    font-size: 16px;
    background-color: #f8f8f8;
    color: #333;
  }
</style>