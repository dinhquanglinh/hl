import { defineStore } from 'pinia';

interface ConfigSite {}

export const useSettingStore = defineStore('setting', {
    state: () => ({}),
    actions: {
        SET_CONFIG_SITE() {},
    },
});
