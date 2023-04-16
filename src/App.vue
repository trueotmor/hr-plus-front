<script setup lang="ts">
import Catalog from './components/catalog/Catalog.vue';
import Nav from './components/nav/Nav.vue';
</script>

<template>
  <main>
    <Nav />
    <RouterView />
  </main>
  <!-- <Catalog title="Мой титул" /> -->
</template>

<style lang="scss">
@import './index.css';
</style>
