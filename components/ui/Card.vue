<template>
    <div class="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
        <!-- Product Image -->
        <img
            :src="product.image"
            alt="Product Image"
            class="w-full h-48 object-cover rounded-md mb-4"
        />

        <!-- Product Title -->
        <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>

        <!-- Product Price -->
        <p class="text-lg text-primary font-bold mb-2">
            $ {{ formatPrice(product) }}
        </p>

        <!-- Product Rating -->
        <div class="flex items-center mb-2">
            <svg
                class="w-4 h-4"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 47.94 47.94"
                xml:space="preserve"
            >
                <path
                    style="fill: #ed8a19"
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"
                />
            </svg>
            <p class="ml-2 text-sm text-gray-600">({{ product.rating }})</p>
        </div>

        <!-- Product Producer -->
        <p class="text-sm text-gray-500 mb-2">
            Producer: {{ product.producer }}
        </p>

        <!-- Product Stock -->
        <p class="text-sm text-green-600 mb-4">
            In Stock: {{ formatStokQuantity(product) }}
        </p>

        <!-- Quantity Selector -->
        <div class="flex items-center mb-4 mt-auto">
            <button
                @click="decreaseQuantity"
                class="px-3 py-1 bg-gray-200 rounded-l-md border border-gray-300 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                 :disabled="quantity <= 1"
            >
                -
            </button>
            <input
                v-model.number="quantity"
                type="number"
                min="1"
                class="w-16 text-center border border-gray-300 h-full border-x-0"
            />
            <button
                @click="increaseQuantity"
                class="px-3 py-1 bg-gray-200 rounded-r-md border border-gray-300 hover:bg-gray-300"
            >
                +
            </button>
        </div>

        <!-- Add to Cart Button -->
        <button
            @click="addToCart"
            class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
        >
            Add to Cart
        </button>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

// Props for product data
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['add-to-cart'])

const quantity = ref(1)

function increaseQuantity() {
    if (quantity.value < props.product.stockQuantity) {
        quantity.value++
    }
}

function formatPrice(product) {
    return product.price.toFixed(2) || 0
}

function formatStokQuantity(product) {
    return product.stockQuantity > 100 ? '99+' : product.stockQuantity
}

function decreaseQuantity() {
    if (quantity.value > 1) {
        quantity.value--
    }
}

function addToCart() {
    const cartItem = { ...props.product, quantity: quantity.value }
    emit('add-to-cart', cartItem)
}
</script>

<style scoped>
/* Add additional styles if needed */
</style>
