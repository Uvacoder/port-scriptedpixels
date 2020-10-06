<template>
  <section class="section grid-content">
    <div class="container">
      <nuxt-content :document="blogPost" />
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogPost = await $content('blog', params.slug).fetch()

    return { blogPost }
  },
}
</script>

<style scoped></style>
