<template>
  <div class="chat-container">
    <div class="header">
      <img class="avatar" src="@/assets/logo.png" alt="Avatar" @click="fetchQRCode" />
      <button class="vip-button" @click="goToVIPPurchase">前往VIP购买界面</button>
      
      <ContinueApplicationButton class="paper" @click="goToPaperGenerator">
        论文生成入口
      </ContinueApplicationButton>
    </div>
    <div class="messages">
      <div
        class="message-wrapper"
        v-for="(message, index) in messages"
        :key="index"
        :class="{'message-sent-wrapper': message.sender === 'User2', 'message-received-wrapper': message.sender === 'User1'}"
      >
        <img v-if="message.sender === 'User1'" :src="message.avatar" alt="Avatar" class="message-avatar-left" />
        <div class="message" :class="{'message-sent': message.sender === 'User2', 'message-received': message.sender === 'User1'}">
          <div class="message-content">{{ message.content }}</div>
        </div>
        <img v-if="message.sender === 'User2'" :src="message.avatar" alt="Avatar" class="message-avatar-right" />
      </div>
    </div>
    <MessageInput @send-message="sendMessage" v-model="newMessage" />
    <QRCodeModal v-if="qrCodeUrl" :qr-code-url="qrCodeUrl" @close="closeQRCodeModal" />
  </div>
</template>


<script>
import ContinueApplicationButton from '@/components/Button/ContinueApplicationButton.vue';
import axios from 'axios';
import { BASE_URL } from '@/config.js';
import MessageInput from './MessageInput.vue';
import QRCodeModal from './QRCodeModal.vue';

export default {
  name: 'ChatBox',
  components: {
    ContinueApplicationButton,
    MessageInput,
    QRCodeModal
  },
  data() {
    return {
      newMessage: '',
      messages: [
        { sender: 'User1', content: '你好！', avatar: require('@/assets/user1-avatar.png') }
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
          content: messageContent,
          avatar: require('@/assets/user2-avatar.png')
        });

        try {
          const response = await axios.post(`${BASE_URL}/system/chat/question`, messageContent, {
            headers: {
              'Content-Type': 'text/plain'
            }
          });
          if (response.data && response.data.message) {
            this.messages.push({
              sender: 'User1',
              content: response.data.message,
              avatar: require('@/assets/user1-avatar.png')
            });
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
            alert('登录成功');
            this.qrCodeUrl = '';
            clearInterval(this.loginPollingInterval);
          } else {
            console.error('Failed to login');
          }
        } catch (error) {
          console.error('Error logging in:', error);
        }
      }, 2000);
    },
    closeQRCodeModal() {
      this.qrCodeUrl = '';
      if (this.loginPollingInterval) {
        clearInterval(this.loginPollingInterval);
      }
    },
    goToVIPPurchase() {
      this.$router.push({ name: 'VIPPurchase' });
    },
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
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;
}

.vip-button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
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

.message-wrapper {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}

.message-sent-wrapper {
  justify-content: flex-end;
}

.message-received-wrapper {
  justify-content: flex-start;
}

.message {
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  word-wrap: break-word;
  display: inline-block;
  max-width: fit-content;
}

.message-sent {
  background-color: #007bff;
  color: white;
  border: 1px solid #007bff;
  text-align: right;
}

.message-received {
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  text-align: left;
}

.message-content {
  font-size: 16px;
  line-height: 1.4;
}

.message-avatar-left {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  align-self: flex-start;
}

.message-avatar-right {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  align-self: flex-start;
}
.paper{
  position:absolute ;
  top: 400px;
  left: 20px;

}

</style>