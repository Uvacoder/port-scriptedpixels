<template>
  <ul class="my-10">
    <ListItem v-for="post in workPosts" :key="post.slug" :post-data="post" :route="path" />
  </ul>
</template>

<script>
import ListItem from '~/components/ListItems'

export default {
  components: {
    ListItem,
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
        path,
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      return false
    }
  },
}
</script>
