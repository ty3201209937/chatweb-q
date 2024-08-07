<template>
  <div class="chat-container">
    <div class="header">
      <img class="avatar" src="../assets/logo.png" alt="Avatar" @click="fetchQRCode">
    </div>
    <div class="messages">
      <div
        class="message"
        v-for="(message, index) in messages"
        :key="index"
        :class="{'message-sent': message.sender === 'User2', 'message-received': message.sender === 'User1'}"
      >
        <div class="message-content">{{ message.content }}</div>
      </div>
    </div>
    <div class="footer">
      <div class="input-container">
        <textarea
          class="input-box"
          v-model="newMessage"
          placeholder="输入内容"
          @input="adjustHeight"
          @keydown.enter.exact.prevent="sendMessage"
          ref="textarea"
        ></textarea>
        <button class="send-button" @click="sendMessage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="qrCodeUrl" class="qr-code-modal" @click="closeQRCodeModal">
      <div class="qr-code-container" @click.stop>
        <div class="qr-code-header">
          <span>登录即可免费领取试用会员</span>
          <button class="close-button" @click="closeQRCodeModal">×</button>
        </div>
        <img :src="qrCodeUrl" alt="QR Code">
        <div class="qr-code-footer">
          <span>使用微信扫码 关注公众号登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../config'; // 引入全局变量

export default {
  name: 'ChatBox',
  data() {
    return {
      newMessage: '',
      messages: [
        { sender: 'User1', content: '你好！' }
      ],
      qrCodeUrl: '',
      loginPollingInterval: null,
    };
  },
  methods: {
    async sendMessage() {
      if (this.newMessage.trim() !== '') {
        const messageContent = this.newMessage;
        this.messages.push({
          sender: 'User2',
          content: messageContent
        });

        this.newMessage = '';
        this.$refs.textarea.style.height = 'auto';

        console.log('Sending message:', messageContent);

        try {
          const response = await axios.post(`${BASE_URL}/system/chat/question`, messageContent, {
            headers: {
              'Content-Type': 'text/plain'
            }
          });
          console.log('Response:', response.data);
          if (response.data && response.data.message) {
            this.messages.push({
              sender: 'User1',
              content: response.data.message
            });
            console.log('Message added:', response.data.message);
          } else {
            console.error('Response data format is incorrect');
          }
        } catch (error) {
          console.error('Error sending message:', error);
        }

        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    },
    adjustHeight() {
      const textarea = this.$refs.textarea;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    },
    scrollToBottom() {
      const messagesContainer = this.$el.querySelector('.messages');
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },
    async fetchQRCode() {
      try {
        const response = await axios.post(`${BASE_URL}/system/wx/getQRCode`);
        if (response.data && response.data.message) {
          this.qrCodeUrl = response.data.message;
          console.log('QR Code URL:', this.qrCodeUrl);
          // 显示二维码后调用 login 接口
          this.startLoginPolling();
        } else {
          console.error('Failed to fetch QR code');
        }
      } catch (error) {
        console.error('Error fetching QR code:', error);
      }
    },
    async startLoginPolling() {
      this.loginPollingInterval = setInterval(async () => {
        try {
          const response = await axios.get(`${BASE_URL}/system/wx/login`);
          if (response.data && response.data.success) {
            console.log('User openid:', response.data.message);
            alert('登录成功');
            this.qrCodeUrl = ''; // 关闭二维码模态框
            clearInterval(this.loginPollingInterval); // 停止轮询
          } else {
            console.error('Failed to login');
          }
        } catch (error) {
          console.error('Error logging in:', error);
        }
      }, 2000); // 每2秒轮询一次
    },
    closeQRCodeModal() {
      this.qrCodeUrl = '';
      if (this.loginPollingInterval) {
        clearInterval(this.loginPollingInterval);
      }
    }
  },
  mounted() {
    this.scrollToBottom();
  }
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  background-color: white;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: white;
  align-items: center;
}

.header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 0 0; /* 增加顶部和右侧的填充 */
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer; /* 增加手型光标以表明可以点击 */
}

.messages {
  flex: 1;
  width: calc(100% - 40px);
  max-width: 800px;
  padding: 10px;
  overflow-y: auto;
  background-color: #f9f9f9;
  padding-bottom: 70px;
}

.message {
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  word-wrap: break-word;
  display: flex;
  align-items: center;
  max-width: fit-content;
}

.message-sent {
  align-self: flex-end;
  background-color: #007bff;
  color: white;
  border: 1px solid #007bff;
  text-align: right;
  margin-left: auto;
}

.message-received {
  align-self: flex-start;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  text-align: left;
  margin-right: auto;
}

.message-content {
  font-size: 16px;
  line-height: 1.4;
}

.footer {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.input-box {
  flex: 1;
  padding: 10px 50px 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  max-height: 150px;
  overflow-y: auto;
  resize: none;
  line-height: 1.5;
}

.send-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.send-button svg {
  fill: white;
}

.send-button:hover {
  background-color: #0056b3;
}

.qr-code-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.qr-code-container {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.qr-code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.close-button {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.qr-code-footer {
  margin-top: 20px;
  color: #777;
}
</style>
