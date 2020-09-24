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

<style scoped>
nav {
  text-align: right;
  padding: 20px;
}

nav a {
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  display: inline-block;
  padding: 0 0 10px 0;
  margin: 0 10px;
}

nav a:hover {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nuxt-link-exact-active,
.nuxt-link-active {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
