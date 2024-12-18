<template>
  <div>
    <div class="modal" v-show="visible">
      <div class="password-dialog">
        <div class="dialog-content">
          <h3>修改密码</h3>
          <input
            type="password"
            v-model="password"
            placeholder="请输入密码"
            @input="validatePassword"
          />
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="请再次输入密码"
            @input="validatePassword"
          />
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
          <div class="buttons">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      confirmPassword: '',
      errorMessage: '',
      visible: true
    };
  },
  computed: {
    isPasswordValid() {
      return this.password && this.password === this.confirmPassword;
    }
  },
  methods: {
    validatePassword() {
      this.errorMessage = this.password === this.confirmPassword ? '' : '两次输入的密码不匹配';
    },
    confirmChange() {
      if (!this.isPasswordValid) {
        return;
      }
      // Handle password change logic, e.g., API request
      console.log('密码更改为:', this.password);
      this.cancelChange(); // Close the dialog
    },
    cancelChange() {
      this.visible = false; // 关闭对话框
      this.resetForm(); // 重置表单状态
    },
    resetForm() {
      this.password = '';
      this.confirmPassword = '';
      this.errorMessage = '';
    },
    closeModal() {
      this.resetForm(); // 重置表单状态
      this.visible = false; // 关闭对话框
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.password-dialog {
  position: relative;
  z-index: 1001;
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px; /* Adjust as needed */
  margin: 0 auto; /* Center the dialog */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.dialog-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px; /* Adjust as needed */
  margin: 0 auto; /* Center the dialog */
}

.error-message {
  color: red;
  margin-top: 5px;
}

.confirm-button,
.cancel-button {
  padding: 8px 16px;
  margin: 5px; /* Space between buttons */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.confirm-button {
  background-color: #007bff;
  color: white;
}

.confirm-button:hover {
  background-color: #0056b3;
}

.cancel-button {
  background-color: #ccc;
  color: white;
}

.cancel-button:hover {
  background-color: #aaa;
}
</style>