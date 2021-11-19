<template>
  <section>

    <p class="is-size-6">Date posted: {{ blogPost.date }}</p>

    <p v-if="blogPost.category" class="is-size-6">Category: {{ blogPost.category }}</p>

    <p v-if="blogPost.tags" class="tags has-addons is-size-6">
      Tags:
      <span v-for="tag in blogPost.tags" :key="tag" class="tag is-light mb-0 pr-0 is-size-6">{{ tag }}</span>
    </p>

    <nuxt-content :document="blogPost" />
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
  computed: {
    tagsTotal() {
      return this.blogPost.tags.length
    }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
