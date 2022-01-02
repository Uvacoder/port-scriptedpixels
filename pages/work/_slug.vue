<template>
  <section>
    <h4 class="mt-32 mb-20 text-3xl md:text-6xl mx-auto text-center">
      {{ workPost.title }}
    </h4>

    <section
      class="my-10 p-2 pb-0 rounded-sm border border-gray-700 max-w-3xl mx-auto"
    >
      <p class="mb-2 text-sm">
        <span class="font-semibold">Date worked:</span> {{ formattedDate }}
      </p>

      <p v-if="workPost.tags" class="mb-2 text-sm">
        <span class="font-semibold">Tags:</span>
        <span
          v-for="(tag, i) in workPost.tags"
          :key="tag + i"
          :class="i + 1 == tagsTotal ? '' : 'mr-2'"
          >{{ tag }}{{ i + 1 == tagsTotal ? '' : ',' }}</span
        >
      </p>
    </section>

    <nuxt-content class="max-w-3xl mx-auto" :document="workPost" />

    <prev-next :prev="prev" :next="next" />
  </section>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ $content, params, error }) {
    try {
      const workPost = await $content('work', params.slug).fetch()
      const [prev, next] = await $content('work')
        .only('title', 'slug')
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return { workPost, prev, next }
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
    },
    formattedDate() {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      const dateTimeFormat = new Intl.DateTimeFormat('en-gb', options)
      const date = new Date(this.workPost.date)
      const formatDate = dateTimeFormat.format(date)

      return formatDate
    }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
