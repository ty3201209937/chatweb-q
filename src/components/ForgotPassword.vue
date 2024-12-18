<template>
  <div class="modal-overlay" v-show="visible">
    <div class="password-dialog">
      <div class="dialog-header">
        <h3>修改/找回密码</h3>
        <button class="close-button" @click="cancelChange">&times;</button>
      </div>
      <div class="dialog-content">
        <div class="form-group" style="display: flex; align-items: center;">
          <input
            id="phone-number"
            v-model="phoneNumber"
            placeholder="请输入手机号"
            @input="validatePhoneNumber"
            :class="{'input-invalid':!phoneNumberIsValid && phoneNumber.length > 0}"
          />
          <button
            type="button"
            class="send-verification-code"
            @click="sendVerificationCode"
            :disabled="!phoneNumberIsValid"
          >
            获取验证码
          </button>
        </div>
        <div class="form-group">
          <input
            id="verification-code"
            v-model="verificationCode"
            placeholder="请输入验证码"
            @input="validateVerificationCode"
            :class="{'input-invalid':!verificationCodeIsValid && verificationCode.length > 0}"
          />
        </div>
        <div class="form-group">
          <div class="password-input-container">
            <input
              id="new-password"
              :type="showPassword? 'text' : 'password'"
              v-model="newPassword"
              placeholder="请输入新密码"
              @input="validatePassword"
            />
            <i
              v-if="showPassword"
              class="fas fa-eye toggle-password"
              @click="togglePasswordVisibility"
            ></i>
            <i
              v-else
              class="fas fa-eye-slash toggle-password"
              @click="togglePasswordVisibility"
            ></i>
          </div>
        </div>
        <div class="form-group">
          <div class="password-input-container">
            <input
              id="confirm-password"
              :type="showConfirmPassword? 'text' : 'password'"
              v-model="confirmPassword"
              placeholder="请再次输入新密码"
              @input="validatePassword"
            />
            <i
              v-if="showConfirmPassword"
              class="fas fa-eye toggle-password"
              @click="toggleConfirmPasswordVisibility"
            ></i>
            <i
              v-else
              class="fas fa-eye-slash toggle-password"
              @click="toggleConfirmPasswordVisibility"
            ></i>
          </div>
        </div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div class="button-group">
          <button
            type="button"
            class="confirm-button"
            @click="confirmChange"
            :disabled="!isPasswordValid"
          >
            确定
          </button>
          <button type="button" class="cancel-button" @click="cancelChange">取消</button>
        </div>
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
      newPassword: '',
      confirmPassword: '',
      errorMessage: '',
      visible: true,
      showPassword: false,
      showConfirmPassword: false,
      verificationCodeSent: false,
      verificationCodeIsValid: false,
      phoneNumberIsValid: false
    };
  },
  computed: {
    isPasswordValid() {
      return this.newPassword && this.newPassword === this.confirmPassword;
    }
  },
  methods: {
    validatePhoneNumber() {
      const regex = /^1[3-9]\d{9}$/;
      this.phoneNumberIsValid = regex.test(this.phoneNumber);
    },
    validateVerificationCode() {
      // 假设这里有一个函数用于验证验证码是否有效
      this.verificationCodeIsValid = false; // 或者使用其他占位符
    },
    validatePassword() {
      if (this.newPassword && this.confirmPassword) {
        this.errorMessage = this.newPassword === this.confirmPassword? '' : '两次输入的密码不匹配';
      } else {
        this.errorMessage = ''; // 清除错误信息
      }
    },
    sendVerificationCode() {
      console.log('发送验证码给:', this.phoneNumber);
      this.verificationCodeSent = true; // 假设验证码发送成功
    },
    resendVerificationCode() {
      console.log('重新发送验证码给:', this.phoneNumber);
      this.verificationCodeSent = true; // 假设验证码重新发送成功
    },
    confirmChange() {
      if (!this.isPasswordValid) {
        this.errorMessage = '两次输入的密码不匹配';
        return;
      }
      console.log('密码更改为:', this.newPassword);
      this.cancelChange(); // 关闭对话框
    },
    cancelChange() {
      this.visible = false; // 关闭对话框
      this.resetForm(); // 重置表单状态
    },
    resetForm() {
      this.phoneNumber = '';
      this.verificationCode = '';
      this.newPassword = '';
      this.confirmPassword = '';
      this.errorMessage = '';
      this.showPassword = false;
      this.showConfirmPassword = false;
      this.verificationCodeSent = false;
      this.verificationCodeIsValid = false;
      this.phoneNumberIsValid = false;
    },
    togglePasswordVisibility() {
      this.showPassword =!this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword =!this.showConfirmPassword;
    }
  }
};
</script>

<style scoped>
.modal-overlay {
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

.password-dialog {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px;
  padding: 30px;
  position: relative;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.dialog-header h3 {
  margin: 0;
  font-size: 1.5em;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #ccc;
}

.close-button:hover {
  color: #000;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.form-group input {
  flex-grow: 1;
  width: auto;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  box-sizing: border-box;
}

.form-group button {
  margin-left: 10px;
}

.input-invalid {
  border-color: red;
}

.password-input-container {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #aaa;
}

.error-message {
  color: red;
  font-size: 0.9em;
  margin-top: 10px;
}

.button-group {
  display: flex;
  justify-content: flex-end; /* 确保按钮组在内容的末尾 */
  gap: 10px; /* 按钮之间的间距 */
}

.confirm-button,
.cancel-button {
  padding: 10px 20px; /* 按钮内边距 */
  border: none; /* 无边框 */
  border-radius: 5px; /* 圆角边框 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
  font-size: 1em; /* 字体大小 */
  transition: background-color 0.3s, opacity 0.3s; /* 平滑背景色和透明度变化 */
}

.confirm-button {
  background-color: #007bff; /* 蓝色背景 */
  color: white; /* 白色文字 */
}

.confirm-button:hover {
  background-color: #0056b3; /* 悬停时的深色背景 */
}

.cancel-button {
  background-color: #6c757d; /* 灰色背景 */
  color: white; /* 白色文字 */
}

.cancel-button:hover {
  background-color: #5a6268; /* 悬停时的深色背景 */
}

/* 禁用状态下的按钮样式 */
.confirm-button:disabled,
.cancel-button:disabled {
  background-color: #e0e0e0; /* 禁用时的浅灰色背景 */
  cursor: not-allowed; /* 禁用时的鼠标样式 */
  opacity: 0.5; /* 禁用时的透明度 */
}
</style>