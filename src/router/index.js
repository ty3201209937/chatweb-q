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
        path: '/home',
        name: 'home_page',
        component: () => import('@/components/home_page2.vue')
    },
    {
        path: '/Registerpage',
        name: 'PaperGenerator',
        component: () => import('@/components/RegisterPage.vue')
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
    // {
    //     path: '/mainpage8.1.1',
    //     name: 'mainpage',
    //
    //       component: () => import('@/components/mainpage8.1.1.vue')
    // },
    {
        path: '/no-page',
        name: 'NoPage',
        component: () => import('@/components/no_page (1).vue')
    },
    {
        path: '/mainpage',
        name: 'mainpage',
        component: () => import('@/components/mainpage.vue')
    },
    {
        path:'/register',
        name:'register',
        component: () => import('@/components/registrition.vue')
    },
    {
        path:'/history_paper',
        name:'history_paper',
        component: () => import('@/components/history_page.vue')
    },
    {
        path:'/online',
        name:'online',
        component: () => import('@/components/online.vue')
    },
    {
        path:'/polish',
        name:'polish',
        component: () => import('@/components/polish.vue')
    },
    {
        path: '/DocumentationPage',
        name: 'DocumentationPage',
        component: () => import('@/components/DocumentationPage.vue')
    },
    {
        path: '/translation',
        name: 'translation',
        component: () => import('@/components/translation.vue')
    },
    {
        path: '/zhishiku',
        name: 'zhishiku',
        component: () => import('@/components/zhishiku.vue')
    },
    {
        path: '/FeatureItem',
        name: 'FeatureItem',
        component: () => import('@/components/FeatureItem.vue')
    },
    {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        component: () => import('@/components/ForgotPassword (1).vue')
    },
    {
        path: '/OrderQueryComponent',
        name: 'OrderQueryComponent',
        component: () => import('@/components/OrderQueryComponent (1).vue')
    },
    {
        path: '/PdfToWord',
        name: 'PdfToWord',
        component: () => import('@/components/PdfToWord.vue')
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  });

export default router;