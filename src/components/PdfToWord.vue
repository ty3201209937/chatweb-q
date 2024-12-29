<template>
    <div class="pdf-to-word-converter">
      <!-- Sidebar -->
      <div class="sidebar">
        <button class="upload-button" @click="selectFile">上传PDF转Word</button>
        <div class="image-container">
          <img src="@/assets/1.png" alt="1" class="feature-icon" />
          <p class="upload-instructions">
            暂时还没有历史记录哦, 快去创建第一条吧~
          </p>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="main-content">
        <div class="upload-area">
          <div class="upload-box">
            <div class="icons-container">
              <img src="@/assets/pdf-icon.png" alt="PDF Icon" class="upload-icon pdf-icon" />
              <div class="arrow"></div> <!-- 箭头元素 -->
              <img src="@/assets/word-icon.png" alt="Word Icon" class="upload-icon word-icon" />
            </div>
            <p class="upload-title">选择拖拽PDF到此处</p>
            <p class="upload-instructions">
              1. 一次最多上传1个文件，支持PDF格式；
              2. 如果您的文档包含扫描页面或图片，也可以转换哦
            </p>
            <button @click="selectFile" class="select-file-button">选择文件</button>
          </div>
        </div>
  
        <!-- Features Section -->
        <div class="features">
          <div class="feature-item">
            <img src="@/assets/easy-icon.png" alt="Easy Operation" class="feature-icon" />
            <h3>轻松操作，即可转变</h3>
            <p>操作简单，轻松三步即可实现文档转换</p>
          </div>
          <div class="feature-item">
            <img src="@/assets/fast-icon.png" alt="Fast Conversion" class="feature-icon" />
            <h3>快速转换，一键下载</h3>
            <p>在线快速转换，高度还原文件排版，提升办公效率</p>
          </div>
          <div class="feature-item">
            <img src="@/assets/secure-icon.png" alt="Security" class="feature-icon" />
            <h3>7天删除，安全保障</h3>
            <p>上传的文件将保留7天，之后将永久从我们的服务器删除，守护您的隐私安全</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PdfToWordConverter',
    methods: {
      selectFile() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.pdf';
        fileInput.onchange = (event) => {
          const file = event.target.files[0];
          if (file && file.type === 'application/pdf') {
            this.uploadFile(file);
          } else {
            alert('请选择一个有效的PDF文件');
          }
        };
        fileInput.click();
      },
      async uploadFile(file) {
        try {
          const formData = new FormData();
          formData.append('file', file);
  
          const response = await fetch('/api/convert-pdf-to-word', {
            method: 'POST',
            body: formData,
          });
  
          if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'converted-file.docx';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          } else {
            alert('转换失败，请重试');
          }
        } catch (error) {
          console.error('转换过程中发生错误:', error);
          alert('转换过程中发生错误，请重试');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .pdf-to-word-converter {
    display: flex;
    height: 100vh;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
  }
  
  .sidebar {
    width: 250px;
    background-color: #fff;
    padding: 30px;
    border-radius: 12px 0 0 12px;
    position: relative;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  
  .upload-button {
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #f9f9f9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}
  
  .image-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .feature-icon {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
  }
  
  .main-content {
    flex-grow: 1;
    padding: 30px;
  }
  
  .upload-area {
    background-color: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
  }
  
  .upload-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border: 2px dashed #7b61ff;
    border-radius: 15px;
    background-color: #f9f9f9;
    transition: all 0.3s ease;
  }
  
  .upload-box:hover {
    border-color: #6c5ce7;
  }
  
  .icons-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .arrow {
  width: 0;
  height: 0;
  border-top: 10px solid transparent; /* 减小上边框 */
  border-bottom: 10px solid transparent; /* 减小下边框 */
  border-left: 15px solid #aaaaaa; /* 减小左边框 */
  margin: 0 10px; /* 调整间距 */
 }
  
  .upload-icon {
    width: 60px;
    height: 60px;
  }
  
  .pdf-icon {
    margin-right: 15px;
  }
  
  .word-icon {
    margin-left: 15px;
  }
  
  .upload-title {
    font-size: 20px;
    color: #333;
    margin: 20px 0;
  }
  
  .upload-instructions {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 30px;
  }
  
  .select-file-button {
    padding: 12px 30px;
    background-color: #7b61ff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .select-file-button:hover {
    background-color: #6c5ce7;
  }
  
  .features {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
  }
  
  .feature-item {
    flex: 1;
    text-align: center;
  }
  
  .feature-item img {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }
  
  .feature-item h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .feature-item p {
    font-size: 14px;
    color: #666;
  }
  
  @media (max-width: 800px) {
    .features {
      flex-direction: column;
      align-items: center;
    }
  
    .feature-item {
      margin: 20px 0;
    }
  }
  </style>
  