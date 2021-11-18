<template>
  <section class="flex max-w-7xl mx-auto px-4 sm:px-3 pt-12">
    <ul class="my-10">
      <ListItem v-for="post in blogPosts" :key="post.slug" :post-data="post" :route="path" />
    </ul>
    <!-- <aside class="mb-10 w-2/5">
      <h5 class="title mt-10 mb-1 text-xl">Stats</h5>
      <p>#{{ blogPosts.length }} Blogposts</p>

      <h5 class="title mt-10 mb-1 text-xl">Search</h5>
      <form>
        <fieldset>
          <input type="text" placeholder="Search the blog" aria-label="Search the blog" />
          <button type="submit">Search</button>
        </fieldset>
      </form>

      <h5 class="title mt-10 mb-1 text-xl">Tags</h5>
      <p>Tags to be listed here</p>
    </aside> -->
  </section>
</template>

<script>
import ListItem from '~/components/ListItems'

export default {
  components: {
    ListItem,
  },
  async asyncData({ $content, params, route }) {
    // const perPage = 10

    try {
      const blogPosts = await $content('blog', params.slug)
        .only(['title', 'date', 'description', 'slug', 'category', 'tags'])
        .sortBy('createdAt', 'desc')
        // .limit(perPage)
        .fetch()

      const path = route.path

      // const tags = blogPosts.map((post) => {
      // const postTags = post.tags !== undefined ? post.tags : ''

      // eslint-disable-next-line no-console
      // console.log(postTags)

      // const filterdPostTags = postTags.filter((postTag) => postTag !== undefined)

      // return filterdPostTags
      // })

      // eslint-disable-next-line no-console
      // console.log(tags.flat(1))

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
  methods: {
    // listTags(tags) {},
  },
  layout: 'blog',
}
</script>
