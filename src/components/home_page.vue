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
         <img src="@/assets/vip.jpg" alt="VIP支付入口" @click="gotoVIPPurchasePage" 
         style="width: 40px; height: 40px; margin: 40px 10px 20px -30px;
          border-radius: 10px; margin-top: -3px;"> 
          <img src="@/assets/zaixian.jpg" alt="在线客服"  @click="gotoOnline"
         style="width: 40px; height: 40px; margin: 40px 10px 20px -30px;
          border-radius: 10px; margin-top: -3px;"> 
      </ul>
    </div>
    <ContinueApplicationButton class="paper" @click="gotoregistrition">
      论文生成入口
    </ContinueApplicationButton>
    <div class="home_page_botton1" @click="goToSearch">论文生成</div>
    <div class="home_page_botton2">学术专区</div>
    <div class="home_page_botton3">**分钟前论文生成成功</div>
    <div class="logo">
  <img src="@/assets/logo1.png" 
       width="250px" height="100px" >
</div>
    <div class="container">
      <!-- 绑定@keypress事件到Vue方法 -->
      <input type="text" id="inputField" placeholder="输入您想要解决的问题" @keypress="onKeyPress" style="width: 780px; height: 115px; margin-top: 20px; margin-left: 50px; position: relative; top: -148px; border-radius: 10px 10px 10px 10px; left: -877px;">
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
  methods: {
    onKeyPress(event) {
      // 检测是否按下了回车键（键码为13）
      if (event.keyCode === 13) {
        // 跳转到目标页面
        this.goToSearch();
      }
    },
    goToSearch() {
      // 直接跳转，不需要后面的HTML标签
      window.location.href = "/no-page";
      // 如果你想在跳转前给用户提示，可以使用alert()函数
      // alert("即将跳转到search.html页面！");
    },
    gotoVIPPurchasePage() {
      // 跳转到VIP购买界面
      this.$router.push({ name: 'VIPPurchase' });
    },
    gotoOnline() {
      // 跳转到在线客服界面
      this.$router.push({ name: 'online' });
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
.container {
  width: 554px;
  height: 300px;
  float: left;
  position: absolute;
  top: 530px;
  margin-top: -10px;
  left: 1440px;
  margin-left: -60px;
  text-align: center;
  font-size:20pt;
}
.home_page_botton3 {
  width: 300px;
  height: 50px;
  background-color: hsl(180, 80%, 83%);
  position: absolute;
  top: 563px;
  left: 800px;
  border-radius: 10px;
}
.box {
  width: 1919px;
  height: 1080px;
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
  position:absolute;
  left: 30px;
  top: 224px;
  border-radius: 10px;
}
.logo {
  width: 500px;
  height: 250px;
  background: #ffffff; 
  position: absolute;
  top:40px;
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
  top:638px;
  left: 669px;
  border-radius: 10px;
}

.home_page_botton2 {
  width: 150px;
  height: 50px;
  background-color: hsl(180, 80%, 83%);
  position: absolute;
  top: 638px;
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
  width:250px;
  height: 240px;
  margin-top: 90px;
  margin-left: -1550px;
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