<template>
  <div class="box">
    <div class="navigation">
      <ul style="list-style: none;">
        <li>登录</li>
        <li>开启新会话</li>
        <li>学术专区</li>
        <li>论文生成</li>
        <li>历史记录</li>
        <li>个人信息</li>
        <li>vip支付入口</li>
        <li>在线客服</li>
      </ul>
      <div class="frame">
        这是对您问题的回答
      </div>
      <div class="frame2">
        Hi，我是 卡塞图～ 很高兴遇见你！你可以随时把网址🔗或者文件📃发给我，我来帮你看看
      </div>
      <div class="frame3">
        客户输入的问题
      </div>
      <div class="container">
        <textarea id="textArea" name="textArea" placeholder="输入您想要解决的问题"></textarea>
      </div>
    </div>
    <a href="home_page.html" class="button-link" target="_blank">返回</a>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.navigation ul li {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 40px 10px 20px -30px;
  background-color: #ffbb3d;
  border-radius: 10px;
  margin-top: -3px;
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
  background-color: hwb(184 70% 8%);
  position: absolute;
  left: 30px;
  top: 150px;
  border-radius: 10px;
}

#textArea {
  width: 785px;
  height: 120px;
  padding: 5px;
  box-sizing: border-box;
  margin: 20px 0;
  resize: none;
  margin-left: -1420px;
  border-radius: 10px;
  margin-top: -50px;
  font-family: -apple-system, blinkmacsystemfont;
}

.container {
  width: 554px;
  height: 300px;
  float: left;
  position: absolute;
  top: 530px;
  margin-top: 10px;
  left: 1440px;
  margin-left: -240px;
  text-align: center;
  font-size: 20pt;
}

.frame {
  width: 680px;
  height: 120px;
  background-color: #ffffff;
  position: absolute;
  top: 75px;
  left: 420px;
  border-radius: 10px;
  border: 2px solid black;
}

.frame2 {
  width: 500px;
  height: 70px;
  background-color: #ffffff;
  position: absolute;
  top: -600px;
  left: 420px;
  border-radius: 10px;
  border: 2px solid black;
  position: relative;
}

.frame3 {
  width: 200px;
  height: 50px;
  background-color: blue;
  position: absolute;
  top: -1px;
  left: 895px;
  border-radius: 10px;
  border: 2px solid black;
}

.button-link {
  display: inline-block;
  padding: 10px 15px;
  color: white;
  background-color: #ffbb3d;
  text-decoration: none;
  border-radius: 5px;
  width: 26px;
  height: 34px;
  position: relative;
  left: 33px;
}
</style>
