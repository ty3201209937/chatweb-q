import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'chat',
        component: () => import('@/components/chat/ChatBox.vue')
    },
    {
        path: '/vip-purchase',
        name: 'VIPPurchase',
        component: () => import('@/components/vip/VIPPurchasePage.vue') // 确保路径和文件名一致
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
