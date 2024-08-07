import { defineStore } from 'pinia'
import { fakeProducts } from '~/utils/fakeProducts'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        loading: false
    }),
    getters: {
        getProducts() {
            return this.products
        }
    },
    actions: {
        async fetchProducts() {
            this.loading = true
            try {
                // simulate server delay
                const productsList = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(fakeProducts)
                    }, 1000)
                })
                this.products = productsList
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                this.loading = false
            }
        }
    }
})
