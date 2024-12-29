<!-- zhishiku.vue的子文件 -->
<template>
    <div class="feature">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String
    }
  };
  </script>
  
  <style scoped>
  .feature {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  </style>