<template>
    <div class="container mx-auto">
        <h2 class="text-3xl font-bold">Products</h2>
        <div
            v-if="isLoading"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <UiCardSkeleton v-for="n in 10" :key="'skeleton-' + n" />
        </div>
        <div v-else>
            <div
                v-if="products?.length"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
                <div v-for="product in products" :key="product.id">
                    <ClientOnly>
                        <UiCard
                            :product="product"
                            @add-to-cart="handleAddToCart"
                        />
                    </ClientOnly>
                </div>
            </div>
            <div v-else class="w-full h-full grid place-content-center">
                <p>No products available.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductsStore, useCartStore } from '~/store'
import { onMounted } from 'vue'
const isLoading = ref(true)

const productsStore = useProductsStore()
const cartStore = useCartStore()

const products = computed(() => productsStore.products)
const loading = computed(() => productsStore.loading)

watch(loading, (newLoadingState) => {
    if (!newLoadingState) {
        isLoading.value = false
    }
})

onMounted(() => {
    productsStore.fetchProducts()
})

const handleAddToCart = (product) => {
    cartStore.addToCart(product)
    console.log('Add to Cart:', product)
}
</script>
