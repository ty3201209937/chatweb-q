<template>
  <div class="phone-dialog" v-if="visible">
    <div class="modal-content">
      <button @click="closeDialog">Close</button>
      <div class="dialog-content">
        <h3>更换手机号码</h3>
        <input type="text" v-model="phoneNumber" placeholder="请输入手机号" required />
        <div class="verification-code">
          <input type="text" v-model="verificationCode" placeholder="请输入验证码" required />
          <button @click="getVerificationCode">获取验证码</button>
        </div>
        <button @click="submitChange">下一步</button>
        <button @click="closeDialog">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: '',
      verificationCode: '',
      visible: true
    };
  },
  methods: {
    getVerificationCode() {
      // 在这里处理获取验证码的逻辑
      alert('验证码已发送至您的手机');
    },
    submitChange() {
      if (!this.phoneNumber || !this.verificationCode) {
        alert('请输入完整的信息');
        return;
      }
      // 在这里处理手机号码更改逻辑
      console.log('手机号码:', this.phoneNumber);
      console.log('验证码:', this.verificationCode);
      this.closeDialog();
    },
    closeDialog() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.phone-dialog {
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

.dialog-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
}

.verification-code {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.verification-code input {
  flex: 1;
}

button {
  margin-left: 10px;
}
</style>