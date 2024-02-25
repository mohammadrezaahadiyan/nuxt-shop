import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        "@/assets/css/custom.css",
        "assets/css/theme.css",
    ],
    build:{
      transpile: ['vuetify']
    },
    modules:['@pinia/nuxt', 'nuxt-swiper', (_options, nuxt) => {
        nuxt.hooks.hook('vite:extendConfig', (config) => {
            config.plugins?.push(vuetify({autoImport: true}))
        })
    }],
    vite:{
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },

})
