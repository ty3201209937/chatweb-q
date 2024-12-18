<template>
  <div class="vip-purchase-page">
    <!-- 侧边栏 -->
    <Sidebar />

    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 返回按钮 -->
      <button class="back-button" @click="goBack">返回</button>

      <!-- 头部 -->
      <header class="header">
        <div class="user-info">
          <div class="avatar">头像</div>
          <div class="user-details">
            <div>名称</div>
            <div>普通会员</div>
          </div>
        </div>

        <!-- 居中的公司LOGO -->
        <div class="logo">公司LOGO</div>
      </header>

      <!-- 权益说明 -->
      <div class="benefits-notice">
        根据不同会员级别显示不同权益
      </div>

      <!-- 订阅选项 -->
      <div class="subscription-options">
        <SubscriptionBox
          title="1个月"
          price="正常价格/月"
          benefits="免费体验学术专区服务5次、享有10次免费论文下载、购买服务折扣、专属客服权益"
        />
        <SubscriptionBox
          title="3个月"
          price="相对优惠价/月"
          benefits="免费体验学术专区服务8次、享有30次免费论文下载、购买服务折扣、专属客服权益"
        />
        <SubscriptionBox
          title="12个月"
          price="最优惠价/月"
          benefits="免费体验学术专区服务20次、享有100次免费论文下载、购买服务折扣、专属客服权益"
        />
      </div>

      <!-- 服务协议 -->
      <div class="agreement">
        <input type="checkbox" id="agreement" />
        <label for="agreement">同意《VIP购买服务协议》</label>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import SubscriptionBox from './SubscriptionBox.vue';

export default {
  components: {
    Sidebar,
    SubscriptionBox
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.vip-purchase-page {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f4f6f8;
}

/* 返回按钮样式 */
.back-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 12px;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* 主内容样式 */
.main-content {
  flex-grow: 1;
  padding: 20px 40px;
  background-color: #ffffff;
  border-radius: 12px; /* 增加圆角 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 更深的阴影 */
  margin: 20px;
  display: flex;
  flex-direction: column;
}

/* 头部样式 */
.header {
  display: flex;
  justify-content: center; /* 确保 LOGO 在中间 */
  align-items: center;
  background-color: #f4b084;
  padding: 20px;
  border-radius: 12px; /* 更圆的角 */
  margin-bottom: 20px;
  position: relative; /* 确保子元素可以绝对定位 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* 加深阴影 */
}

/* 用户信息样式 */
.user-info {
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  background-color: #f28b82;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  margin-right: 10px;
}

.user-details div {
  font-size: 14px;
  color: #333;
}

/* 居中公司 LOGO 样式 */
.logo {
  background-color: #d7aefb;
  padding: 16px 50px; /* 调整 padding */
  font-weight: bold;
  font-size: 24px; /* 调整字体大小 */
  border-radius: 12px; /* 更圆的角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影 */
}

/* 权益通知 */
.benefits-notice {
  background-color: #aecbfa;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 12px; /* 更圆的角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

/* 订阅选项样式 */
.subscription-options {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
  flex-grow: 1;
}

/* 服务协议样式 */
.agreement {
  text-align: center;
  margin-top: 20px;
}

.agreement label {
  font-size: 14px;
}
</style>
