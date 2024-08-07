import { useCartStore } from '~/store'

export default defineNuxtPlugin(() => {
    if (process.client) {
        const cartStore = useCartStore()
        cartStore.loadCart()
    }
})
