<script setup lang="ts"></script>

<template>
    <div id="site__banner" class="d-flex justify-content-center position-relative">
        <NuxtImg class="site__banner-icon left" src="banner/banner.svg" />
        <div class="site__banner-box radius-3x bgr-linear-gradient-main d-flex justify-content-center">
            <span class="site__banner-gradient-text" data-banner-1="Xin Chào" data-banner-2="Chào Mừng Bạn Đến HL Team"></span>
        </div>
        <NuxtImg class="site__banner-icon right" src="banner/banner.svg" />
    </div>
</template>

<style scoped>
@import '@/assets/layout/partials/banner.scss';
</style>
