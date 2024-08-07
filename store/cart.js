import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: []
    }),
    getters: {
        getTotalCartPrice() {
            const totalPrice = this.cartItems.reduce((acc, currentItem) => {
                const itemTotalPrice = currentItem.price * currentItem.quantity
                acc += itemTotalPrice
                return acc
            }, 0)

            return totalPrice.toFixed(2)
        },
        getTotalItems() {
            return this.cartItems.reduce((acc, currentItem) => {
                acc += currentItem.quantity
                return acc
            }, 0)
        }
    },
    actions: {
        addToCart(item) {
            const existingItem = this.cartItems.find(
                (cartItem) => cartItem.id === item.id
            )
            if (existingItem) {
                existingItem.quantity++
            } else {
                this.cartItems.push({ ...item, quantity: item.quantity })
            }
            this.saveCartToStorage()
        },
        decreaseProductQuantity(item) {
            const existingItem = this.cartItems.find(
                (cartItem) => cartItem.id === item.id
            )
            if (existingItem) {
                existingItem.quantity--
            }

            this.saveCartToStorage()
        },
        removeProductFromCart(productId) {
            this.cartItems = this.cartItems.filter(
                (item) => item.id !== productId
            )
            this.saveCartToStorage()
        },
        saveCartToStorage() {
            if (process.client) {
                localStorage.setItem(
                    'cartItems',
                    JSON.stringify(this.cartItems)
                )
            }
        },
        clearCart() {
            this.cartItems = []
            this.saveCartToStorage()
        },
        loadCart() {
            if (process.client) {
                const savedCart = localStorage.getItem('cartItems')
                if (savedCart) {
                    this.cartItems = JSON.parse(savedCart)
                }
            }
        }
    }
})
