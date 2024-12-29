<template>
  <div class="chat-container">
    <div class="chat-header">
      <h2>在线客服</h2>
    </div>
    <div class="chat-body">
      <div class="messages">
        <div 
          class="message" 
          v-for="(message, index) in messages" 
          :key="index" 
          :class="message.from"
        >
          <img :src="getAvatar(message.from)" alt="Avatar" class="avatar" />
          <span>{{ message.text }}</span>
        </div>
      </div>
    </div>
    <div class="chat-input">
      <input
        v-model="userMessage"
        @keyup.enter="sendMessage"
        placeholder="输入您的消息并按 Enter 发送..."
      />
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
import yonghu from '@/assets/yonghu.jpg';
import kefu from '@/assets/kefu.png';

export default {
  data() {
    return {
      userMessage: '',
      messages: []
    };
  },
  methods: {
    sendMessage() {
      if (this.userMessage.trim() === '') return;

      // 添加用户消息
      this.messages.push({ from: 'user', text: this.userMessage });
      
      // 清空用户输入框
      this.userMessage = '';

      // 模拟客服回复
      setTimeout(() => {
        this.messages.push({ from: 'support', text: '感谢您的消息，我们会尽快回复您！' });
      }, 1000);
    },
    getAvatar(from) {
      if (from === 'user') {
        return yonghu;
      } else if (from === 'support') {
        return kefu;
      }
      return '';
    }
  }
};
</script>

<style scoped>
.chat-container {
  width: 700px;
  height: 800px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 100px auto;
  padding: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.chat-header {
  text-align: center;
  margin-bottom: 12px;
}

.chat-body {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 12px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
}

.messages {
  margin: 0;
  padding: 0;
  list-style: none;
}

.message {
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.message.user {
  background-color: #d1f7c4;
  justify-content: flex-end; /* 头像在右边 */
}

.message.user img {
  order: 2; /* 头像放在最后 */
  margin-left: 10px; /* 调整与文本的间距 */
}

.message.user span {
  order: 1; /* 文本放在前面 */
}

.message.support {
  background-color: #f1f1f1;
  text-align: left;
  justify-content: flex-start;
}

.avatar {
  width: 40px; /* 设置头像宽度 */
  height: 40px; /* 设置头像高度 */
  border-radius: 50%; /* 圆形头像 */
  object-fit: cover; /* 确保图片不失真 */
  margin-right: 10px; /* 调整与文本的间距 */
}

.chat-input {
  display: flex;
  justify-content: space-between;
}

.chat-input input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 16px;
}

.chat-input button {
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.chat-input button:hover {
  background-color: #45a049;
}
</style>