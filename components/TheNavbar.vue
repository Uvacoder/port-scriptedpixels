<template>
  <nav class="container nav">
    <nuxt-link exact :to="{ name: 'index' }">Home</nuxt-link>
    <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
    <nuxt-link :to="{ name: 'work' }">Work</nuxt-link>
    <nuxt-link :to="{ name: 'blog' }">Blog</nuxt-link>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped></style>
