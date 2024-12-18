<template>
    <div class="subscription-box">
      <h3 class="title">{{ title }}</h3>
      <p class="price">{{ price }}</p>
      <p class="benefits-title">VIP用户专属权益</p>
      <ul class="benefits-list">
        <li v-for="(benefit, index) in parsedBenefits" :key="index">{{ benefit }}</li>
      </ul>
      <button class="buy-button">购买</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SubscriptionBox',
    props: {
      title: String,
      price: String,
      benefits: String,
    },
    computed: {
      parsedBenefits() {
        return this.benefits.split('、');
      }
    }
  };
  </script>
  
  <style scoped>
  .subscription-box {
    background-color: #ffffff;
    padding: 30px 20px;
    width: 100%; /* 占满父容器宽度 */
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .subscription-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  .title {
    font-size: 20px;
    color: #333;
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  .price {
    font-size: 18px;
    color: #007bff;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .benefits-title {
    font-size: 15px;
    font-weight: bold;
    color: #555;
    margin-bottom: 15px;
  }
  
  .benefits-list {
    list-style: none;
    padding: 15px;
    margin: 0 0 25px;
    font-size: 14px;
    color: #666;
    background-color: #f7f9fa;
    border-radius: 8px;
    width: 100%; /* 宽度充满父容器 */
    box-sizing: border-box;
  }
  
  .benefits-list li {
    margin-bottom: 8px;
    text-align: left; /* 列表项左对齐 */
  }
  
  .buy-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    width: 100%; /* 按钮宽度充满 */
    max-width: 200px;
  }
  
  .buy-button:hover {
    background-color: #0056b3;
  }
  </style>
  