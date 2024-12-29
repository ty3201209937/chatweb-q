<template>
  <div class="container">
    <div class="header">
      <h1 class="blue-text">知识库</h1>
      <p>构建、探索、分享智慧</p>
    </div>
    <!-- 添加返回按钮到左上角 -->
    <button class="back-button" @click="goBack">返回学术专区</button>
    <!-- 添加 content-container 包围要框起来的内容 -->
    <div class="content-container">
      <div class="empty-notice" v-if="isEmpty">
        <p>你的知识网盘是空的,你可以尝试搜索</p>
      </div>
      <div class="search-bar">
        <input type="text" class="search-input" placeholder="搜索相关文献" v-model="searchQuery" @keyup.enter="searchFiles" />
        <button class="search-button" @click="searchFiles">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <div class="box-row">或</div>
      <div class="upload-section">
        <!-- 添加隐藏的文件输入元素 -->
        <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none;">
        <button class="button button-primary" @click="triggerFileInput">上传</button>
        <button class="button button-secondary black-text" @click="createFolder">新建文件夹+</button>
      </div>
    </div>
    <div class="features">
      <FeatureItem 
        v-for="(feature, index) in features"
        :key="index"
        :title="feature.title"
        :description="feature.description"
      />
    </div>
  </div>
</template>

<script>
import FeatureItem from './FeatureItem.vue';

export default {
  components: {
    FeatureItem
  },
  data() {
    return {
      searchQuery: '',
      isEmpty: true, // 假设初始状态为空
      features: [
        { title: '无限创造', description: '创建自己个性特色知识库，构建无限文件夹管理知识库内容，方便你根据不同需求进行分类和组织。' },
        { title: '多源内容', description: '不论是历史对话、生成图片、上传文件，或者外部链接,ChatAl都支持将他们融合进知识库，打造知识网络。' },
        { title: '向知识库提问', description: '你可对知识库内容进行提问，ChatAI将基于该知识库为你提供迅速、而准确的回答。' },
        { title: '分享与合作', description: 'ChatAl支持知识库的分享和合作,与团队成员、同事或朋友共享你的知识，一同打造更加丰富的知识网络。' }
      ]
    };
  },
 methods: {
  searchFiles() {
    console.log('Searching for:', this.searchQuery);
    // 在这里添加实际的搜索逻辑
  },
  uploadFile(file) {
    console.log('Uploading file:', file);
    // 在这里添加实际的上传逻辑
  },
  createFolder() {
    this.$router.push('/mainpage8.1.1');
    // 在这里添加实际的创建文件夹逻辑
  },
  triggerFileInput() {
    this.$refs.fileInput.click();
  },
  handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      // 处理文件上传逻辑
      console.log('Selected file:', file);
      // 调用 uploadFile 方法并传递文件
      this.uploadFile(file);
    }
  },
  goBack() {
    // 实现返回逻辑，例如返回上一页或跳转到指定路由
    this.$router.push('/mainpage');
  }
}
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  height: 100vh; /* 设置body高度为视口高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%; /* 增加容器宽度 */
  max-width: 1400px; /* 设置最大宽度 */
  height: 100%; /* 增加容器高度 */
  margin: 0 auto;
  background: #fff;
  padding: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative; /* 添加相对定位 */
}

.back-button {
  position: absolute; /* 绝对定位 */
  top: 20px; /* 距离顶部20px */
  left: 20px; /* 距离左边20px */
  padding: 10px 20px; /* 调整按钮大小 */
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border-radius: 5px; /* 圆角 */
}

.back-button:hover {
  background-color: #0056b3;
}

.content-container {
  border: 2px solid black; /* 设置边框颜色和宽度 */
  padding: 20px; /* 设置内边距 */
  border-radius: 5px; /* 设置边框圆角 */
  margin-bottom: 20px; /* 设置底部外边距 */
  width: 60%; /* 设置宽度为100% */
  background-color: #fff; /* 设置背景颜色 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    height: 10px;
    margin-left: 30px;
  }

.search-bar input[type="text"] {
  flex: 1;
  padding: 0px;
}

.search-bar button {
  padding: 6px 9px;
  border-radius: 10px;
}
.search-input {
    width: 25%;
    padding: 10px;
    border: 1px solid black;
    border-radius: 3px;
  }

  .search-input {
    border: none;
    outline: none;
    flex-grow: 1;
  }  

.upload-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%; /* 设置宽度为100% */
}

.empty-notice {
  text-align: center;
  margin-bottom: 20px;
  size: 20px;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%; /* 设置宽度为100% */
  flex-wrap: wrap; /* 允许换行 */
}

.feature {
  flex: 1 1 20%; /* 每个feature占据45%宽度，允许换行 */
  margin: 0 10px;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.blue-text {
  color: blue;
}

.button {
  padding: 10px 20px; /* 调整按钮大小 */
  border: none;
  cursor: pointer;
  border-radius: 5px; /* 圆角 */
}

.button-primary {
  background-color: #007bff;
  color: white;
}

.button-primary:hover {
  background-color: #0056b3;
}

.button-secondary {
  background-color: white;
  border: 1px solid black;
  color: #007bff;
}

.button-secondary:hover {
  background-color: #f0f0f0;
}

.black-text {
  color: black;
  margin-left: 30px;
  font-size: 15px;
}
.box-row {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
flex:1;
color: blue;
}

</style>