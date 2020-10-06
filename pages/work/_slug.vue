<template>
  <nuxt-content :document="workPost" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const workPost = await $content('work', params.slug).fetch()

    return { workPost }
  },
}
</script>
