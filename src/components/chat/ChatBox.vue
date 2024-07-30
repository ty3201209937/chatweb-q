<template>
  <div class="chat-container">
    <div class="header">
      <img class="avatar" src="@/assets/logo.png" alt="Avatar" @click="fetchQRCode">
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
    <MessageInput @send-message="sendMessage" v-model="newMessage" />
    <QRCodeModal v-if="qrCodeUrl" :qr-code-url="qrCodeUrl" @close="closeQRCodeModal" />
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/config.js'; // 引入全局变量
import MessageInput from './MessageInput.vue';
import QRCodeModal from './QRCodeModal.vue';

export default {
  name: 'ChatBox',
  components: {
    MessageInput,
    QRCodeModal
  },
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
    async sendMessage(messageContent) {
      if (messageContent.trim() !== '') {
        this.messages.push({
          sender: 'User2',
          content: messageContent
        });

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
  padding: 20px 20px 0 0;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
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
</style>
