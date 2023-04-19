<script setup lang="ts">
import Nav from './components/nav/Nav.vue';
</script>

<template>
  <main>
    <Nav />
    <RouterView class="-mt-20 md:-mt-16" />
  </main>
  <!-- <Catalog title="Мой титул" /> -->
</template>

<style lang="scss">
@import './index.css';
</style>
