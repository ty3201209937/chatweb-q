<template>
  <div class="polishing-editor">
    <header class="editor-header">
    </header>
    <div class="editor-t"></div>
    <div class="editor-tabs">
      <button :class="{ active: activeTab === 'paragraph' }" @click="selectTab('paragraph')">段落润色</button>
      <button :class="{ active: activeTab === 'document' }" @click="selectTab('document')">文档润色</button>
      <div class="spacer"></div> <!-- 添加一个占位符 -->
      <button @click="generateReport" :class="{ clicked: isReportButtonClicked }">润色报告</button>
    </div>
    <div class="editor-content">
      <div class="textarea-container">
        <textarea v-model="leftContent" placeholder="在此处粘贴您想要润色的内容" maxlength="700"></textarea>
        <textarea v-model="rightContent" placeholder="润色后的内容将显示在这里" maxlength="700" readonly></textarea>
        <div class="character-count">{{ leftContent.length }}/700</div>
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
    <div class="button-container">
      <button @click="onClick" :class="{ clicked: isButtonClicked }">开始润色</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'paragraph',
      leftContent: '',
      rightContent: '',
      selectedModel: 'chat4o-mini',
      isButtonClicked: false, // 添加状态
      isReportButtonClicked: false, // 添加状态
    };
  },
  methods: {
    selectTab(tab) {
      if (tab === 'document') {
        this.$router.push({ name: 'DocumentationPage' });
      } else {
        this.activeTab = tab;
      }
    },
    startPolishing() {
      // 调用润色服务的逻辑
      console.log('开始润色', this.leftContent, this.selectedModel);
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
}

.editor-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
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
}

.textarea-container {
  position: relative;
  display: flex;
  align-items: center;
}

.textarea-container textarea {
  width: calc(50% - 15px); /* 每个 textarea 占据一半宽度 */
  height: 800px;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  resize: none; /* 禁止调整大小 */
}

.textarea-container textarea:first-child {
  margin-right: 10px; /* 在两个 textarea 之间添加间距 */
}

.character-count {
  position: absolute;
  right: 24px;
  bottom: 10px;
  z-index: 2;
  top: 810px;
}

.polishing-model {
  margin: 20px 0;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
  margin-right: 800px;
}

.button-container button {
  background-color: rgba(173, 169, 169, 0.911); /* 初始颜色为灰色 */
  border: none;
  width: 150px; /* 按需调整宽度 */
  height: 50px; /* 按需调整高度 */
  font-size: 16px;
  padding: 10px 20px;
  transition: background-color 0.3s; /* 添加过渡效果 */
}

.button-container button.clicked {
  background-color: #42b983; /* 点击后颜色变为绿色 */
}

.editor-tabs button.clicked {
  background-color: #42b983; /* 点击后颜色变为绿色 */
  color: white; /* 文字颜色变为白色 */
}
</style>