import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
         path: '/', redirect: { name: 'Account' },
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
    },
    {
        path: '/restore',
        name: 'Restore',
        component: () => import('../components/restore/Restore.vue'),
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('../components/account/Account.vue'),
        children: [
            {
                path: 'add-organization',
                name: 'AddOrganization',
                component: ()=> import('../components/add-organization/AddOrganization.vue')
            }

        ]
    },
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)
export default router;