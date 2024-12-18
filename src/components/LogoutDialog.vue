<template>
  <div class="logout-dialog" v-if="visible">
    <div class="dialog-content">
      <h3>账号注销账号</h3>
      <p>账号删除后不可恢复，请谨慎操作！</p>
      <p>建议您先将个人作品下载备份后，再进行注销操作</p>
      <ul>
        <li>账号一经注销，将会永久删除该账号下的所有个人物品，且不可恢复</li>
        <li>账号一经注销，该账号下所拥有权益视为放弃，包括已购买会员权益等</li>
      </ul>
      <button class="confirm-button" @click="confirmLogout">确认注销账号</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true // 假设初始状态为可见
    };
  },
  methods: {
    confirmLogout() {
      // 在这里处理注销逻辑
      console.log('账号已注销');
      this.visible = false; // 关闭弹窗
    }
  }
};
</script>

<style scoped>
.logout-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px; /* 根据需要调整宽度 */
  display: flex;
  flex-direction: column; /* 使内容垂直排列 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
}

h3 {
  margin: 0 0 20px 0;
  font-size: 18px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.confirm-button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px; /* 与上方内容保持一定距离 */
}
</style>