<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();



onMounted(async () => {
  await authStore.getToken();
});

// router.beforeEach(() => {
//   const store = useAuthStore();
//   if (store.isAuth) { router.push('/account') }
//   router.push('/login')
// })

</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import './index.css';
</style>
