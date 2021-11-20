<template>
  <div class="mb-32">
    <h4 class="my-20 text-4xl mx-auto">😩 There's been a problem...</h4>

    <div v-if="error.statusCode == 404">
      <p>Looks like the page you're looking can't be found 🧐</p>
      <p class="my-10">Back to the <nuxt-link to="/">Home Page</nuxt-link>.</p>
    </div>

    <pre class="my-10"
      >{{ error }}
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: 'error'
    }
  }
}
</script>
