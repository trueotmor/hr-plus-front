import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';

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
);

// router.beforeEach((to, from, next) => {
//     const store = useAuthStore();
//     console.log(store.isAuth);
//     if (to.name !== 'Login' && store.isAuth === false) {
//         next({ name: 'Login' });
//     } else next();
// });

// let isAuth = false

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Logon' && !localStorage.getItem('authToken')) {
//     next({ name: 'Logon' })
//   } else next()
// })

// router.beforeEach(async (to, from, next) => {
//   if (localStorage.getItem('authToken') && !isAuth && to.name !== 'Logon') {
//     const request = await fetch('http://localhost:8000/api/authuser', {
//       method: 'POST',
//       credentials: 'same-origin',
//       headers: {
//         'Content-type': 'application/json',
//         Authorization: localStorage.getItem('authToken')
//       }
//     })
//     const response = await request
//     if (response.status === 200) {
//       isAuth = true
//       next(to.fullPath)
//     } else next({ name: 'Logon' })
//   } else next()
// })

export default router;