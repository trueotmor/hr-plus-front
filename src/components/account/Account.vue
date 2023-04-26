<script setup lang="ts">
import Nav from '../nav/Nav.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';


onMounted(async () => {
    try {
        const data = await axios.get('/auth/is-auth');
        console.log(data);
    } catch (err) {
        console.log(err);
    }




});
</script>
 
<template>
    <SideBar />
    <Nav />
</template>
