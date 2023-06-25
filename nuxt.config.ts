// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-headlessui",
    "@nuxt/image",
    "nuxt-icon"
  ],
  colorMode: { classSuffix: '' },
  ssr: true
})