<template>
  <div>
    <section>
      <h3 class="title is-size-3 is-spaced p-0 mb-0">Latest projects I've worked on</h3>
    </section>
    <section>
      <div v-for="post in workPosts" :key="post.slug" class="column is-full">
        <ListItem :post-data="post" :route="path" />
      </div>
    </section>
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
  layout: 'post',
}
</script>
