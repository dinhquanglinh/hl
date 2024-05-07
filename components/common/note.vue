<script setup>
const props = defineProps({
    html: {
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
    <div class="d-flex align-items-center justify-content-center">
        <div :class="['site__note ', type, className]" v-html="html"></div>
    </div>
</template>

<style scoped>
@import '@/assets/common/note.scss';
</style>
