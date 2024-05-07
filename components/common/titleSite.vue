<script setup>
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'default',
    },
    className: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="box-title__common">
        <h1 :class="['title-site__common text-transform-uppercase font-weight-bold', type, className]">
            {{ label }}
        </h1>
        <div class="title-site__common-border"></div>
    </div>
</template>

<style scoped>
@import '@/assets/common/titleSite.scss';
</style>
