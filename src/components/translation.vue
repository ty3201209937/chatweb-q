<template>
  <div class="container">
    <div class="header">
      <h1>翻译服务界面</h1>
    </div>
    <div class="description">
      <button class="button" @click="mainpage">返回学术专区</button>
      <div class="cishu">今日剩余翻译次数：10次</div>
      <button class="button1" @click="VIP">开通VIP会员</button>
    </div>
    <div class="content">
      <div class="flex-upload-area">
        <input
          type="file"
          ref="fileInput"
          style="display: none"
          multiple
          accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          @change="handleFileUpload"
        />
        <button class="scwj" @click="triggerFileInput">上传文件</button>
        <button class="tyyl" @click="handlePreview">体验预览</button>
      </div>

      <!-- 文件内容预览 -->
      <div v-if="currentFileIndex !== null" class="content-preview">
        <div v-if="currentFile.type === 'application/pdf'" class="pdf-preview">
          <iframe :src="currentFile.pdfUrl" width="100%" height="500px"></iframe>
        </div>
        <div v-else-if="currentFile.type === 'application/msword' || currentFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'" class="word-preview">
          <iframe :src="currentFile.wordUrl" width="100%" height="500px"></iframe>
        </div>
        <div v-else>
          <p>{{ currentFile.content }}</p>
        </div>
      </div>

      <div class="wenzi">
        支持格式：pdf(支持扫描文件) word 支持语言：中、英互译 支持大小：15MB 、500页以内
      </div>

      <div v-for="(file, index) in files" :key="index" class="file-item">
        <span :class="['file-icon', file.type]"></span>
        <span>{{ file.name }}</span>
        <span>{{ fileTypeDisplay(file.type) }}</span> <!-- 使用计算属性显示文件类型 -->
        <span>{{ file.translationTime }}</span>
        <span>{{ file.size }}</span>
        <span>{{ file.progress }}%</span>
        <button @click="downloadFile(index)">下载文件</button>
        <button v-if="file.type === 'free'" @click="freeTrial(index)">免费体验</button>
        <button @click="setCurrentFile(index)">预览</button>
      </div>

      <div class="features">
        <h2>服务特点</h2>
        <ul>
          <li>领先大模型：革新学术翻译</li>
          <li>语境适应：理解复杂文本</li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <p>用户上传文件后生成翻译文档，翻译完成后允许下载文件进行查看翻译后的文档</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TranslationService',
  data() {
    return {
      contentGenerated: false,
      content: '',
      currentFileIndex: null,
      files: []
    };
  },
  computed: {
    currentFile() {
      if (this.currentFileIndex !== null && this.files.length > this.currentFileIndex) {
        return this.files[this.currentFileIndex];
      }
      return null;
    },
    fileTypeDisplay() {
      return (type) => {
        switch (type) {
          case 'application/pdf':
            return 'PDF';
          case 'application/msword':
          case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            return 'Word';
          default:
            return '未知';
        }
      };
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const files = event.target.files;
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          console.log('文件类型:', file.type);

          const fileExtension = file.name.split('.').pop().toLowerCase();

          // 更新文件信息
          const newFile = {
            name: file.name,
            translationTime: '2024-12-21',
            size: `${(file.size / 1024).toFixed(2)} KB`, // 显示文件大小为 KB
            progress: 100, // 假设上传后文件翻译进度为100%
            type: file.type,
          };

          // 根据文件类型处理
          if (file.type === 'application/pdf') {
            newFile.pdfUrl = URL.createObjectURL(file); // 生成 PDF 预览 URL
          } else if (file.type === 'application/msword' || fileExtension === 'docx') {
            newFile.wordUrl = `https://docs.google.com/gview?url=${encodeURIComponent(URL.createObjectURL(file))}&embedded=true`; // 使用 Google Docs 在线查看 Word 文件
          } else {
            newFile.content = '无法预览该文件类型';
          }

          this.files.push(newFile);
        }
        this.currentFileIndex = this.files.length - 1; // 设置当前文件为最新上传的文件
        this.generateContent();
      }
    },
    handlePreview() {
      const newFile = {
        name: '文档2',
        translationTime: '2024-12-21',
        size: '2KB',
        progress: 100,
        type: 'free',
        content: '这是体验预览的内容示例'
      };
      this.files.push(newFile);
      this.currentFileIndex = this.files.length - 1; // 设置当前文件为体验预览的文件
      this.generateContent();
    },
    mainpage() {
      this.$router.push('/mainpage');
    },
    VIP() {
      this.$router.push('/vip-purchase');
    },
    downloadFile(index) {
      const file = this.files[index];
      // 假设生成下载文件的 URL
      const downloadUrl = this.generateDownloadUrl(file);
      window.location.href = downloadUrl;
    },
    freeTrial(index) {
      const file = this.files[index];
      console.log('Free trial for file:', file);
    },
    generateContent() {
      this.contentGenerated = true;
      console.log('Content generated...');
    },
    generateDownloadUrl(file) {
      // 模拟生成下载链接，如果文件已经完成转换，提供下载链接
      if (file.type === 'application/pdf') {
        // 生成 PDF 下载链接
        return `https://example.com/download/pdf/${file.name}`;
      } else if (file.type === 'application/msword' || file.name.endsWith('.docx')) {
        // 生成 Word 下载链接
        return `https://example.com/download/word/${file.name}`;
      }
      return '';
    },
    setCurrentFile(index) {
      this.currentFileIndex = index; // 设置当前文件为指定索引的文件
    }
  }
}
</script>

<style scoped>
.file-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.file-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.paid {
  background-color: blue;
}

.free {
  background-color: red;
}

body {
  font-family: Arial, sans-serif;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.header, .footer {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}

.content {
  margin: 20px 0;
  width: 80vw;
}

.description {
  display: flex; /* 使用Flexbox布局 */
  justify-content: space-between; /* 两端对齐 */
  align-items: center; /* 垂直居中 */
}

.button, .button1 {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  background: linear-gradient(136deg, #fff0d4 0%, #ffca74 100%);
  color: #662e00;
  text-align: center;
  cursor: pointer;
  border: #fefffe;
  border-radius: 10px;
}

.scwj, .tyyl {
  display: inline-block;
  padding: 4vh 4vw;
  margin: 10px;
  background: linear-gradient(136deg, #fff0d4 0%, #ffca74 100%);
  color: #662e00;
  text-align: center;
  cursor: pointer;
  border: #fefffe;
  border-radius: 10px;
}

.flex-upload-area {
  display: flex;
  justify-content: space-between;
  border: 2px dashed #ccc;
  padding: 135px;
  text-align: center;
  margin-top: 55px;
}

.features {
  margin-top: 20px;
}

.wenzi {
  margin-top: -88px;
  text-align: center;
  margin-bottom: 85px;
  font-size: 20px;
  position: fixed;
  margin-left: 10%;
}

.content-preview {
  margin-top: 20px;
}

.pdf-preview, .word-preview {
  margin: 20px 0;
}

.cishu {
  margin-left: 56%;
}
</style>