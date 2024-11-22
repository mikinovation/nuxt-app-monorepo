// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: [
    './layer/core',
    process.env.APP_ENV === 'app' ? './layer/app' : './layer/admin',
  ],
})
