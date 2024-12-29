<template>
   <div class="query-result">
    <!-- 标题和返回按钮容器 -->
    <div class="header-container">
      <button @click="goBack" class="back-button">返回提交页</button>
      <h2 class="title">查询结果</h2>
    </div>

    <!-- 订单输入部分 --> 
    <div class="section white-bg-shadow">
      <section class="order-input-section">
        <div class="order-input">
          <label for="orderNumber">输入订单号</label>
          <div class="input-container">
            <input type="text" id="orderNumber" placeholder="请输入支付时的订单编号" v-model="orderNumber" />
            <button @click="queryOrder" class="query-button">立即查询</button>
          </div>
        </div>
      </section>
    </div>

    <!-- 订单查找步骤部分 -->
    <div class="section white-bg-shadow" v-if="selectedMethod">
      <section class="order-steps-section">
        <div class="order-steps-header">
          <h3 class="section-title">如何查找订单?</h3>
          <div class="payment-methods">
            <div @click="selectMethod('微信支付')" :class="{'active': selectedMethod === '微信支付'}" class="payment-button wechat">
               <img src="@/assets/wechat.png" alt="微信支付" class="payment-method-icon" />
               <span>微信支付</span>
            </div>
            <div @click="selectMethod('支付宝支付')" :class="{'active': selectedMethod === '支付宝支付'}" class="payment-button alipay">
               <img src="@/assets/alipay.png" alt="支付宝支付" class="payment-method-icon" />
               <span>支付宝支付</span>
            </div>
          </div>
        </div>
        <div class="order-steps" v-if="selectedMethod === '微信支付'">
          <div class="step">
            <img src="@/assets/wechat_step1.png" alt="步骤1" class="step-image" />
            <p>1. 通过聊天列表的微信支付，或钱包进入 [账单] 明细列表</p>
          </div>
          <div class="step">
            <img src="@/assets/wechat_step2.png" alt="步骤2" class="step-image" />
            <p>2. 找到小微的支付订单</p>
          </div>
          <div class="step">
            <img src="@/assets/wechat_step3.png" alt="步骤3" class="step-image" />
            <p>3. 进入订单详情页复制订单号</p>
          </div>
        </div>
        <div class="order-steps" v-if="selectedMethod === '支付宝支付'">
          <div class="step">
            <img src="@/assets/alipay_step1.png" alt="步骤1" class="step-image" />
            <p>1. 通过支付宝进入 [我的-账单] 查看明细</p>
          </div>
          <div class="step">
            <img src="@/assets/alipay_step2.png" alt="步骤2" class="step-image" />
            <p>2. 找到小微的支付订单</p>
          </div>
          <div class="step">
            <img src="@/assets/alipay_step3.png" alt="步骤3" class="step-image" />
            <p>3. 进入订单详情页复制订单号</p>
          </div>
        </div>
      </section>
    </div>

    <!-- 温馨提示部分 -->
      <section class="warning-tips-section">
        <div class="warning-tips">
          <p class="warning-title">温馨提示:</p>
          <ol>
            <li>系统保留7天以内的订单，超过7天则被删除，确保您的论文不会被覆盖和盗窃，完成后请尽快下载！请慎重记录并保管好您的订单号以便日后查询，离开此页则不再显示</li>
            <li>付款后订单在10-30分钟内完成，请耐心等候。</li>
          </ol>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'OrderQueryComponent',
  data() {
    return {
      orderNumber: '',
      selectedMethod: '微信支付',
      paymentMethods: ['微信支付', '支付宝支付']
    };
  },
  methods: {
    queryOrder() {
      console.log('查询订单：', this.orderNumber);
    },
    selectMethod(method) {
      this.selectedMethod = method;
    },
    goBack() {
      this.$router.push({ name: 'PaperGenerator' });
    }
  }
};
</script>

<style scoped>
.white-bg-shadow {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  width: 100%; /* 确保容器宽度占满父容器 */
  max-width: 1200px; /* 设置最大宽度，可以根据需要调整 */
}

.query-result {
  display: flex;
  flex-direction: column;
  align-items: center; /* 使子元素在垂直方向上居中 */
  justify-content: center; /* 使子元素在水平方向上居中 */
  padding: 40px; /* 根据需要调整内边距 */
  min-height: 100vh; /* 使容器至少占满视口高度 */
  background-color: #f4f4f9; /* 背景颜色 */
  border-radius: 15px; /* 背景圆角 */
  margin: 0; /* 移除外边距 */
}

.header-container {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  margin-bottom: 100px; /* 添加底部外边距 */
}

.back-button::before {
  content: '<'; /* 添加箭头符号 */
  margin-right: 5px; /* 与文本保持一定距离 */
}

.back-button {
  font-size: 1.4vw;
  color: #444545; /* 按钮文本颜色 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
  background: none; /* 无背景 */
  border: none; /* 无边框 */
  padding: 0; /* 无内边距 */
  margin-right: 1100px; /* 与标题保持一定距离 */
}

.title {
  font-size: 24px; /* 根据实际需要调整字体大小 */
  color: #333; /* 深灰色字体 */
  font-weight: bold;
  text-align: center; /* 文本居中 */
  margin: 0; /* 重置外边距 */
  position: absolute; /* 绝对定位 */
  left: 50%; /* 横向居中 */
  transform: translateX(-50%); /* 向左移动自身宽度的50%以居中 */
  padding: 5px; /* 为标题文本添加内边距，确保与伪元素背景的间隔 */
}
.order-input-section {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  margin: 20px 0; /* 添加上下外边距 */
}

.order-input {
  display: flex;
  align-items: center; /* 确保内部元素垂直居中 */
}

.order-input label {
  flex: 0 0 140px;
  font-size: 18px;
  color: #333;
}

.input-container {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-content: center; /* 水平居中对齐 */
}

input[type="text"] {
  font-size: 1.4vw;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-right: 10px;
  outline: none;
  transition: all 0.3s ease;
}

input[type="text"]:focus {
  border-color: #5d9bff;
}

.query-button {
  font-size: 1.4vw;
  padding: 10px 20px;
  border: none;
  background-color: #0073e6;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-block; /* 确保按钮在水平方向上排列 */
  text-align: center; /* 确保按钮文本横向居中 */
  white-space: nowrap; /* 防止文本换行 */
  vertical-align: middle; /* 可选，用于垂直居中对齐 */
}

.query-button:hover {
  background-color: #005bb5;
}

.payment-methods {
  display: flex;
  align-items: center;
}

.payment-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 16px;
  margin: 0 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.payment-button:hover {
  background-color: #f0f0f0;
}

.payment-button img {
  width: 25px;
  height: 25px;
  margin-right: 8px;
}

.payment-button.wechat.active {
  color: #1AAD19;
  border-bottom: 2px solid #1AAD19;
}

.payment-button.alipay.active {
  color: #0073EA;
  border-bottom: 2px solid #0073EA;
}

.order-steps-header {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-right: 700px;
}

.order-steps {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-bottom: 20px;
  text-align: center;
}

.step-image {
  max-width: 120px;
  height: auto;
  margin-bottom: 10px;
}

.warning-tips {
  font-size: 16px;
  color: #555;
  margin-top: 20px;
}

.warning-title {
  font-size: 20px;
  font-weight: bold;
  color: #e60000;
  margin-bottom: 15px;
}

.warning-tips ol {
  padding-left: 20px;
}

.warning-tips li {
  margin-bottom: 8px;
}

@media (max-width: 600px) {
  .title {
    font-size: 6vw;
  }

  .order-input label {
    flex: 0 0 100px;
  }

  .input-container {
    flex-direction: column;
    align-items: stretch;
  }

  input[type="text"], .query-button {
    width: 100%;
    font-size: 4vw;
    margin-bottom: 15px;
  }

  .payment-methods {
    flex-direction: column;
  }

  .order-steps {
    flex-direction: column;
    align-items: center;
  }

  .step {
    width: 100%;
    margin-bottom: 20px;
  }

  .step-image {
    max-width: 80%;
  }
}
</style>