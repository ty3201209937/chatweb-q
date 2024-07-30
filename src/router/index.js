import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'chat',
        component: () => import('@/components/chat/ChatBox.vue')
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import('@/views/About.vue')
    // }
    // 你可以在这里添加更多路由
];

const router = new VueRouter({
    mode: 'history', // 使用HTML5历史记录模式
    base: process.env.BASE_URL,
    routes
});

export default router;
