<template>
    <div class="footer">
      <div class="input-container">
        <textarea
          class="input-box"
          v-model="message"
          placeholder="输入内容"
          @input="adjustHeight"
          @keydown.enter.exact.prevent="handleSendMessage"
          ref="textarea"
        ></textarea>
        <button class="send-button" @click="handleSendMessage">
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
  </template>
  
  <script>
  export default {
    name: 'MessageInput',
    props: {
      value: String
    },
    data() {
      return {
        message: this.value
      };
    },
    methods: {
      handleSendMessage() {
        if (this.message.trim() !== '') {
          this.$emit('send-message', this.message);
          this.message = '';
          this.$refs.textarea.style.height = 'auto';
        }
      },
      adjustHeight() {
        const textarea = this.$refs.textarea;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      }
    },
    watch: {
      value(newValue) {
        this.message = newValue;
      }
    }
  };
  </script>
  
  <style scoped>
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
  </style>
  