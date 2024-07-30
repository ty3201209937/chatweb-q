<template>
    <div class="qr-code-modal" @click="closeModal">
      <div class="qr-code-container" @click.stop>
        <div class="qr-code-header">
          <span>登录即可免费领取试用会员</span>
          <button class="close-button" @click="closeModal">×</button>
        </div>
        <img :src="qrCodeUrl" alt="QR Code">
        <div class="qr-code-footer">
          <span>使用微信扫码 关注公众号登录</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'QRCodeModal',
    props: {
      qrCodeUrl: String
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
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
  