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
            console.log(this.isAuth);
            if (data.data.data.success === true) {
                console.log(data.data.data.success === true);
                this.isAuth = true;
            };
            console.log(this.isAuth);
        },

        async getUser () {
            this.getToken();
            const data = await axios.get('/user');
            this.authUser = data.data;
        }
    },
})