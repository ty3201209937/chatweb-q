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
    <ContinueApplicationButton class="paper" @click="gotoregistrition">
      论文生成入口
    </ContinueApplicationButton>
    <div class="home_page_botton1" @click="goToSearch">论文生成</div>
    <div class="home_page_botton2">学术专区</div>
    <div class="home_page_botton3">**分钟前论文生成成功</div>
    <div class="logo">
      <img src="@/assets/logo1.png" width="500px" height="200px">
    </div>
    <div class="container">
      <input type="text" id="inputField" placeholder="输入您想要解决的问题" @keypress="onKeyPress">
    </div>
  </div>
</template>


<script>
import ContinueApplicationButton from '@/components/Button/ContinueApplicationButton.vue';

export default {
  components: {
    ContinueApplicationButton
  },
  methods: {
    onKeyPress(event) {
      if (event.keyCode === 13) {
        this.goToSearch();
      }
    },
    goToSearch() {
      window.location.href = "/no-page";
    },
    gotoVIPPurchasePage() {
      this.$router.push({ name: 'VIPPurchase' });
    },
    gotoOnline() {
      this.$router.push({ name: 'online' });
    },
    gotoregistrition() {
      console.log('gotoregistrition called');
      // 添加你的逻辑
    }
  }
}
</script>


<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  width: 554px;
  height: 300px;
  position: relative;
  top: 530px;
  left: 1440px;
  margin-left: -60px;
  text-align: center;
  font-size: 20pt;
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

.box {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #ffffff;
  position: relative;
  text-align: center;
  vertical-align: middle;
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

.home_page_botton1 {
  width: 150px;
  height: 50px;
  background: hsl(180, 80%, 83%);
  position: absolute;
  top: 709px;
  left: 669px;
  border-radius: 10px;
}

.home_page_botton2 {
  width: 150px;
  height: 50px;
  background-color: hsl(180, 80%, 83%);
  position: absolute;
  top: 709px;
  left: 1074px;
  border-radius: 10px;
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
  margin-left: -1550px;
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

.paper {
  position: absolute;
  top: 800px;
  left: 400px;
}
</style>
