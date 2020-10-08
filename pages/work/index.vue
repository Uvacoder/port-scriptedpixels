<template>
  <div>
    <h1 class="title is-spaced">Latest projects I've worked on</h1>
    <div class="columns is-multiline">
      <div v-for="post in workPosts" :key="post.slug" class="column is-full">
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
      const workPosts = await $content('work', params.slug)
        .only(['title', 'date', 'description', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch()

      const path = route.path

      return {
        workPosts,
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

<style></style>
