<template>
    <div class="sidebar" @mouseover="showSidebar" @mouseleave="hideSidebar" :class="{ 'visible': isVisible }">
      <div class="nav-item">登录按钮</div>
      <div class="nav-item">开启新会话按钮</div>
      <div class="nav-item">历史会话</div>
      <div class="nav-item avatar">用户个人中心</div>
      <div class="nav-item">VIP权限支付入口</div>
      <div class="nav-item">在线客服</div>
      <div class="nav-item highlight">论文生成</div>
      <div class="nav-item highlight">学术专区</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        isVisible: false // 控制侧边栏显示状态
      };
    },
    methods: {
      showSidebar() {
        this.isVisible = true; // 显示侧边栏
      },
      hideSidebar() {
        this.isVisible = false; // 隐藏侧边栏
      }
    }
  };
  </script>
  
  <style scoped>
  /* 侧边栏样式 */
  .sidebar {
    position: fixed;
    top: 50%; /* 垂直居中 */
    left: 0;
    width: 70px; /* 可视宽度 */
    height: auto; /* 自适应高度 */
    background-color: #ffffff; /* 背景色为白色 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2); /* 增加阴影效果 */
    border-right: 2px solid rgba(0, 0, 0, 0.1); /* 细边框 */
    transform: translateY(-50%); /* 确保垂直居中 */
    transition: transform 0.3s ease; /* 过渡效果 */
    opacity: 0; /* 初始隐藏 */
  }
  
  /* 显示状态 */
  .sidebar.visible {
    opacity: 1; /* 显示侧边栏 */
    transform: translateY(-50%); /* 垂直居中 */
  }
  
  /* 导航项样式 */
  .nav-item {
    width: 60px; /* 统一宽度 */
    height: 40px; /* 统一高度 */
    background-color: #ffecb3; /* 背景色 */
    margin: 10px 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px; /* 字体大小 */
    font-weight: bold;
    color: #333;
    cursor: pointer;
    border: 2px solid #007bff; /* 设置相同的边框颜色 */
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1); /* 增加立体效果 */
    transition: background-color 0.2s; /* 背景变化过渡 */
  }
  
  /* 鼠标悬停效果 */
  .nav-item:hover {
    background-color: #ffe0b2; /* 鼠标悬停时变色 */
  }
  
  /* 用户头像样式 */
  .avatar {
    width: 50px;
    height: 50px;
    background-color: #ffecb3;
    border-radius: 50%;
  }
  
  /* 特殊导航项样式 */
  .highlight {
    background-color: #ffe0b2; /* 高亮背景色 */
  }
  </style>
  