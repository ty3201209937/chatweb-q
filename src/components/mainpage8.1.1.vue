<template>
  <div class="container">
    <div class="header">
      <button @click="goBack">返回学术专区</button>
      <div class="space-info box large-fonta" align="center">网盘知识库</div>
      <span>网盘空间</span>
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <span class="storage-info">{{ usedSpace }}G/{{ totalSpace }}G</span>
      <div class="storage-actions">
        <a href="#" @click.prevent="expandStorage">容量扩充</a>
        <a href="#" @click.prevent="manageStorage">存储管理</a>
      </div>
    </div>
    <div class="search-container">
      <button class="button button-primary" @click="uploadFile">上传</button>
      <button class="button-secondary black-text" @click="createFolder">新建文件夹+</button>
      <img src="src\assets\tp1.png" class="OIP-item" />
      <span class="blue-text large-font">分享管理</span>
      <button class="dropbtn" @click="toggleDropdown">
        全部文件 <i class="fas fa-chevron-down"></i>
      </button>
      <img src="src\assets\tp1.png" class="OIP-itema" />
      <span class="search-icon"> 知识库搜索 </span>
      <span class="search-icon"> | </span>
      <input type="text" class="search-input" placeholder="输入关键词搜索文档..." v-model="searchQuery" @keyup.enter="searchFiles" />
      <button class="search-button" @click="searchFiles">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  
      <h2>全部文件</h2>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" />文件名</th>
            <th class="black-text">来源</th>
            <th class="black-text">大小
              <img src="src\assets\tp1.png" class="OIP-itemn" />
            </th>
            <th class="black-text">创建时间
              <img src="src\assets\tp1.png" class="OIP-itemn" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="files.length === 0">
            <td colspan="5" class="empty-folder">当前文件夹为空
              <img src="src\assets\tp1.png" class="OIP-item1" />
            </td>
          </tr>
          <tr v-for="file in files" :key="file.id">
            <td><input type="checkbox" />{{ file.name }}</td>
            <td>{{ file.source }}</td>
            <td>{{ file.size }}</td>
            <td>{{ file.createdTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      usedSpace: 0,
      totalSpace: 5,
      searchQuery: '',
      files: [],
      dropdownOpen: false,
    };
  },
  methods: {
    goBack() {
      // 处理返回学术专区的逻辑
    },
    expandStorage() {
      // 处理容量扩充的逻辑
    },
    manageStorage() {
      // 处理存储管理的逻辑
    },
    uploadFile() {
      // 处理文件上传的逻辑
    },
    createFolder() {
      // 处理新建文件夹的逻辑
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    searchFiles() {
      // 处理文件搜索的逻辑
    },
  },
};
</script>

<style scoped>
/* 将原来的 CSS 样式复制到这里 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  width: 90%;
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 10px 0px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: border 0.3s ease;
}

.header button {
  padding: 10px 20px;
  margin-left: 10px;
}

.file-list {
  margin-top: 20px;
  color: black;
  height: 20px;
}

.file-list th, .file-list td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.empty-folder {
  text-align: center;
  color: #999999;
  margin-top: 20px;
}

.button-primary {
  background-color: #007bff;
  color: white;
  padding: 10px 40px;
}

.button-primary:hover {
  background-color: #0056b3;
}

.button-secondary {
  background-color: white;
  color: white;
  padding: 10px 20px;
}

.black-text {
  color: black;
  margin-left: 23px;
}

.OIP-item {
  width: 50px;
  height: 43px;
  margin-bottom: -13px;
  margin-left: 15px;
}

.OIP-items {
  width: 40px;
  height: 40px;
  margin-bottom: -13px;
  margin-left: 10px;
}

.OIP-itemn {
  width: 22px;
  height: 23px;
  margin-top: -2px;
  margin-left: 2px;
}

.OIP-itema {
  width: 30px;
  height: 30px;
  margin-bottom: -4px;
  margin-left: 110px;
}

.button-secondary:hover {
  background-color: white;
  margin-left: 25px;
}

#colored-border-button {
  border: 2px solid #ff0000;
  background-color: white;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: border 0.3s ease;
}

#colored-border-button:hover {
  border: 2px solid #0056b3;
}

.search-box {
  margin-left: 930px;
  padding: 20px 20px;
}

.file-list {
  margin-top: 20px;
  color: black;
  width: 100%;
}

.file-list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.file-list li:last-child {
  margin-left: 10px;
  border-bottom: none;
}

.toolbar select {
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.progress-container {
  width: 20%;
  background-color: #e0e0e0;
  border-radius: 90px;
  height: 20px;
  overflow: hidden;
}

.progress-bar {
  width: 0%;
  height: 100%;
  background-color: #4CAF50;
  border-radius: 5px;
  text-align: center;
  line-height: 20px;
  color: white;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.empty-folder {
  color: #888;
  text-align: center;
  padding: 210px 0px;
}

.black-text {
  color: black;
}

.search-input {
  width: 25%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.search-button {
  width: 5%;
  padding: 8px;
}

.box {
  margin-bottom: 8px;
  padding: 10px 215px;
}

.storage-actions {
  margin-top: 0;
}

.storage-actions a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}

.storage-info {
  font-size: 16px;
  margin-right: 10px;
}

.large-font {
  font-size: 30px;
  color: blue;
}

.large-fonta {
  font-size: 30px;
}

.dropbtn {
  background-color: aliceblue;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 20px;
  width: 365px;
  height: 20px;
}

.search-icon {
  margin-right: 5px;
}

.search-input {
  border: none;
  outline: none;
  flex-grow: 1;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
}

.OIP-itema {
  width: 30px;
  height: 30px;
  margin-bottom: -4px;
  margin-left: 130px;
}

.OIP-item1 {
  width: 130px;
  height: 108px;
  margin-bottom: 14px;
  margin-left: 13px;
  margin-left: -120px;
}
</style>