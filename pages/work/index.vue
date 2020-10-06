<template>
  <div>
    <h1 class="title is-spaced">Work: list out most recent projects I've worked on</h1>
    <div class="columns is-multiline">
      <div v-for="post in workPosts" :key="post.slug" class="column is-full">
        <ListItem :post-data="post" />
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
  async asyncData({ $content, params }) {
    const workPosts = await $content('work', params.slug)
      .only(['title', 'date', 'description', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      workPosts,
    }
  },
}
</script>

<style></style>
