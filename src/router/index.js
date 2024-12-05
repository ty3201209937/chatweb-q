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
    },
    {
        path: '/homee',
        name: 'home_page',
        component: () => import('@/components/home_page.vue')
    },
    {
        path: '/PaperGenerator',
        name: 'PaperGenerator',
        component: () => import('@/components/RegisterPage.vue')
    },
    {
        path: '/registrition',
        name: 'registrition',
        component: () => import('@/components/registrition.vue')
    },
    {
        path: '/sign',
        name: 'sign',
        component: () => import('@/components/sign.vue')
    },
    {
        path: '/Person',
        name: 'Person',
        component: () => import('@/components/PersonalHomepage.vue')
    },
    {
        path: '/Person',
        name: 'Person',
        component: () => import('@/components/PersonalHomepage.vue')
    },
    {
        path: '/mainpage8.1.1',
        name: 'mainpage',
        component: () => import('@/components/mainpage8.1.1.vue')
    },
    {
        path: '/no-page', 
        name: 'NoPage',
        component: () => import('@/components/no_page.vue')  
      }

    
   
  
   
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
