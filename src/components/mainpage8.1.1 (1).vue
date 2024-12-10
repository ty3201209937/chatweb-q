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
        <button class="nav-button" @click="goToShareManagement"></button> 
        <div class="storage-actionsa">
        <a href="#" class="blue-text large-font" @clickss="goToShareManagement">分享管理</a>
      </div> 
      <div class="dropdown">
        <button class="dropbtn" @click="toggleDropdown">
          全部文件 <i class="fas fa-chevron-down"></i>
        </button>
        
        <button class="nav-buttonc" @click="toggleDropdown"></button>
        </div>
        <div class="search-bar">
        <img src="@/assets/book.jpg" class="OIP-itema" />
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
    </div>
      <h2>全部文件</h2>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" />文件名</th>
            <th class="black-text">来源</th>
            <th class="black-text">
              大小
              <button class="nav-buttona" @click="sortFiles('size')">
                <i class="fas fa-sort-amount-down-alt"></i>
              </button> 
            </th>
            <th class="black-text">
              创建时间
              <button class="nav-buttona" @click="sortFiles('createdTime')">
                <i class="fas fa-sort-amount-down-alt"></i>
              </button> 
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="files.length === 0">
            <td colspan="5" class="empty-folder">
              <button class="nav-buttonb" @click="arguments"></button> 
              <div>当前文件夹为空</div>
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
        sortField: null,
        sortOrder: 'asc',
        isDropdownVisible: false, // 初始状态下下拉菜单可见
      };
      
    },
    computed: {
      isFolderEmpty() {
        return this.files.length === 0;
      }
    },
    methods: {
      goBack() {
        // 处理返回学术专区的逻辑
        this.$router.push('/mainpage');
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
        // 处理下拉菜单的显示和隐藏逻辑
        this.isDropdownVisible = !this.isDropdownVisible;
      },
      searchFiles() {
        // 处理文件搜索的逻辑
      },
      
      goToShareManagement(){
        // 处理分享管理的逻辑
        this.$router.push('/share-management');
      },
      argumentsarguments(){
        //空文件
      },
      sortFiles(field) {
        if (this.sortField === field) {
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortField = field;
          this.sortOrder = 'asc';
        }
  
        this.files.sort((a, b) => {
          if (this.sortOrder === 'asc') {
            return a[field] > b[field] ? 1 : -1;
          } else {
            return a[field] < b[field] ? 1 : -1;
          }
        });
      }
      //大小与时间升序
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
    width: 98%;
    margin: 20px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    min-width: 1300px;
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
    padding: 0px 30px;
    
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
    margin-left: 30px;
    font-size: 15px;
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
    padding: 10px 220px;
  }
  
  .storage-actions {
    margin-top: 5px;
  }
  
  .storage-actions a {
    margin-right: 10px;
    text-decoration: none;
    color: blue;
  }
  
  .storage-actionsa {
    margin-top: 10px;
  }
  
  .storage-actionsa a {
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
    margin-left: 220px;
  }
  
  /*.dropbtn {
    background-color:white;
    color: black;
    padding: 16px;
    font-size: 25px;
    border: none;
    cursor: pointer;
    margin-left: 10px;
  }
  */
  .search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 40px;
    padding: 20px;
    width: 512px;
    height: 20px;
    margin-left: 380px;
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
    margin-left: 12px;
  }
  
  
  .nav-button {
      display: inline-block;
      width: 50px;
      height: 50px;
      margin-bottom: -13px;
      margin-left: 15px;
      background-image: url('@/assets/tupian.jpg'); /* 替换为你的图标图片路径 */
      background-size: cover;
      border-radius: 50%; /* 使按钮呈圆形 */
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 5px;
    }
  
    .nav-button:hover {
      background-color: rgba(0, 0, 0, 0.1); /* 悬停时的背景颜色变化 */
    }
  
    .nav-buttona {
      display: inline-block;
      width: 22px;
    height: 23px;
    margin-top: 13px;
    margin-left: 2px;
      background-image: url('@/assets/two.jpg'); /* 替换为你的图标图片路径 */
      background-size: cover;
      border-radius: 0%; /* 使按钮呈圆形 */
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-bottom: 5%;
    }
  
  .nav-buttona:hover {
      background-color: rgba(0, 0, 0, 0.1); /* 悬停时的背景颜色变化 */
    }
  
    .nav-buttonb:hover {
      background-color: rgba(0, 0, 0, 0.1); /* 悬停时的背景颜色变化 */
    }
  
    .nav-buttonb {
      display: inline-block;
      width: 130px;
    height: 108px;
      background-image: url('@/assets/weng.jpg'); /* 替换为你的图标图片路径 */
      background-size: cover;
      border-radius: 0%; /* 使按钮呈圆形 */
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    
    .nav-buttonc {
      display: inline-block;
      width: 30px;
    height: 30px;
    margin-top: 15px;
    margin-left: 0px;
      background-image: url('@/assets/xiahuaxiang.jpg'); /* 替换为你的图标图片路径 */
      background-size: cover;
      border-radius: 0%; /* 使按钮呈圆形 */
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-bottom: 5%;
    }
  
    .nav-buttonc:hover {
      background-color: rgba(0, 0, 0, 0.1); /* 悬停时的背景颜色变化 */
    }
  
    .search-container{
      display: flex;
      margin-bottom: 20px;
    }
    .dropdown-item {
    display: block; /* 使每个选项垂直排列 */
    margin: 0px 0; /* 可选：添加间距 */
  }
  .dropdowna{
    background-color: white;
    border: 1px solid #ccc;
    padding: 1px;
  }
  .dropdown {
      position: relative;
      display: inline-block;
    }
  
    .dropdown {
    background-color: white;
    padding: 0px;
  }
   
    
    
    .dropdown {
      position: relative;
      display: inline-block;
    }
    
    .dropbtn {
      background-color: white;
      color: black;
      padding: 16px;
      font-size: 25px;
      border: none;
      cursor: pointer;
    }
    
    .dropbtn:hover, .dropbtn:focus {
      background-color: white;
    }
    
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    
    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }
    .dropdown-item {
    display: block; /* 使每个选项垂直排列 */
    margin: 0px 0; /* 可选：添加间距 */
  }
  .dropdowna{
    background-color: white;
    border: 1px solid #ccc;
    padding: 1px;
  }
  
  </style>