<template>
  <ul class="my-10">
    <ListItem v-for="post in blogPosts" :key="post.slug" :post-data="post" :route="path" />
  </ul>
</template>

<script>
import ListItem from '~/components/ListItems'

export default {
  components: {
    ListItem,
  },
  async asyncData({ $content, params, route }) {
    const perPage = 10

    // eslint-disable-next-line no-console
    // console.log($content)
    // eslint-disable-next-line no-console
    // console.log(params)

    try {
      const blogPosts = await $content('blog', params.slug)
        .only(['title', 'date', 'description', 'slug', 'category', 'tags'])
        .sortBy('createdAt', 'desc')
        .limit(perPage)
        .fetch()

      const path = route.path

      return {
        blogPosts,
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
