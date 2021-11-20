<template>
  <section>
    <h4 class="mt-28 mb-16 text-4xl mx-auto">{{ blogPost.title }}</h4>

    <section class="my-10 p-2 pb-0 rounded-sm text-sm border border-gray-700 max-w-3xl mx-auto">
      <p class="mb-2"><span class="font-semibold">Date posted:</span> {{ blogPost.date }}</p>

      <p v-if="blogPost.category" class="mb-2"><span class="font-semibold">Category:</span> {{ blogPost.category }}</p>

      <p v-if="blogPost.tags" class="mb-2">
        <span class="font-semibold">Tags:</span>
        <span v-for="(tag, i) in blogPost.tags" :key="tag + i" :class="i + 1 == tagsTotal ? '' : 'mr-2'"
          >{{ tag }}{{ i + 1 == tagsTotal ? '' : ',' }}</span
        >
      </p>
    </section>

    <nuxt-content :document="blogPost" class="max-w-3xl mx-auto" />
  </section>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ $content, params, error }) {
    try {
      const blogPost = await $content('blog', params.slug).fetch()

      return { blogPost }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
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
