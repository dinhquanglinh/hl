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
    <h3 :class="['title__common text-transform-uppercase font-weight-bold', type, className]">
        {{ label }}
    </h3>
</template>

<style scoped>
@import '@/assets/common/title.scss';
</style>
