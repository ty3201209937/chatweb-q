<template>
  <div class="forgot-password-page">
    <div class="password-form">
      <div class="form-header">
        <h3>修改/找回密码</h3>
      </div>
      <div class="form-content">
        <div class="form-group">
          <div class="input-group">
            <input
              id="phone-number"
              v-model="phoneNumber"
              placeholder="请输入手机号"
              @input="validatePhoneNumber"
              :class="{'input-invalid': !phoneNumberIsValid && phoneNumber.length > 0}"
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
        </div>
        <div class="form-group">
          <input
            id="verification-code"
            v-model="verificationCode"
            placeholder="请输入验证码"
            @input="validateVerificationCode"
            :class="{'input-invalid': !verificationCodeIsValid && verificationCode.length > 0}"
          />
        </div>
        <div class="form-group">
          <div class="password-input-container">
            <input
              id="new-password"
              :type="showPassword ? 'text' : 'password'"
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
              :type="showConfirmPassword ? 'text' : 'password'"
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
        this.errorMessage = this.newPassword === this.confirmPassword ? '' : '两次输入的密码不匹配';
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
      this.cancelChange(); // 关闭页面
    },
    cancelChange() {
      this.resetForm(); // 重置表单状态
      this.$router.push({ name: 'login' }); // 返回登录页面
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
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
};
</script>

<style scoped>
.forgot-password-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.password-form {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  padding: 40px;
  position: relative;
}

.form-header {
  text-align: center;
  margin-bottom: 30px;
}

.form-header h3 {
  margin: 0;
  font-size: 1.8em;
  color: #343a40;
}

.form-group {
  margin-bottom: 25px;
  position: relative;
}

.input-group {
  display: flex;
  align-items: center;
}

.input-group input {
  flex: 1;
  width: 100%;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 5px 0 0 5px;
  font-size: 1em;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.input-group input:focus {
  border-color: #007bff;
  outline: none;
}

.input-group button {
  padding: 10px 15px;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #007bff;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.input-group button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

.form-group input {
  width: 100%;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1em;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-group input:focus {
  border-color: #007bff;
  outline: none;
}

.form-group button {
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-group button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

.input-invalid {
  border-color: #dc3545;
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
  color: #6c757d;
}

.error-message {
  color: #dc3545;
  font-size: 0.9em;
  margin-top: 10px;
  text-align: center;
}

.button-group {
  display: flex;
  justify-content: flex-end; /* 将按钮对齐到右侧 */
  gap: 20px; /* 添加间距 */
}

.confirm-button,
.cancel-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s, opacity 0.3s;
}

.confirm-button {
  background-color: #007bff;
  color: white;
}

.confirm-button:hover {
  background-color: #0056b3;
}

.cancel-button {
  background-color: #6c757d;
  color: white;
}

.cancel-button:hover {
  background-color: #5a6268;
}

.confirm-button:disabled,
.cancel-button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
  opacity: 0.5;
}
</style>