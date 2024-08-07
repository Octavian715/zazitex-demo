<template>
    <header class="bg-primary text-white shadow-md sticky top-0 z-50">
        <ClientOnly>
            <nav
                class="container mx-auto flex items-center justify-between p-4 px-0"
            >
                <!-- Logo -->
                <div class="text-xl font-bold">
                    <NuxtLink
                        to="/"
                        class="flex items-center hover:text-secondary transform transition-transform duration-200 active:scale-95"
                    >
                        <h1>My Ecom</h1>
                    </NuxtLink>
                </div>

                <!-- Desktop Navigation Links -->
                <div class="hidden md:flex items-center space-x-4">
                    <NuxtLink
                        to="/products"
                        class="text-white hover:text-secondary transform transition-transform duration-200 active:scale-95"
                    >
                        Products
                    </NuxtLink>
                </div>

                <div class="flex gap-4 justify-center self-center">
                    <!-- Cart Icon -->
                    <div class="flex relative self-center">
                        <NuxtLink
                            to="/cart"
                            class="text-white hover:text-secondary transform transition-transform duration-200 active:scale-95"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 3h2l1 6h13l1-6h2M6 9l1 11h10l1-11M3 3l1 3h16l1-3M5 19a2 2 0 11-4 0 2 2 0 014 0zm14 0a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </NuxtLink>

                        <!-- Badge -->
                        <span
                            v-if="getTotalItems > 0"
                            class="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-accent text-white text-xs font-semibold rounded-full border-2 border-white"
                        >
                            {{ getTotalItems }}
                        </span>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button
                        @click="toggleMenu"
                        class="md:hidden flex items-center hover:text-secondary transform transition-transform duration-200 active:scale-95"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            <!-- Mobile Menu -->
            <div
                v-if="isMenuOpen"
                class="fixed inset-0 bg-primary text-white p-4 z-60"
            >
                <div class="flex justify-end mb-4">
                    <button
                        @click="toggleMenu"
                        class="text-white hover:text-secondary transform transition-transform duration-200 active:scale-95"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div class="container mx-auto">
                    <NuxtLink
                        to="/products"
                        @click="toggleMenu"
                        class="block w-fit py-2 hover:text-secondary transform transition-transform duration-200 active:scale-95"
                    >
                        Products
                    </NuxtLink>
                    <NuxtLink
                        to="/cart"
                        @click="toggleMenu"
                        class="block w-fit py-2 hover:text-secondary transform transition-transform duration-200 active:scale-95"
                    >
                        Cart
                    </NuxtLink>
                </div>
            </div>
        </ClientOnly>
    </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useCartStore } from '~/store'

const cartStore = useCartStore()

const getTotalItems = computed(() => {
    const totalItems = cartStore.getTotalItems
    return totalItems > 100 ? '99+' : totalItems
})

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

watch(isMenuOpen, (newVal) => {
    document.body.style.overflow = newVal ? 'hidden' : ''
})
</script>

<style scoped></style>
