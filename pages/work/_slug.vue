<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-3">
    <nuxt-content :document="workPost" />
  </section>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ $content, params }) {
    const workPost = await $content('work', params.slug).fetch()

    return { workPost }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>
