<template>
  <nuxt-content :document="blogPost" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogPost = await $content('blog', params.slug).fetch()

    return { blogPost }
  },
}
</script>
