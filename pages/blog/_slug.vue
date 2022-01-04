<template>
  <section>
    <h1 class="mt-32 mb-20 text-3xl md:text-6xl mx-auto text-center">
      {{ blogPost.title }}
    </h1>

    <section
      class="my-10 pt-2 px-3 rounded-sm border border-gray-700 max-w-3xl mx-auto"
    >
      <p class="mb-2 text-sm">
        <span class="font-semibold">Date posted:</span> {{ blogPost.date }}
      </p>

      <p v-if="blogPost.category" class="mb-2 text-sm">
        <span class="font-semibold">Category:</span> {{ blogPost.category }}
      </p>

      <p v-if="blogPost.tags" class="mb-2 text-sm">
        <span class="font-semibold">Tags:</span>
        <span
          v-for="(tag, i) in blogPost.tags"
          :key="tag + i"
          :class="i + 1 == tagsTotal ? '' : 'mr-2'"
          >{{ tag }}{{ i + 1 == tagsTotal ? '' : ',' }}</span
        >
      </p>
    </section>

    <nuxt-content :document="blogPost" class="max-w-3xl mx-auto" />

    <prev-next :prev="prev" :next="next" />
  </section>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ $content, params, error }) {
    try {
      const blogPost = await $content('blog', params.slug).fetch()
      const [prev, next] = await $content('blog')
        .only('title', 'slug', 'date')
        .sortBy('date', 'asc')
        .surround(params.slug)
        .fetch()

      return { blogPost, prev, next }
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
