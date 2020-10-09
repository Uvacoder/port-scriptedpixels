<template>
  <nuxt-content :document="blogPost" />
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ $content, params }) {
    const blogPost = await $content('blog', params.slug).fetch()

    return { blogPost }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>
