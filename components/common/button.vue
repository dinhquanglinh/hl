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
    <button :class="['btn d-flex font-size radius align-items-center justify-content-center', type, className]">
        {{ label }}
    </button>
</template>

<style scoped>
@import '@/assets/common/button.scss';
</style>
