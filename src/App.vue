<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getToken();
});
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import './index.css';
</style>
