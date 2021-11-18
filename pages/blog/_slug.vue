<template>
  <section>
    <h4 class="title mb-0">{{ blogPost.title }}</h4>

    <p class="is-size-6">Date posted: {{ blogPost.date }}</p>

    <p v-if="blogPost.category" class="is-size-6">Category: {{ blogPost.category }}</p>

    <p v-if="blogPost.tags" class="tags has-addons is-size-6">
      Tags:
      <span v-for="tag in blogPost.tags" :key="tag" class="tag is-light mb-0 pr-0 is-size-6">{{ tag }}</span>
    </p>

    <div class="content">
      <nuxt-content :document="blogPost" />
    </div>
  </section>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ $content, params }) {
    const blogPost = await $content('blog', params.slug).fetch()

    return { blogPost }
  },
  layout: 'post',
  mounted() {
    Prism.highlightAll()
  },
}
</script>
