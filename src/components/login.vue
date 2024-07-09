<template>
  <div>
    <h1>Login Page</h1>
    <p>登录页面内容。</p>

    <!-- el-popover 组件 -->
    <el-popover
      placement="left-start"
      trigger="click"
      v-model="popoverVisible"
      class="custom-popover"
    >
      <img
        slot="reference"
        class="avatar"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        alt="Avatar"
        style="cursor: pointer;"
      />
      <el-menu class="menu">
        <el-menu-item index="my-gpt">我的 GPT</el-menu-item>
        <el-menu-item index="custom-chatgpt">自定义ChatGPT</el-menu-item>
        <el-menu-item-divider></el-menu-item-divider> <!-- 第一条分隔线 -->
        <el-menu-item index="settings">设置</el-menu-item>
        <el-menu-item index="logout">登录</el-menu-item>
      </el-menu>
    </el-popover>
  </div>
</template>

<script>
import { Popover, Menu, MenuItem, MenuItemDivider } from 'element-ui';

export default {
  name: 'Login',
  components: {
    'el-popover': Popover,
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    'el-menu-item-divider': MenuItemDivider
  },
  data() {
    return {
      popoverVisible: false
    };
  }
};
</script>

<style scoped>
.avatar {
  position: fixed;
  top: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  z-index: 1001;
}

.custom-popover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.menu {
  width: 160px;
}

.menu .el-menu-item,
.menu .el-menu-item-group__title {
  color: #333;
}
</style>
