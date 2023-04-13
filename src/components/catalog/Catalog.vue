<script setup lang="ts">
import { reactive, toRef } from 'vue'
import { useField } from 'vee-validate'
import { IPost } from './catalog.interface';
import styles from './Catalog.module.scss'

const props = defineProps<{ title: string }>()

const isRequired = (value: string) => (value && value.trim()) || 'This is required'

const titleRef = toRef(props, 'title')

const { errorMessage, value } = useField(titleRef, isRequired)

const state: { posts: IPost[] } = reactive({
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
    ]
})

const removePost = (id: number) => {
    state.posts = state.posts.filter(post => post.id !== id)
}

const addPost = () => {
    state.posts.push({
        id: 12313, title: 'eqweqwe', userId: 12312313, body: ''
    })
}

</script>
 
<template>
    <div :class="styles.wrapper">
        <h1>Каталог</h1>
        <form action="">
            <input v-model="value" type="text" placeholder="Enter text">
            <span v-if="errorMessage">{{ errorMessage }}</span>
            <button @click.prevent="addPost()">Добавить</button>
        </form>
        <div>
            <ul>
                <li :key="post.id" v-for="post in state.posts">
                    <span>{{ post.title }} - {{ post.id }}</span>
                    <button @click="removePost(post.id)">Удалить</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
