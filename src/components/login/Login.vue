<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

// const props = defineProps<{ title: string }>()

const isRequired = (value: string) => (value && value.trim()) || 'This is required'

// const titleRef = toRef(props, 'title')

const { errorMessage, value } = useField('email', isRequired)



</script>
 
<template>
    <div>
        <h5>Авторизация</h5>
        <p>Введите email и пароль для доступа к системе.</p>
        <form action="">
            <input v-model="value" name="email">
            <span v-if="errorMessage">{{ errorMessage }}</span>
            <input v-model="value" name="password">
            <span v-if="errorMessage">{{ errorMessage }}</span>
            <input type="checkbox">
        </form>
        <button>Зарегистрироваться</button>
        <router-link to="/">Забыли пароль?</router-link>
    </div>
</template>

<style scoped></style>
