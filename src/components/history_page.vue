<template>
  <div class="box">
    <div class="navigation">
      <ul style="list-style: none;">
        <li><span class="nav-text" @click="goToHistory">登录</span></li>
        <li><span class="nav-text" @click="goToHistory">开启新对话</span></li>
        <li><span class="nav-text" @click="goToHistory">学术专区</span></li>
        <li><span class="nav-text" @click="goToHistory">论文生成</span></li>
        <li><span class="nav-text" @click="goToHistory">历史对话</span></li>
        <li><span class="nav-text" @click="goToHistory">个人信息</span></li>
        <li><span class="nav-text" @click="goToHistory">vip支付入口</span></li>
        <li><span class="nav-text" @click="goToHistory">在线客服</span></li>
      </ul>
    </div>
    <div class="history-page">
      <h1 class="center-title">历史会话</h1>
      <div class="search-bar">
        <i class="fas fa-search search-icon"></i>
        <input type="text" v-model="searchQuery" placeholder="搜索历史会话" />
      </div>
      <div class="history-records">
        <div v-for="(record, index) in filteredHistoryRecords" :key="index" class="record-item">
          <div class="record-header">
            <span class="record-time">{{ record.time }}</span>
          </div>
          <div class="record-content">
            <i class="fas fa-file-alt document-icon"></i> {{ record.content }}
            <button class="delete-button" @click="deleteRecord(index)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historyRecords: [
        { time: '今天', content: '植物的生长周期' },
        { time: '本周', content: '人工智能的发展' },
        { time: '本月', content: '计算机专业可迁移技能分析' },
        { time: '今年', content: 'Vue组件样式编译错误：缺少分号' }
      ],
      searchQuery: '',
    };
  },
  computed: {
    filteredHistoryRecords() {
      return this.historyRecords.filter(record =>
        record.content.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    deleteRecord(index) {
      this.historyRecords.splice(index, 1);
    },
    goToHistory() {
      this.$router.push('/history');
    },
    goToPersonalPage() {
      this.$router.push({ name: 'Person' });
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
}
.box {
  width: 1919px;
  height: 1080px;
  display: flex;
  background-color: #ffffff;
  position: relative;
  text-align: center;
  vertical-align: middle;
}
.navigation {
  width: 65px;
  height: 480px;
  background-color: rgb(232, 226, 226);
  position: absolute;
  left: 30px;
  top: 150px;
  border-radius: 10px;
}
.navigation ul li {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 40px 10px 20px -30px;
  background-color: #ffbb3d;
  border-radius: 10px;
  margin-top: -3px;
}
.nav-icon {
  cursor: pointer;
  width: 40px;
  height: 40px;
}
.nav-link {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 10px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #e0e0e0;
  border-radius: 5px;
}

.history-page {
  flex-grow: 1;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 120px;
  margin-top: 150px;
  width: 60%; /* 改为60%，让历史会话区域更紧凑 */
}

.center-title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 58px;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  width: 80%;
  height: 9%;
}

.search-bar .search-icon {
  position: absolute;
  left: 104px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
  font-size: 44px;
}

.search-bar input {
  width: 80%;
  padding-left: 100px !important;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 24px;
  transition: border-color 0.3s;
}

.history-records {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  width: 90%; /* 设置为90%，减小历史记录区的宽度 */
}

.record-item {
  margin-bottom: 15px;
  padding: 55px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  width: 80%;
  margin-left: 114px;
}

.record-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.record-time {
  font-weight: bold;
  color: #555;
  font-size: 50px;
}

.record-content {
  background-color: #e3e3e35e;
  padding: 10px;
  border-radius: 5px;
  color: #333;
  text-align: left;
  margin-left: 2px;
  width: 97%;
  position: relative; /* 添加相对定位 */
  font-size: 25px;
}

.delete-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ff4d4d;
  font-size: 18px;
  position: absolute; /* 绝对定位 */
  right: 10px; /* 定位到右边 */
  top: 10px; /* 定位到顶部 */
  opacity: 0; /* 默认隐藏 */
  transition: opacity 0.3s; /* 过渡效果 */
}

.record-content:hover .delete-button {
  opacity: 1; /* 鼠标悬停时显示 */
}

.document-icon {
  margin-right: 5px;
  color: #888;
}

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>