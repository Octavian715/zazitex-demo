<template>
    <div
        class="flex items-center justify-center min-h-screen bg-red-100 text-red-900 p-4"
    >
        <div class="text-center">
            <h1 class="text-3xl font-bold">Oops! Something went wrong.</h1>
            <p class="mt-2">
                We couldn't find what you're looking for. Please try again
                later.
            </p>
            <NuxtLink
                to="/"
                class="mt-4 inline-block bg-primary text-white py-2 px-4 rounded"
            >
                Go to Home
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
// Your script here
</script>

<style scoped></style>
