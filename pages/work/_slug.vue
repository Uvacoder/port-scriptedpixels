<template>
  <section>
    <h4 class="mt-28 mb-16 text-4xl mx-auto text-center">{{ workPost.title }}</h4>

    <section class="my-10 p-2 pb-0 rounded-sm text-sm border border-gray-700 max-w-3xl mx-auto">
      <p class="mb-2"><span class="font-semibold">Date posted:</span> {{ workPost.date }}</p>

      <p v-if="workPost.tags" class="mb-2">
        <span class="font-semibold">Tags:</span>
        <span v-for="(tag, i) in workPost.tags" :key="tag + i" :class="i + 1 == tagsTotal ? '' : 'mr-2'"
          >{{ tag }}{{ i + 1 == tagsTotal ? '' : ',' }}</span
        >
      </p>
    </section>

    <nuxt-content class="max-w-3xl mx-auto" :document="workPost" />
  </section>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ $content, params, error }) {
    try {
      const workPost = await $content('work', params.slug).fetch()

      return { workPost }
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
      return this.workPost.tags.length
    }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
