<template>
  <div class="chat-container">
    <div class="chat-window">
      <div class="messages">
        <div
            v-for="(message, index) in messages"
            :key="index"
            :class="{'user-message': message.isUser, 'bot-message': !message.isUser}"
        >
          {{ message.text }}
        </div>
      </div>
    </div>
    <div class="input-area">
      <input v-model="userInput" @keyup.enter="sendMessage" placeholder="输入你的消息..." />
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      userInput: '',
      messages: []
    };
  },
  methods: {
    sendMessage() {
      if (this.userInput.trim() === '') return;

      // Add user message
      this.messages.push({
        text: this.userInput,
        isUser: true
      });

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({
          text: `你说的是: ${this.userInput}`,
          isUser: false
        });
      }, 500);

      // Clear input
      this.userInput = '';
    }
  }
};
</script>

<style scoped>
.chat-container {
  width: 100%;
  max-width: 800px; /* 放大界面 */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(1.2); /* 放大界面 */
}

.chat-window {
  width: 100%;
  height: 500px; /* 放大高度 */
  padding: 10px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.messages {
  display: flex;
  flex-direction: column;
}

.user-message {
  align-self: flex-end;
  background-color: #dcf8c6;
  padding: 5px 10px;
  border-radius: 10px;
  margin: 5px 0;
}

.bot-message {
  align-self: flex-start;
  background-color: #f1f0f0;
  padding: 5px 10px;
  border-radius: 10px;
  margin: 5px 0;
}

.input-area {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

input {
  width: calc(100% - 80px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 60px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
