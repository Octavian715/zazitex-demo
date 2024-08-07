// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        }
    },
    devtools: { enabled: true },
    ssr: true,
    css: ['~/assets/css/main.css'],
    plugins: ['~/plugins/cart.js'],
    modules: [
        '@pinia/nuxt',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Onest: '400..900'
                }
            }
        ]
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    compatibilityDate: '2024-08-07'
})
