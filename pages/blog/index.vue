<template>
  <section class="flex max-w-7xl mx-auto px-3 md:px-6 pt-12">
    <ul class="mt-28 mb-16 max-w-3xl mx-auto w-full">
      <ListItem
        v-for="post in blogPosts"
        :key="post.slug"
        :post-data="post"
        :route="path"
      />
    </ul>

    <!-- <aside class="mb-10 mt-28 mr-auto w-1/5">
      <h5 class="title mt-10 mb-1 text-xl">Stats</h5>
      <p>#{{ blogPosts.length }} Blogposts</p>

      <h5 class="title mt-10 mb-1 text-xl">Search</h5>
      <form>
        <fieldset>
          <input
            type="text"
            placeholder="Search the blog"
            aria-label="Search the blog"
          />
          <button type="submit">Search</button>
        </fieldset>
      </form>

      <h5 class="title -mt-0 mb-1 text-xl">Tags</h5>
      <ul>
        <li v-for="(tag, index) in tags" :key="tag + index" class="inline">
          {{ tag }},
        </li>
      </ul>
    </aside> -->
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
      const blogPosts = await $content('blog', params.slug)
        .only(['title', 'date', 'description', 'slug', 'category', 'tags'])
        .sortBy('date', 'desc')
        .fetch()

      const path = route.path

      // const allTags = blogPosts.map((post) => {
      //   const postTags = post.tags !== undefined ? post.tags : ''
      //   const filterdPostTags = postTags.filter(
      //     (postTag) => postTag !== undefined
      //   )

      //   return filterdPostTags
      // })

      // const tags = [...new Set(allTags.flat(1))]

      return {
        blogPosts,
        path
        // tags
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
  layout: 'blog'
}
</script>
