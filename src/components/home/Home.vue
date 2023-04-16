<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref();
onMounted(async () => {
    const data = await axios.get('/api/user');
    console.log(data);
})
</script>
 
<template>
    <p>User - {{ user }}</p>
</template>
