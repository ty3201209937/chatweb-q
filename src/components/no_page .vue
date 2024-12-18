<template>
  <div class="box">
    <div class="navigation">
      <a href="home_page.html" class="button-link" target="_blank">返回</a>
      <ul style="list-style: none;">
        <li><button class="nav-button" @click="goToLogin">登录</button></li>
        <li><button class="nav-button">开启新会话</button></li>
        <li><button class="nav-button" @click="goToAcademicZone"><img src="@/assets/xueshu.jpg" alt="学术专区" class="nav-icon"></button></li>
        <li><button class="nav-button" @click="goToPaperGeneration"><img src="@/assets/lunwen.jpg" alt="论文生成" class="nav-icon"></button></li>
        <li><button class="nav-button">历史记录</button></li>
        <li><button class="nav-button" @click="goToSigna">个人信息</button></li>
        <li><button class="nav-button" @click="goToVip">VIP支付入口</button></li>
        <li><button class="nav-button">在线客服</button></li>
      </ul>
    </div>
    <div class="chat-box">
      <div ref="messagesContainer" class="messages-container">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="{'user-message': message.isUser}">
          <img v-if="!message.isUser" :src="message.avatar" alt="Avatar" class="message-avatar" />
          <div class="message-content">
            <span v-html="message.text"></span>
          </div>
          
          <!-- 用户消息时显示用户图片 -->
          <img v-if="message.isUser" src="@/assets/yonghu.jpg" alt="User Image" class="user-image" />
        </div>
        <!-- 新增的欢迎对话框 -->
      </div>
      <div v-if="showWelcomeDialog" class="dialog-container">
        <div class="dialog-box">
          <img src="@/assets/AI.jpg" alt="AI" class="dialog-image" />
          <div class="dialog-text">
            Hi，我是 卡塞图～ 很高兴遇见你！你可以随时把网址🔗或者文件📃发给我，我来帮你看看 
          </div>
        </div>
      </div>
     
      <div class="search-container">
        <textarea type="text" v-model="userInput" placeholder="输入您想要解决的问题" class="search-input" @keydown="handleKeyDown"></textarea>
        <button @click="sendMessage" class="send-button">
          <img src="@/assets/fasong.jpg" alt="发送" class="send-icon">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoPage',
  data() {
    return {
      showWelcomeDialog: false, // 控制欢迎对话框的显示
      userInput: '',
      messages: [
        { 
          text: ' Hi，我是 卡塞图～ 很高兴遇见你！你可以随时把网址🔗或者文件📃发给我，我来帮你看看 ', 
          avatar: require('@/assets/AI.jpg'),
          isUser: false 
        }
      ]
    };
  },
  methods: {
    sendMessage() {
      const userMessage = this.userInput.trim();
      if (userMessage) {
        this.messages.push({ text: userMessage, avatar: require('@/assets/yonghu.jpg'), isUser: true });
        this.userInput = ''; // 清空输入框
        this.autoReply(userMessage); // 自动回复
        console.log('发送的消息:', this.userInput);

        // 滚动到最新的消息
        this.$nextTick(() => {
          const messagesContainer = this.$refs.messagesContainer;
          if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }
        });
      }
    },
    autoReply(message) {
      // 模拟自动回复
      const reply = `这是关于 "${message}" 的回复`;
      this.messages.push({ text: reply, avatar: require('@/assets/AI.jpg'), isUser: false });

      // 滚动到最新的消息
      this.$nextTick(() => {
        const messagesContainer = this.$refs.messagesContainer;
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      });
    },
    goToAcademicZone() {
      this.$router.push('/mainpage');
    },
    goToPaperGeneration() {
      this.$router.push('/PaperGenerator');
    },
    goToLogin() {
      this.$router.push('/sign');
    },
    goToSigna() {
      // 实现跳转到个人信息页面的逻辑
    },
    goToVip() {
      // 实现跳转到VIP支付入口的逻辑
    },
    handleKeyDown(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // 阻止默认的换行行为
        this.sendMessage(); // 触发发送消息
      } else if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault(); // 阻止默认的换行行为
        this.userInput += '\n'; // 插入换行符
      }
    }
  }
};
</script>

<style scoped>
/* 导航栏样式 */
.navigation {
  width: 65px;
  height: 480px;
  background-color: hwb(184 70% 8%);
  position: fixed;
  left: 30px;
  top: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-button {
  display: block;
  width: 40px;
  height: 40px;
  margin: 10px auto;
  background-color: #ffbb3d;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #e9a831;
}

.nav-icon {
  width: 20px;
  height: 20px;
  display: block;
  margin: 0 auto;
}

/* 聊天框样式 */
.chat-box {
  width: 80%;
  height: 95vh;
  border: 0px solid #ccc;
  padding: 20px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative; /* 添加相对定位以便绝对定位欢迎对话框 */
  z-index: 1; /* 确保聊天框在其他内容之上 */
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
  position: relative; /* 添加相对定位以便绝对定位欢迎对话框 */
}

.message {
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
}

.message-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.message-content {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  max-width: 400px;
  word-wrap: break-word;
  white-space: pre-wrap; /* 保留空白符和换行符 */
}

.user-message {
  justify-content: flex-end;
}

.user-message .message-avatar {
  margin-right: 0;
  margin-left: 15px;
}

.user-message .message-content {
  background-color: #f0f0f0;
}

/* 新增用户图片样式 */
.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 15px;
}

.input-box {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  font-size: 20px;
  border: none;
  outline: none;
  resize: none; /* 禁止调整大小 */
  height: 100%; /* 使 textarea 高度占满 search-container */
  overflow-y: auto; /* 允许垂直滚动 */
}

.send-button {
  padding: 10px 15px;
  cursor: pointer;
  background-color: #ffbb3d;
  border: none;
  border-radius: 5px;
  color: white;
  transition: background-color 0.3s;
  margin-top: 8%;
}

.send-button:hover {
  background-color: #e9a831;
}

/* 返回按钮样式 */
.button-link {
  display: inline-block;
  padding: 10px 15px;
  color: white;
  background-color: #ffbb3d;
  text-decoration: none;
  border-radius: 5px;
  position: absolute;
  transition: background-color 0.3s;
  margin-top: -1095%;
}

.button-link:hover {
  background-color: #e9a831;
}

/* 其他样式 */
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f0f0f0;
  position: relative;
  text-align: center;
  vertical-align: middle;
}

.frame, .frame2, .frame3 {
  display: none; /* 隐藏这些元素，因为它们与聊天框重叠 */
}

.container {
  display: none; /* 隐藏这个元素，因为它是多余的 */
}

#textInput, #textArea {
  display: none; /* 隐藏这些元素，因为它们已经被聊天框替代 */
}

.button {
  display: none; /* 隐藏这个元素，因为它是多余的 */
}

.buttona, .buttonb, .buttonc {
  display: none; /* 隐藏这些元素，因为它们已经被导航栏按钮替代 */
}

/* 对话框样式 */
.dialog-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: absolute; /* 绝对定位以覆盖在消息容器上方 */
  z-index: 1000; /* 确保对话框在其他内容之上 */
}

.dialog-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  max-width: 300px;
}

.dialog-image {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
}

.dialog-text {
  flex-grow: 1;
}

.send-button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
}

.send-icon {
  width: 60px; /* 根据需要调整图片大小 */
  height: 60px; /* 根据需要调整图片大小 */
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  height: 20%;
}
</style>