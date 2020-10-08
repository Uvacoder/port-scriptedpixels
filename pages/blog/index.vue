<template>
  <div>
    <h1 class="title is-spaced">Latest posts from the blog</h1>
    <div class="columns is-multiline">
      <div v-for="post in blogPosts" :key="post.slug" class="column is-full">
        <ListItem :post-data="post" :route="path" />
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '~/components/ListItems'

export default {
  components: {
    ListItem,
  },
  async asyncData({ $content, params, route }) {
    try {
      const blogPosts = await $content('blog', params.slug)
        .only(['title', 'date', 'description', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch()

      const path = route.path

      return {
        blogPosts,
        path,
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      return false
    }
  },
}
</script>
