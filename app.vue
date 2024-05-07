<script setup lang="ts">
const layout = 'default';
useHead({
    title: 'home',
});
</script>

<template>
    <h1 class="d-none">HL Company</h1>
    <NuxtLayout :name="layout">
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
@import '@/assets/main.scss';
@import '@/assets/config.scss';
@import '@/assets/variables/root.scss';
</style>
