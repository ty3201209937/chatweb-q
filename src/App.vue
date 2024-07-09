<template>
  <div id="app">
    <router-view>
      <div class="demo-type">
        <div>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div>
          <el-avatar> user </el-avatar>
        </div>
      </div>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.demo-type {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
</style>
