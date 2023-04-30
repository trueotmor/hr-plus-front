<script setup lang="ts">
import { ref, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import FormInput from '../form-input/FormInput.vue';
import useVuelidate from '@vuelidate/core';
import { required, email, sameAs, helpers } from '@vuelidate/validators';

const router = useRouter();

const registerForm = ref({
    email: '',
    phone: '',
    specifiedpassword: '',
    confirmpassword: '',
});

const messageFromHost = ref({
    erros: {},
});

const rules = {
    email: { required: helpers.withMessage('Пожалуйста введите ваш E-mail', required), email: helpers.withMessage('Неверный E-mail', email) },
    phone: { required: helpers.withMessage('Пожалуйста введите телефон', required) },
    specifiedpassword: { required: helpers.withMessage('Пожалуйста введите пароль', required) },
    confirmpassword: { sameAs: helpers.withMessage('Введенные пароли не совпадают', sameAs(computed(() => registerForm.value.specifiedpassword))) },

};

const v$ = useVuelidate(rules, registerForm);

const handleRegister = async () => {
    const result = await v$.value.$validate();
    if (result) {
        try {
            const data = await axios.post('/auth/register', {
                email: registerForm.value.email,
                // phone: registerForm.value.phone,
                specifiedpassword: registerForm.value.specifiedpassword,
                confirmpassword: registerForm.value.confirmpassword,
            });
            if (!data.data.data.success) {
                messageFromHost.value.erros = data.data.data.error;
                console.log(messageFromHost.value);

            } else {
                messageFromHost.value = data.data.data.message;
                router.push({ name: 'Login' });
            };
        } catch (error) {
            console.log(error);

        }

    };
};

const inputStyle = "border peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600";
const labelStyle = "absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1";
</script>

<template>
    <div class="sm:grid grid-cols-12">
        <section class="col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-8 bg-gray-800 opacity-[0.4]">
        </section>
        <section class="h-screen col-span-6 md:col-span-6 lg:col-span-5 xl:col-span-4">
            <div class="h-full shadow-lg">
                <div class="flex flex-auto h-full flex-wrap items-center justify-center p-4">
                    <div class="p-4 h-100 w-full flex justify-center items-start flex-col">
                        <h5 class="mt-8 mb-4 w-full">Создать новый аккаунт</h5>
                        <p class="mb-6 w-full">Введите контакные данные доступа к системе.</p>
                        <form class="w-full" @submit.prevent="handleRegister">
                            <!-- Email input -->
                            <div class="relative">
                                <FormInput v-model="registerForm.email" type="email" label="E-mail" :labelClass="labelStyle"
                                    :inputClass="inputStyle" inputID="registerFormEmail" class="mb-6" />
                                <span v-for="error in v$.email.$errors" :key="error.$uid"
                                    class="text-red-500 absolute left-2 top-12 text-xs">
                                    {{ error.$message }}
                                </span>
                            </div>
                            <!-- Phone input -->
                            <div class="relative">
                                <FormInput v-model="registerForm.phone" label="Ваш телефон" :labelClass="labelStyle"
                                    :inputClass="inputStyle" inputID="registerFormPhone" class="mb-6" />
                                <span v-for="error in v$.phone.$errors" :key="error.$uid"
                                    class="text-red-500 absolute left-2 top-12 text-xs">
                                    {{ error.$message }}
                                </span>
                            </div>
                            <!-- Specifiedpassword input -->
                            <div class="relative">
                                <FormInput v-model="registerForm.specifiedpassword" label="Пароль" :labelClass="labelStyle"
                                    :inputClass="inputStyle" inputID="regiserFormSPass" class="mb-6" />
                                <span v-for="error in v$.specifiedpassword.$errors" :key="error.$uid"
                                    class="text-red-500 absolute left-2 top-12 text-xs">
                                    {{ error.$message }}
                                </span>
                            </div>

                            <!-- Confirmpassword input -->
                            <div class="relative">
                                <FormInput v-model="registerForm.confirmpassword" label="Подтвердите пароль"
                                    :labelClass="labelStyle" :inputClass="inputStyle" inputID="regiserFormСPass"
                                    class="mb-6" />
                                <span v-for="error in v$.confirmpassword.$errors" :key="error.$uid"
                                    class="text-red-500 absolute left-2 top-12 text-xs">
                                    {{ error.$message }}
                                </span>
                            </div>

                            <!-- Confidential check -->
                            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                                    type="checkbox" value="" id="exampleCheck2" />
                                <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck2">
                                    <span>Нажимая кнопку "зарегистрироваться", вы соглашаетесь с&nbsp;</span>
                                    <router-link :to="{ name: '' }"
                                        class="flex justify-center rounded bg-white font-medium text-blue-800 w-auto hover:text-blue-600">
                                        Политикой конфиденциальности и защиты персональных данных
                                    </router-link>
                                </label>
                            </div>

                            <div v-if="messageFromHost.message" class="text-red-500 text-xs mb-2 -mt-4">
                                {{ messageFromHost.message }}
                            </div>
                            <!-- Register submit -->
                            <div class="text-center lg:text-left flex flex-col mb-2">
                                <button type="submit"
                                    class="inline-block rounded bg-blue-700 px-7 py-2 text-white font-medium leading-normal border border-blue-700 hover:border-blue-800 hover:bg-blue-800 transition duration-300">
                                    Зарегистрироваться
                                </button>
                            </div>
                        </form>
                        <div class="flex px-7 py-2 self-center">
                            <span>У вас уже есть аккаунт?&nbsp;</span>
                            <router-link :to="{ name: 'Login' }"
                                class="flex justify-center rounded bg-white font-medium text-blue-800 w-auto hover:text-blue-600 font-bold">
                                Войти
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>