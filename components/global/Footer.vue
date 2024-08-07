<template>
    <footer class="bg-primary text-white py-4 w-full mt-auto">
        <div
            class="container mx-auto flex flex-col md:flex-row items-center justify-between"
        >
            <!-- Logo or Brand Name -->
            <div class="text-xl font-bold">
                <NuxtLink to="/" class="flex items-center">
                    <span>My Ecom</span>
                </NuxtLink>
            </div>

            <!-- Navigation Links -->
            <div class="flex flex-row md:flex-row gap-2 align-center">
                <NuxtLink to="/" class="hover:text-secondary">Home</NuxtLink>
                <NuxtLink to="/products" class="hover:text-secondary"
                    >Products</NuxtLink
                >
                <NuxtLink to="/cart" class="hover:text-secondary"
                    >Cart</NuxtLink
                >
            </div>
        </div>
        <div class="text-center mt-4">
            <p>&copy; 2024 My Ecom. Lucas Octaivain</p>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped></style>
