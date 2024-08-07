/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px'
            },
            colors: {
                primary: '#2A2B2E', // Deep Blue
                secondary: '#DC2626', // Red
                accent: '#F59E0B', // Yellow
                background: '#F8FCDA' // Light Gray
            }
        }
    },
    plugins: []
}
