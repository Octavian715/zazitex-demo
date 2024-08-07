<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Your Cart</h1>

        <div v-if="cartItems.length" class="space-y-4">
            <!-- Cart Items List -->
            <div
                v-for="item in cartItems"
                :key="item.id"
                class="flex items-center border-b pb-4"
            >
                <!-- Product Image -->
                <img
                    :src="item.image"
                    alt="Product Image"
                    class="w-20 h-20 object-cover rounded-md mr-4"
                />

                <!-- Product Details -->
                <div class="flex-1">
                    <h2 class="text-lg font-semibold">{{ item.title }}</h2>
                    <p class="text-sm text-gray-600 mb-2">
                        Price: ${{ formatPrice(item) }}
                    </p>

                    <!-- Quantity Selector -->
                    <div class="flex items-center mb-2 mt-auto">
                        <button
                            @click="decreaseQuantity(item)"
                            class="px-2 py-1 bg-gray-200 rounded-l-md border border-gray-300 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="item.quantity <= 1"
                        >
                            -
                        </button>
                        <input
                            v-model.number="item.quantity"
                            type="number"
                            min="1"
                            class="w-16 text-center border border-x-0 border-gray-300 h-full"
                            @change="updateQuantity(item)"
                        />
                        <button
                            @click="increaseQuantity(item)"
                            class="px-2 py-1 bg-gray-200 rounded-r-md border border-gray-300 hover:bg-gray-300"
                        >
                            +
                        </button>
                    </div>

                    <!-- Remove Button -->
                    <button
                        @click="removeProductFromCart(item.id)"
                        class="text-red-500 hover:text-red-700"
                    >
                        Remove
                    </button>
                </div>
            </div>

            <!-- Total Price -->
            <div class="mt-4 text-lg font-semibold">
                <p>Total Price: ${{ getTotalCartPrice }}</p>
            </div>

            <div class="flex justify-between">
                <!-- Checkout Button -->
                <div class="mt-4">
                    <button
                        @click="checkout"
                        class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                    >
                        Checkout
                    </button>
                </div>

                <!-- Clear Cart Button -->
                <div class="mt-4">
                    <button
                        @click="clearCart"
                        class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>

        <div v-else class="text-center text-gray-500">
            <p>Your cart is empty.</p>
            <NuxtLink
                to="/products"
                class="inline-block mt-4 bg-blue-500 text-black px-4 py-2 border-1 border-blue rounded-md hover:bg-blue-700 transition-colors"
            >
                Go to products
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '~/store'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.cartItems)
const getTotalCartPrice = computed(() => cartStore.getTotalCartPrice)

function formatPrice(product) {
    return product.price.toFixed(2) || 0
}

function increaseQuantity(item) {
    updateQuantity(item)
}

function decreaseQuantity(item) {
    if (item.quantity > 1) {
        cartStore.decreaseProductQuantity(item)
    } else {
        removeProductFromCart(item.id)
    }
}

function updateQuantity(item) {
    cartStore.addToCart(item)
}

function removeProductFromCart(itemId) {
    cartStore.removeProductFromCart(itemId)
}

function clearCart() {
    cartStore.clearCart()
}

function checkout() {
    alert('Checkout functionality to be implemented.')
}
</script>

<style scoped></style>
