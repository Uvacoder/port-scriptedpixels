<template>
  <div class="content">
    <h1 class="title is-spaced">{{ blogPost.title }}</h1>
    <nuxt-content :document="blogPost" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogPost = await $content('blog', params.slug).fetch()

    return { blogPost }
  },
}
</script>
