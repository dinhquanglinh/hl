<script setup lang="ts"></script>

<template>
    <header id="site__header" class="d-flex flex-column align-items-center justify-content-center">
        <div class="site__header__container d-flex align-items-center justify-content-between">
            <img src="/logo-new.png" width="100" />
            <div class="flex">
                <nav id="site__nav">
                    <ul id="menu__site" class="d-flex align-items-center justify-content-center gap-header">
                        <li class="menu__site-item">
                            <NuxtLink to="/" class="menu__site-item-text color-main font-size text-transform-uppercase">Trang Chủ</NuxtLink>
                        </li>
                        <li class="menu__site-item">
                            <NuxtLink to="/" class="menu__site-item-text color-main font-size text-transform-uppercase">Giới Thiệu</NuxtLink>
                        </li>
                        <li class="menu__site-item">
                            <NuxtLink to="/" class="menu__site-item-text color-main font-size text-transform-uppercase">Thiết Kế Web</NuxtLink>
                        </li>
                        <li class="menu__site-item">
                            <NuxtLink to="/" class="menu__site-item-text color-main font-size text-transform-uppercase">Dịch vụ</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <LayoutPartialsBanner />
        <LayoutPartialsBottomBanner />
        <img class="site__header-linearGradient" src="/banner/linearGradient.svg" />
    </header>
</template>

<style scoped>
@import '@/assets/layout/header.scss';
</style>
