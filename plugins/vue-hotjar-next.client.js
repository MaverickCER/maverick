import VueHotjar from "vue-hotjar-next";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueHotjar, {
        id: 2762382,
        isProduction: true,
    });
});