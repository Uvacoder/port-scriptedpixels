<template>
  <section class="flex max-w-7xl mx-auto px-3 md:px-6 pt-12">
    <ul class="mt-28 mb-16 max-w-3xl mx-auto w-full">
      <ListItem v-for="post in workPosts" :key="post.slug" :post-data="post" :route="path" />
    </ul>
  </section>
</template>

<script>
import ListItem from '~/components/ListItems'

export default {
  components: {
    ListItem
  },
  async asyncData({ $content, params, route }) {
    try {
      const workPosts = await $content('work', params.slug)
        .only(['title', 'date', 'description', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()

      const path = route.path

      return {
        workPosts,
        path
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      return false
    }
  },
  layout: 'blog'
}
</script>
