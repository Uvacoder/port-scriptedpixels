<template>
  <section class="my-10">
    <h4 class="my-10 text-4xl">{{ blogPost.title }}</h4>

    <section class="my-10 p-2 rounded-sm text-sm border border-gray-700">
      <p class="mb-2"><span class="font-semibold">Date posted:</span> {{ blogPost.date }}</p>

      <p v-if="blogPost.category" class="mb-2"><span class="font-semibold">Category:</span> {{ blogPost.category }}</p>

      <p v-if="blogPost.tags" class="mb-1">
        <span class="font-semibold">Tags:</span>
        <span v-for="(tag, i) in blogPost.tags" :key="tag + i" :class="i + 1 == tagsTotal ? '' : 'mr-2'"
          >{{ tag }}{{ i + 1 == tagsTotal ? '' : ',' }}</span
        >
      </p>
    </section>

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
