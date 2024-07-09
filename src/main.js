// main.js
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import LoginPage from './components/LoginPage.vue'; // 根据实际文件路径修正
import RegisterPage from './components/RegisterPage.vue'; // 根据实际文件路径修正
import Login from './components/login.vue'; // 根据实际文件路径修正
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login }, // 根路径
  { path: '/login', component: LoginPage }, // 登录页面路径
  { path: '/register', component: RegisterPage } // 注册页面路径，如果有的话
];

const router = new VueRouter({
  routes,
  mode: 'history' // 使用history模式，可以去掉URL中的#
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
