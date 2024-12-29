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
        <!-- <a href="#" class="btn">立即体验</a> -->
        <button class="btn wider-btn" @click="navigatetozhishiku">立即体验</button> <!-- 修改为按钮并绑定点击事件 -->
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
        <button class="btn wider-btn" @click="navigateToPolish">立即体验</button> <!-- 修改为按钮并绑定点击事件 -->
      </div>
      
      <div class="box">
        <h2>PDF转Word</h2>
        <p>知识库内容AI对话式交互，</p>
        <p>AI生成内容自动存储导入</p>
        <!-- <a href="#" class="btn">立即体验</a> -->
        <button class="btn wider-btn" @click="navigateToPdfToWord">立即体验</button> <!-- 修改为按钮并绑定点击事件 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainpage',
  data() {
    return {
      // 可以在这里添加组件的数据属性
    };
  },
  methods: {
    navigateToPolish() {
      this.$router.push({ name: 'polish' });
    },
    navigatetozhishiku() {
      this.$router.push({ name: 'zhishiku' });
    },
    navigateToPdfToWord() {
      this.$router.push({ name: 'PdfToWord' });
    }
  }
};
</script>

<style scoped>
.centered-text {
  text-align: center;
  margin-top: 60px; /* 增加上边距 */
  font-size: 2em; /* 增加字体大小 */
}

body {
  font-family: Arial, sans-serif;
  padding: 30px; /* 增加内边距 */
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
  max-width: 1800px; /* 增加最大宽度 */
  padding: 30px; /* 增加内边距 */
  box-sizing: border-box; /* 确保 padding 不影响宽度 */
}

.header {
  width: 70%; /* 增加宽度 */
  padding: 30px; /* 增加内边距 */
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  margin-bottom: 30px; /* 增加底部间距 */
}

.search-container {
  display: flex;
  width: 100%;
  max-width: 700px; /* 增加最大宽度 */
}

.search-box {
  flex: 1;
  padding: 15px; /* 增加内边距 */
  font-size: 18px; /* 增加字体大小 */
  border: 1px solid #ccc;
  border-right: none; /* Remove border from the right side */
}

.search-button {
  padding: 15px 25px; /* 增加内边距 */
  background-color: #007BFF;
  color: white;
  border: 1px solid #007BFF;
  cursor: pointer;
  font-size: 18px; /* 增加字体大小 */
}

.search-button:hover {
  background-color: #0056b3;
}

.box-row {
  display: flex;
  justify-content: center; /* 水平居中 */
  flex-wrap: wrap; /* 允许换行 */
  margin-bottom: 30px; /* 增加底部间距 */
}

.box {
  border: 1px solid #ccc;
  padding: 30px; /* 增加内边距 */
  margin: 0 20px 30px; /* 增加上下间距 */
  width: calc(33.333% - 40px); /* 增加宽度 */
  min-width: 400px; /* 增加最小宽度 */
  text-align: center; /* 使文字居中 */
  box-sizing: border-box; /* 确保 padding 不影响宽度 */
}

.btn {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 15px 30px; /* 增加内边距 */
  text-decoration: none;
  border-radius: 5px;
  margin-top: 15px; /* 增加顶部间距 */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* 添加鼠标指针样式 */
}

.btn:hover {
  background-color: #0056b3;
}

/* 增加按钮宽度 */
.wider-btn {
  padding: 15px 137px; /* 增加内边距 */
}

/* 响应式设计 */
@media (max-width: 900px) {
  .box {
    width: calc(50% - 40px); /* 在较小屏幕上每个板块占据一半宽度 */
  }
}

@media (max-width: 600px) {
  .box {
    width: 100%; /* 在非常小的屏幕上每个板块占据全宽 */
  }
}
</style>