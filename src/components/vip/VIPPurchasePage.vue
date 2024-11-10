<template>
  <div class="vip-purchase-page">
    <!-- 侧边栏 -->
    <Sidebar />

    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 返回按钮 -->


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
        <div class="logo">
          <img :src="logoUrl" alt="公司LOGO" class="logo-img" />
        </div>
      </header>

      <!-- 权益说明 -->
      <div class="benefits-notice">
        根据不同会员级别显示不同权益
      </div>

      <!-- 订阅选项 -->
      <div class="subscription-options">
        <SubscriptionBox
          title="1个月"
          price="￥48/月"
          benefits="免费体验学术专区服务5次、享有10次免费论文下载、购买服务折扣、专属客服权益"
        />
        <SubscriptionBox
        
          title="3个月"
          price="￥36/月"
          sum="共￥108"
          benefits="免费体验学术专区服务8次、享有30次免费论文下载、购买服务折扣、专属客服权益"
        />
        <SubscriptionBox
          title="12个月"
          price="￥17/月"
          sum="共￥208"
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
    SubscriptionBox,
  },
  data() {
    return {
      logoUrl: require('@/assets/companylogo.png'), // 引入图片路径
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
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
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 20px;
  display: flex;
  flex-direction: column;
}

/* 头部样式 */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4b084;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
.logo-img {
  width: 150px; /* 设置图片宽度，例如150px */
  height: auto; /* 让高度根据宽度自动调整，保持图片比例 */
  display: block;
  margin: 0 auto; /* 图片居中 */
}


.logo-img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* 权益通知 */
.benefits-notice {
  background-color: #aecbfa;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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