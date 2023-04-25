<script setup lang="ts">
import { computed, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const restoreForm = ref({
    email: '',
});

const handleRestore = async () => {
    await axios.post('auth/forgot', {
        email: restoreForm.value.email,
    });
    router.push('/login');
}

const disabled = computed(() => !restoreForm.value.email)

</script>
 
<template>
    <div class="sm:grid grid-cols-12">
        <section class="col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-8 bg-gray-800 opacity-[0.4]">
        </section>
        <section class="h-screen col-span-6 md:col-span-6 lg:col-span-5 xl:col-span-4">
            <div class="h-full shadow-lg">
                <div class="flex flex-auto h-full flex-wrap items-center justify-center p-4">
                    <div class="p-4 h-100 w-full flex justify-center items-start flex-col">
                        <h5 class="mt-8 mb-4 w-full">Сбросить пароль</h5>
                        <p class="mb-6 w-full">Введите адрес электронной почты, указанной при регистрации.</p>
                        <p class="mb-6 w-full">Мы вышлем вам инструкцию для восстановления доступа к сервису.</p>
                        <form class="w-full" @submit.prevent="handleRestore">
                            <!-- Email input -->
                            <div class="relative mb-6">
                                <input type="text" v-model="restoreForm.email" id="restoreFormEmail" autocomplete="off"
                                    class="border peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder=" " />
                                <label for="restoreFormEmail"
                                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                    Ваш E-mail
                                </label>
                            </div>
                            <div class="text-center lg:text-left flex flex-col mb-2">
                                <button type="submit" :disabled='disabled'
                                    class="inline-block rounded bg-blue-700 px-7 py-2 text-white font-medium leading-normal border border-blue-700 hover:border-blue-800 hover:bg-blue-800 transition duration-300 disabled:bg-gray-300 disabled:border-gray-300">
                                    Отправить
                                </button>
                            </div>
                        </form>
                        <div class="flex px-7 py-2 self-center">
                            <span>Вернуться к&nbsp;</span>
                            <router-link :to="{ name: 'Login' }"
                                class="flex justify-center rounded bg-white font-medium text-blue-800 w-auto hover:text-blue-600 font-bold">
                                Авторизации
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
