<template>
  <div class="box">
    <div class="navigation">
      <ul style="list-style: none;">
        <img src="@/assets/denglu.jpg" alt="登录" @click="gotosign" class="nav-icon">
        <img src="@/assets/duihua.jpg" alt="开启新会话" @click="gotono_page" class="nav-icon">
        <img src="@/assets/xueshu.jpg" alt="学术专区" @click="gotomainpage" class="nav-icon"> 
        <img src="@/assets/lunwen.jpg" alt="论文生成" @click="gotoPaperGenerator" class="nav-icon">
        <img src="@/assets/历史会话.jpg" alt="历史记录" @click="gotoHistory" class="nav-icon">
        <img src="@/assets/个人信息.jpg" alt="个人信息" @click="goToSigna" class="nav-icon">
        <img src="@/assets/vip.jpg" alt="VIP支付入口" @click="gotoVIPPurchasePage" class="nav-icon">
        <img src="@/assets/zaixian.jpg" alt="在线客服" @click="gotoOnline" class="nav-icon">
      </ul>
    </div>
    
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
      <input v-model="inputValue" class="input-field" type="text" placeholder="输入您想要解决的问题" @keydown="onKeyPress">
      
      <!-- 新增的按钮容器 -->
      <div class="buttons-container">
        <div class="upload-btn-wrapper">
          <label for="file-upload" class="upload-button">
            <span class="tooltip">支持上传文件(最多50个，每个100 MB)接受 pdf、doc、xlsx、ppt、txt、图片等</span>
          </label>
          <input
            id="file-upload"
            type="file"
            style="display: none"
            @change="handleFileUpload"
            multiple="multiple"
          />
        </div>
        
        <!-- 发送按钮 -->
        <button
          class="kimi-send-button"
          @click="handleSend"
          :disabled="!inputValue.trim()"
        ></button>
      </div>
    </div>
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
      isLoggedIn: false, // 假设这是你的登录状态变量
      inputValue: "", // 添加 inputValue 数据属性
    };
  },
  methods: {
    onKeyPress(event) {
      if (event.key === "Enter") {
        this.goToSearch();
      }
    },
    gotoVIPPurchasePage() {
      this.$router.push({ name: 'VIPPurchase' });
    },
    gotoHistory() {
      console.log('gotoHistory method called');
      this.$router.push({ name: 'history_paper' });
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
      this.$router.push({ name: 'NoPage', query: { content: this.inputValue } }); // 跳转到 NoPage 页面，并传递查询参数
    },
    gotono_page() {
      this.$router.push({ name: 'NoPage' }); // 跳转到 NoPage 页面
    },
    gotosign() {
      this.$router.push({ name: 'sign' });
    },
    goToSigna() {
      this.$router.push({ name: 'Person' });
      // 实现跳转到个人信息页面的逻辑
    },
    handleSend() {
      if (this.inputValue.trim() !== "") {
        // 跳转到 NoPage 页面，并传递输入内容
        this.$router.push({
          name: "NoPage",
          query: { content: this.inputValue },
        });
        this.inputValue = ""; // 清空输入框
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // 处理文件上传逻辑，例如发送到服务器
        console.log("文件已选择:", file);
      }
    },
    mounted() {
      console.log("Component mounted");
      const inputField = document.querySelector('.input-field');
      if (inputField) {
        console.log("Input field found");
      } else {
        console.log("Input field not found");
      }
    },
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
  flex-direction: column; /* 新增：使子元素垂直排列 */
  gap: 20px; /* 新增：控制子元素之间的间距 */
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
  height: 572px;
  background-color: hwb(184 70% 8%);
  position: absolute;
  left: 30px;
  top: 268px;
  border-radius: 10px;
  display: flex; /* 新增 */
  flex-direction: column; /* 新增 */
  align-items: center; /* 新增 */
  justify-content: center; /* 新增：使内容在导航栏内垂直居中 */
}
.navigation ul {
  list-style: none;
  display: flex; /* 新增 */
  flex-direction: column; /* 新增 */
  align-items: center; /* 新增 */
  gap: 7px; /* 新增：控制按钮之间的间距 */
  margin-left: -41px;
  margin-top: 32px;
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
  margin-top: 4px;
  margin-left: 11px;
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
  width: 150%;  
  max-width: 750px;
  height: 120px;
  top: 360px;
  left: -136px;
  margin-left: -800px;
  border-radius: 30px;
  border: 2px solid #ccc;
  padding: 10px;
  position: absolute;
  font-size: 16px;
  background-color: #f8f8f8;
  color: #333;
}

.buttons-container {
  position: absolute;
  right: 10px; /* 使按钮在右侧 */
  bottom: 10px; /* 使按钮对齐底部 */
  display: flex;
  gap: 10px; /* 控制按钮之间的间距 */
  top: 437px;
  left: -263px;
}

.kimi-send-button {
  width: 40px;
  height: 40px;
  background-image: url("@/assets/按钮.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 17px;
}

.kimi-send-button:hover {
  background-color: #0056b3;
}

.upload-btn-wrapper {
  display: inline-block;
}

.upload-button {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-image: url("@/assets/xuanzewenjian.png");
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.upload-button:hover {
  background-color: lightblue;
}

.tooltip {
  visibility: hidden;
  width: 400px; /* 设置宽度 */
  height: 50px; /* 设置高度 */
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position above the button */
  left: 50%;
  margin-left: -240px; /* 调整水平位置以居中 */
  opacity: 0;
  transition: opacity 0.3s;
  border: 1px solid #ddd; /* 边框 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 阴影 */
  padding: 10px; /* 内边距 */
  font-size: 14px; /* 字体大小 */
  line-height: 1.5; /* 行高 */
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent; /* 尾巴颜色 */
}

.upload-button:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
</style>