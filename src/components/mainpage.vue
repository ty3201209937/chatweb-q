<template>
    <div class="flex-container">
      <h1 class="centered-text">学术专区</h1>
  
      <div class="header">
        <div class="search-container">
          <input type="text" class="search-box" placeholder="今日剩余三次机会">
          <button class="search-button">搜索</button>
        </div>
      </div>
  
      <div class="box-row">
        <div class="box">
          <h2>网盘知识库</h2>
          <p>知识库内容AI对话式交互,</p>
          <p>AI生成内容自动存储导入</p>
          <a href="#" class="btn">立即体验</a>
        </div>
  
        <div class="box">
          <h2>全文献翻译</h2>
          <p>阅读效率低?英文术语多?</p>
          <p>提炼核心内容，快速获取重点</p>
          <a href="#" class="btn">立即体验</a>
        </div>
  
        <div class="box">
          <h2>文献速读&解读</h2>
          <p>阅读效率低？读完无收获？</p>
          <p>程炼核心内容，快速获取重点</p>
          <a href="#" class="btn">立即体验</a>
        </div>
      </div>
  
      <div class="box-row">
        <div class="box">
          <h2>论文润色</h2>
          <p>支持粘贴段落润色和整篇润色，</p>
          <p>提供逐句润色效果对比</p>
          <a href="#" class="btn">立即体验</a>
        </div>
  
        <div class="box">
          <h2>学术审稿</h2>
          <p>高校学术审稿，减轻工作负担，提高论文质量，</p>
          <p>客观评估，针对性建议,轻松履行审稿职责</p>
          <a href="#" class="btn">立即体验</a>
        </div>
  
        <div class="box">
          <h2>PDF转Word</h2>
          <p>知识库内容AI对话式交互，</p>
          <p>AI生成内容自动存储导入</p>
          <a href="#" class="btn">立即体验</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainPage',
    data() {
      return {
        // 可以在这里添加组件的数据属性
      };
    },
    methods: {
      // 可以在这里添加组件的方法
    }
  };
  </script>
  
  <style scoped>
  .centered-text {
    text-align: center;
    margin-top: 50px; /* 根据需要调整上边距 */
  }
  
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 100vh; /* 使用视口高度单位 */
    margin: 0; /* 移除默认的 body 边距 */
  }
  
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* 水平居中 */
    justify-content: center; /* 垂直居中 */
    width: 100%; /* 使容器占满整个宽度 */
    max-width: 1600px; /* 设置最大宽度 */
    padding: 20px;
  }
  
  .header {
    width: 80%;
    padding: 20px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    margin-bottom: 20px; /* 添加一些底部间距 */
  }
  
  .search-container {
    display: flex;
    width: 80%;
  }
  
  .search-box {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-right: none; /* Remove border from the right side */
  }
  
  .search-button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: 1px solid #007BFF;
    cursor: pointer;
    font-size: 16px;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  
  .box-row {
    display: flex;
    justify-content: center; /* 水平居中 */
    margin-bottom: 20px; /* 添加一些底部间距 */
  }
  
  .box {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 0 20px; /* 添加左右间距 */
    width: 380px; /* 每个板块的宽度 */
    text-align: center; /* 使文字居中 */
  }
  
  .btn {
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>