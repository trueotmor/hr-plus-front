import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuth: false,
        authUser: 'Авторизованный пользователь',
    }),
    getters: {
        user: (state) => state.authUser,
    },
    actions: {
        async getToken () {
            const data = await axios.get('/auth/is-auth');
            if (data.data.data.success) {
                this.isAuth = true;
            };
        },

        async getUser () {
            this.getToken();
            const data = await axios.get('/user');
            this.authUser = data.data;
        }
    },
})