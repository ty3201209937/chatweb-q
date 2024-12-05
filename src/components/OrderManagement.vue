<template>
  <div class="container order-management-page">
    <header class="header">
      <h3 class="header-title">订单管理</h3>
      <a href="#" class="download-button">下载论文压缩包</a>
    </header>
    <main class="content">
      <table class="order-table">
        <thead>
          <tr>
            <th>订单编号</th>
            <th>订单信息</th>
            <th>订单生成时间</th>
            <th>订单说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.title }}</td>
            <td>{{ order.date }}</td>
            <td>该论文还有{{ order.daysToExpire }}天到期</td>
          </tr>
        </tbody>
      </table>
    </main>
    <footer class="order-info">
      <p>找不到相关订单?试试 <a href="#">订单查询</a>吧~</p>
    </footer>
    <div class="note">
      <p>个人查重系统不会收录您提交的文献。订单支付完成后，系统将为您保留报告7天(不含支付当天)，请及时下载。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderManagement',
  data() {
    return {
      orders: []
    };
  },
  created() {
    // 模拟异步获取订单数据
    setTimeout(() => {
      this.orders = [
        { id: '20241026', title: '人工智能的发展', date: '2024.9.9', daysToExpire: '10' },
        { id: '20241025', title: '自然和人类平衡发展', date: '2020.9.10', daysToExpire: '11' }
      ];
    }, 1000);
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.container.order-management-page {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 90%;
  max-width: 1500px;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-title {
  margin: 0;
}

.content {
  flex: 1;
  margin: 50px 0;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #f0f2f5;
  border-radius: 5px;
}

th,
td {
  border: 1px solid #f0f2f5;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f9f9f9;
}

.order-info {
  margin-top: 20px;
  text-align: center;
}

.order-info a {
  color: #007bff;
  text-decoration: none;
  transition: text-decoration 0.3s ease;
}

.order-info a:hover {
  text-decoration: underline;
}

.download-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #0056b3;
}

.note {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 20px;
  text-align: center;
}

@media (max-width: 768px) {
 .container.order-management-page {
    padding: 15px;
  }

 .order-table {
    font-size: 14px;
  }

 .download-button {
    padding: 6px 12px;
  }

 .note {
    font-size: 12px;
  }
}
</style>