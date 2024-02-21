export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        "@/assets/css/custom.css",
        "assets/css/theme.css"
    ],
    modules:['@pinia/nuxt', 'nuxt-swiper'],
    vite:{
        server:{
            proxy:{'/api': "https://shop-api.codeyad-project.ir/"}
        }
    },

})
