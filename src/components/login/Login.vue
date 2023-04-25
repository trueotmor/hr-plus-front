<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

const router = useRouter();

const loginForm = ref({
    email: '',
    password: '',
});

const handleLogin = async () => {
    const data = await axios.post('/auth/login', {
        username: loginForm.value.email,
        password: loginForm.value.password,
    });
    console.log(data);
    router.push('/');
}

</script>
 
<template>
    <div class="sm:grid grid-cols-12">
        <section class="col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-8 bg-gray-800 opacity-[0.4]">
        </section>
        <section class="h-screen col-span-6 md:col-span-6 lg:col-span-5 xl:col-span-4">
            <div class="h-full shadow-lg">
                <div class="flex flex-auto h-full flex-wrap items-center justify-center p-4">
                    <div class="p-4 h-100 w-full flex justify-center items-start flex-col">
                        <h5 class="mt-8 mb-4 w-full">Авторизация</h5>
                        <p class="mb-6 w-full">Введите e-mail и пароль для доступа к системе.</p>
                        <form class="w-full" @submit.prevent="handleLogin">
                            <!-- Email input -->
                            <div class="relative mb-6">
                                <input type="text" v-model="loginForm.email" id="loginFormEmail" autocomplete="off"
                                    class="border peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder=" " />
                                <label for="loginFormEmail"
                                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    E-mail
                                </label>
                            </div>
                            <!-- Password input -->
                            <div class="relative mb-6">
                                <input type="text" v-model="loginForm.password" id="loginFormPasswoed" autocomplete="off"
                                    class="border peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder=" " />
                                <label for="loginFormPasswoed"
                                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Пароль
                                </label>
                            </div>
                            <div class="text-center lg:text-left flex flex-col mb-2">
                                <button v-if="loginForm.email && loginForm.password" type="submit"
                                    class="inline-block rounded bg-blue-700 px-7 py-2 text-white font-medium leading-normal border border-blue-700 hover:border-blue-800 hover:bg-blue-800 transition duration-300">
                                    Вход
                                </button>
                                <router-link v-if="!loginForm.email || !loginForm.password" :to="{ name: 'Register' }"
                                    class="bg-blue-700 flex justify-center inline-block rounded px-7 py-2 text-white font-medium leading-normal border border-blue-700 hover:border-blue-800 hover:bg-blue-800 transition duration-300">
                                    Зарегистрироваться
                                </router-link>
                            </div>
                        </form>
                        <router-link :to="{ name: 'Restore' }"
                            class="flex justify-center rounded bg-white px-7 py-2 font-medium text-blue-800 w-auto self-center hover:text-blue-600">
                            Забыли пароль?
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
