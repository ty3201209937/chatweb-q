<template>
  <div class="container">
    <div class="left-panel">
      <h2>毕业论文 专业版</h2>
      <p>提示编辑区：</p>
      <p>Tab 切换为子级提纲，Shift Tab 切换回父级提纲</p>
      <textarea placeholder="提纲的范围：20~1000字"></textarea>
    </div>

    <div class="right-panel">
      <h1>论文生成页面</h1>
      <div class="top-notice">
        你只负责选择类型，写论文的这100小时，小微来帮你节省
      </div>

      <div class="dropdown-input-section">
        <button class="dropdown-button" ref="dropdownButton" @click="toggleDropdown">
          {{ selectedPaperType || '选择论文类型' }}
        </button>
        <input
          type="text"
          class="paper-title-input"
          v-model="title"
          placeholder="输入论文标题"
        />
        <ul v-if="dropdownVisible" class="dropdown-menu" :style="dropdownMenuStyle">
          <li
            v-for="type in paperTypes"
            :key="type"
            @click="selectPaperType(type)"
          >
            {{ type }}
          </li>
        </ul>
      </div>

      <div class="option-section">
        <label>选择学历：</label>
        <label><input type="radio" value="大专" v-model="education" /> 大专</label>
        <label><input type="radio" value="本科" v-model="education" /> 本科</label>
        <label><input type="radio" value="硕士" v-model="education" /> 硕士</label>
      </div>

      <div class="option-section">
        <label>选择字数：</label>
        <label><input type="radio" value="8000" v-model="wordCount" /> 8000字左右</label>
        <label><input type="radio" value="12000" v-model="wordCount" /> 12000字左右</label>
        <label><input type="radio" value="15000" v-model="wordCount" /> 15000字左右</label>
        <label><input type="radio" value="20000" v-model="wordCount" /> 20000字左右</label>
      </div>

      <div class="button-section">
        <button @click="generatePaper" class="generate-button" :disabled="!isConfirmed">
          立即生成
        </button>
        <button @click="queryResults" class="query-button">查询结果</button>
      </div>

      <div class="info-section">
        <label>
          <input type="checkbox" v-model="isConfirmed" />
          我已阅读并同意：生成的论文范文仅用于参考，不作为毕业、发表使用
        </label>
      </div>

      <div class="progress-section">
        <p>生成进度：{{ progress }}%</p>
        <progress :value="progress" max="100"></progress>
      </div>

      <div class="message">{{ message }}</div>

      <div class="faq-section">
        <p>生成的毕业论文质量怎么样？会不会有胡说八道的情况</p>
        <p>有没有示例毕业论文</p>
        <p>付费后怎么接收毕业论文？</p>
        <p>毕业论文要加载多久才可以出来？</p>
        <p>如何找到到自己前生成的文件？</p>
        <p>是否支持开发票？</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownVisible: false,
      paperTypes: [
        "SCI论文-英文",
        "SCI论文-高端版",
        "论文查重",
        "文献翻译",
        "新闻稿",
        "专利申请",
        "读后感",
      ],
      selectedPaperType: null,
      title: "",
      education: "",
      wordCount: "",
      isConfirmed: false,
      progress: 0,
      message: "",
      dropdownMenuStyle: {
        top: "0px",
        left: "0px",
      },
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
      if (this.dropdownVisible) {
        this.positionDropdown();
      }
    },
    positionDropdown() {
  const dropdownButton = this.$refs.dropdownButton;
  const rect = dropdownButton.getBoundingClientRect();
  this.dropdownMenuStyle = {
    top: `${rect.bottom + window.scrollY}px`, // Positioning dropdown below the button
    left: `${rect.left + window.scrollX}px`, // Align with button's left edge
    width: `${rect.width}px`, // Make dropdown width same as button's width
  };
}
,
    selectPaperType(type) {
      this.selectedPaperType = type;
      this.dropdownVisible = false;
    },
    generatePaper() {
      if (this.selectedPaperType && this.education && this.wordCount) {
        this.message = "正在生成论文，请稍候...";
        this.progress = 0;
        const interval = setInterval(() => {
          if (this.progress < 100) {
            this.progress += 10;
          } else {
            clearInterval(interval);
            this.message = "论文生成完成！";
          }
        }, 300);
      } else {
        this.message = "请填写所有信息";
      }
    },
    queryResults() {
      this.message = "查询结果功能待实现";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.left-panel {
  width: 20%;
  padding: 20px;
  background-color: #e6f7ff;
  border-radius: 10px;
  text-align: left;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
}

.right-panel {
  width: 65%;
  margin-left: 35%;
  text-align: center;
  /* padding-bottom: 80px; */
}

.dropdown-input-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.dropdown-button {
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #6a0dad;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s;
}

.dropdown-button:hover {
  background-color: #550c99;
}

.paper-title-input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.dropdown-menu {
  position: absolute;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: auto; 
}


.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dropdown-menu li:hover {
  background-color: #6a0dad;
  color: white;
}

.paper-generator {
  max-width: 800px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  text-align: center;
}
.input-section, 


.generate-button {
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  background: blue;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  transform: translateX(-60px);
}


.faq-section {
  position: absolute;
  bottom: 20px; /* Position at the bottom */
  left: 41%; /* Align with the right panel */
  width: 65%; /* Make it the same width as the right panel */
  background-color: orange;
  padding: 10px 15px;
  text-align: left;
  font-size: 12px;
  max-width: 800px; /* Limit the width */
  border-radius: 8px;
  border: 3px solid #333; /* Added border with 3px thickness and dark color */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.faq-section p {
  margin: 5px 0;
}


.query-button {
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  background: rgb(255, 187, 0);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  transform: translateX(60px);
}
.input-section input {
  width: 80%;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.button-section {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.message {
  margin-top: 20px;
  font-size: 16px;
  color: #333;
}

.option-section {
  display: flex;  /* 使用 flexbox 来水平排列label */
  align-items: center;  /* 垂直居中对齐 */
  margin-bottom: 70px;
}

.option-section label {
  margin-right: 15px;  /* 设置每个标签之间的右边距 */
  font-size: 20px;  /* 设置标签字体大小 */
}

.option-section label:first-child {
  margin-left: 0; 
}

.option-section label input {
  margin-right: 10px; 
}

.info-section{
  margin-top: 50px;
}
textarea {
  width: 90%;  /* 设置为固定宽度 */
  height: 700px;  /* 设置固定高度 */
  resize: none;  /* 禁止调整大小 */
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

</style>
