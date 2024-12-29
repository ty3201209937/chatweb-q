<template>
  <div class="polishing-editor">
    <header class="editor-header">
    </header>
    <div class="editor-tabs">
      <button :class="{ active: activeTab === 'paragraph' }" @click="selectTab('paragraph')">段落润色</button>
      <button :class="{ active: activeTab === 'document' }" @click="selectTab('document')">文档润色</button>
      <div class="spacer"></div> <!-- 添加一个占位符 -->
    </div>
    <div class="editor-content">
      <div class="upload-hint">
        上传文档，整篇论文润色更省时！（目前仅支持英文文档润色）
      </div>

      <!-- 替换掉原来的 textarea 部分，插入文件上传表单 -->
      <form class="form">
        <span class="form-title">上传您的文件</span>
        <p class="form-paragraph">
          文件应为图片格式文件支持txt,word,docx格式
        </p>
        <label for="file-input" class="drop-container">
          <span class="drop-title">将文件拖放到此处</span>
          或
          <input type="file" accept="image/*" required="" id="file-input">
        </label>
      </form>

      <div class="button-container">
        <button @click="onClick" :class="{ clicked: isButtonClicked }">开始润色</button>
      </div>
    </div>
    <div class="polishing-model">
      <!-- <label>
        <input type="radio" value="chat4o-mini" v-model="selectedModel" /> chat4o-mini
      </label>
      <label>
        <input type="radio" value="chat4.0" v-model="selectedModel" /> chat4.0
      </label> -->
    </div>
    <div class="report-button-container">
      <button @click="generateReport" :class="{ clicked: isReportButtonClicked }">论文润色记录</button>
    </div>
    <div class="image-container">
      <img src="@/assets/fanyi.png" class="image" />
      <div class="image-caption">暂时还没有历史记录哦，快去上传文档进行润色吧～</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'paragraph',
      content: '', // 将初始值设置为空字符串
      selectedModel: 'chat4o-mini',
      isButtonClicked: false, // 添加状态
      isReportButtonClicked: false, // 添加状态
    };
  },
  methods: {
    selectTab(tab) {
      if (tab === 'paragraph') {
        this.$router.push({ name: 'polish' });
      } else {
        this.activeTab = tab;
      }
    },
    startPolishing() {
      // 调用润色服务的逻辑
      console.log('开始润色', this.content, this.selectedModel);
      // 假设润色服务返回的结果存储在 rightContent 中
      this.rightContent = '润色后的内容';
    },
    onClick() {
      this.isButtonClicked = !this.isButtonClicked; // 切换状态
      this.startPolishing();
    },
    generateReport() {
      // 生成润色报告的逻辑
      console.log('生成润色报告');
      this.isReportButtonClicked = !this.isReportButtonClicked; // 切换状态
      // 这里可以添加生成报告的具体实现
    },
  },
};
</script>

<style scoped>
.polishing-editor {
  border: 1px solid #ddd;
  padding: 20px;
  width: 1300px;
  height: 1000px;
  margin: 0 auto;
  background-color: #f4f4f4; /* 修改背景颜色为淡灰色 */
  position: relative; /* 添加相对定位 */
}

.editor-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.upload-hint {
  margin-bottom: 30px; /* 增加底部间距以使提示语下移 */
  font-size: 15px;
  margin-top: 100px;
  color: #555;
  text-align: center;
}

.editor-tabs {
  display: flex;
  align-items: center;
}

.editor-tabs button {
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #f0f0f0b0;
  cursor: pointer;
}

.editor-tabs .active {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.842);
}

.editor-tabs .spacer {
  flex-grow: 1; /* 占据剩余空间 */
}

.editor-content {
  position: relative;
  height: 800px; /* 保持高度一致 */
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: column; /* 垂直排列 */
  justify-content: flex-start; /* 内容从顶部对齐 */
  align-items: center; /* 水平居中 */
}

.form {
  background-color: #fff;
  box-shadow: 0 10px 60px rgb(218, 229, 255);
  border: 1px solid rgb(159, 159, 160);
  border-radius: 20px;
  padding: 2rem .7rem .7rem .7rem;
  text-align: center;
  font-size: 1.125rem;
  max-width: 320px;
}

.form-title {
  color: #000000;
  font-size: 1.8rem;
  font-weight: 500;
}

.form-paragraph {
  margin-top: 10px;
  font-size: 0.9375rem;
  color: rgb(105, 105, 105);
}

.drop-container {
  background-color: #fff;
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 2.1875rem;
  border-radius: 10px;
  border: 2px dashed rgb(171, 202, 255);
  color: #444;
  cursor: pointer;
  transition: background .2s ease-in-out, border .2s ease-in-out;
}

.drop-container:hover {
  background: rgba(0, 140, 255, 0.164);
  border-color: rgba(17, 17, 17, 0.616);
}

.drop-container:hover .drop-title {
  color: #222;
}

.drop-title {
  color: #444;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color .2s ease-in-out;
}

#file-input {
  width: 350px;
  max-width: 100%;
  color: #444;
  padding: 2px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid rgba(8, 8, 8, 0.288);
}

#file-input::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #084cdf;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background .2s ease-in-out;
}

#file-input::file-selector-button:hover {
  background: #0d45a5;
}

.button-container {
  display: flex;
  justify-content: center; /* 居中对齐 */
  margin-top: 80px;
  margin-right: 20px; /* 调整右边距 */
}

.button-container button {
  background-color: rgba(173, 169, 169, 0.911); /* 初始颜色为灰色 */
  border: none;
  width: 130px; /* 按需调整宽度 */
  height: 40px; /* 按需调整高度 */
  font-size: 16px;
  padding: 10px 20px;
  transition: background-color 0.3s; /* 添加过渡效果 */
  border-radius: 10px 10px 10px 10px;
}

.button-container button.clicked {
  background-color: #42b983; /* 点击后颜色变为绿色 */
}

.report-button-container {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.report-button-container button {
  background-color: rgba(173, 169, 169, 0.911); /* 初始颜色为灰色 */
  border: none;
  width: 140px; /* 按需调整宽度 */
  height: 40px; /* 按需调整高度 */
  font-size: 16px;
  padding: 10px 20px;
  transition: background-color 0.3s; /* 添加过渡效果 */
  border-radius: 10px 10px 10px 10px;
  position: absolute;
  margin-top: -312px;
}

.image-container {
  margin-top: -100px; /* 调整图片的顶部间距 */
  text-align: center;
}
</style>