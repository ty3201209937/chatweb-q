import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue'; // 确保引入正确的路径
import Login from '@/views/login.vue'; // 确保引入正确的路径

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login', // 修正为 'Login'
        component: Login
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
