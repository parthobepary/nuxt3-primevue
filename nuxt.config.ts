// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
    }
  },
  css: ["primevue/resources/themes/viva-light/theme.css"]
});