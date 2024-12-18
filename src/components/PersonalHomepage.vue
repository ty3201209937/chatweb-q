<template>
  <div class="profile-page">
    <header class="header">
      <h3 class="header-title">个人主页</h3>
      <div class="order-management">
        <button @click="goToOrderManagement" class="button ">订单管理 ></button>
      </div>
    </header>
    <section class="profile">
      <div class="avatar">头像</div>
      <div class="profile-info">
        <span class="phone-number">153*****0467</span>
        <button class="vip-button" @click="openVipModal">开通会员</button>
      </div>
    </section>
    <main class="content">
      <p class="welcome-message">开通会员即刻解锁更多隐藏功能~</p>
      <div class="options">
        <div class="option">
          <span>修改密码</span>
          <button class="button" @click="showChangePasswordDialog = true">修改</button>
          <p>安全性高的密码可以使账号更安全，建议您定期更换密码。</p>
        </div>
        <ChangePasswordDialog v-if="showChangePasswordDialog" @close="showChangePasswordDialog = false" />
        <div class="option">
          <span>更换手机号码</span>
          <button class="button" @click="showChangePhoneNumberDialog = true">修改</button>
          <p>您已绑定了手机号 +86-15323730467，可用于找回密码和登录</p>
        </div>
        <ChangePhoneNumberDialog v-if="showChangePhoneNumberDialog" @close="showChangePhoneNumberDialog = false" />
        <div class="option">
          <span>账号注销</span>
          <button class="button" @click="showLogoutDialog = true">注销</button>
          <p>您的账号一旦被注销成功将不可恢复</p>
        </div>
        <LogoutDialog v-if="showLogoutDialog" @close="showLogoutDialog = false" />
      </div>
    </main>
    <div class="logout">
      <span @click="logout">退出登录</span>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.profile-page {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 90%;
  max-width: 1500px;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-title {
  margin: 0;
}

.profile {
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  border: 2px solid #007bff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #007bff;
}

.profile-info {
  flex: 1;
}

.phone-number {
  font-size: 18px;
  font-weight: bold;
}

.content {
  flex: 1;
  margin: 50px 0;
}

.welcome-message {
  font-size: 16px;
  color: #6c757d;
  margin: 10px 0;
}

.options {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.option {
  margin-bottom: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  background: #f9f9f9;
  transition: background-color 0.3s;
}

.option:hover {
  background: #f1f1f1;
}

.vip-button {
  padding: 10px 20px;
  background-color: #FFD700;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.vip-button:hover {
  background-color: #F0C040;
}

.button {
  padding: 8px 16px;
  background-color: transparent;
  color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: color 0.3s;
}

.button:hover {
  color: #0056b3;
  text-decoration: underline;
}

.logout {
  margin-top: 20px;
  text-align: center;
  color: #dc3545;
  font-weight: bold;
  cursor: pointer;
}

@media (max-width: 768px) {
  .profile-page {
    padding: 15px;
  }

  .avatar {
    width: 80px;
    height: 80px;
  }

  .phone-number {
    font-size: 16px;
  }

  .welcome-message {
    font-size: 14px;
  }

  .options {
    margin-top: 10px;
  }

  .option {
    padding: 8px;
  }

  .logout {
    font-size: 14px;
  }
}
</style>

<script>
import ChangePasswordDialog from './ChangePasswordDialog.vue';
import ChangePhoneNumberDialog from './ChangePhoneNumberDialog.vue';
import LogoutDialog from './LogoutDialog.vue';

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  components: {
    ChangePasswordDialog,
    ChangePhoneNumberDialog,
    LogoutDialog
  },
  data() {
    return {
      currentUserId: '123', // 假设这是当前登录用户的ID
      showChangePasswordDialog: false, // 控制弹窗显示的变量
      showChangePhoneNumberDialog: false,
      showLogoutDialog: false // 修正变量名
    };
  },
  methods: {
    goToOrderManagement() {
      // 使用动态路由参数 userId 导航到订单管理页面
      this.$router.push({ name: 'OrderManagement', params: { userId: this.currentUserId } });
    },
    goToVipPurchase() {
      // 导航到开通会员页面
      this.$router.push({ name: 'VIPPurchase' });
    },
    openVipModal() {
      // 打开会员开通弹窗
      this.$router.push('/vip-purchase');
    },
    changePassword() {
      this.showChangePasswordDialog = true; // 显示修改密码弹窗
    },
    changePhoneNumber() {
      // 更换手机号码逻辑
      this.showChangePhoneNumberDialog = true;
    },
    confirmLogout() {
      // 确认注销账号逻辑
      this.showLogoutDialog = true;
    },
    logout() {
      // 退出登录逻辑
      console.log('用户已退出');
    }
  }
}
</script>