<template>
  <div class="grid-container">
    <div v-if="error.statusCode === 404">
      <h1>Page not found</h1>
      <p>Test</p>
    </div>
    <h1 v-else>An error has occurred</h1>
    <nuxt-link to="/">Home Page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style></style>
