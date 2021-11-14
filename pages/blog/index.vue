<template>
  <section>
    <div class="mx-auto px-4 sm:px-3">
      <div class="hero-body">
        <div class="container">
          <h3 class="title is-size-3 is-spaced p-0 mb-0">The Blog</h3>
        </div>
      </div>
      <div class="content">
        <div class="columns is-multiline">
          <div v-for="post in blogPosts" :key="post.slug" class="column is-full mb-6">
            <ListItem :post-data="post" :route="path" />
          </div>
        </div>
      </div>
    </div>
  </section>
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
