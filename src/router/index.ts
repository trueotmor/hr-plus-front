import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/home/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/login/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/register/Register.vue'),
    }

];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)
export default router;