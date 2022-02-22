<template>
  <section
    class="flex flex-wrap md:flex-nowrap gap-10 max-w-7xl mx-auto px-3 md:px-6 pt-12"
  >
    <aside class="mt-10 w-full md:w-1/5">
      <h5 class="title mt-0 mb-4 text-xl">Filter posts:</h5>
      <ul>
        <li
          v-for="(tag, index) in tags"
          :key="tag + index"
          class="inline mr-2 mb-2 md:block hover:cursor-pointer md:mb-1 md:mr-0"
          :data-tag="tag"
          :class="selectedTag == tag ? 'font-bold' : ''"
          @click="setTag"
        >
          {{ tag }}
        </li>
      </ul>

      <h5 class="title mt-10 mb-1 text-l">Stats</h5>
      <p class="text-sm">{{ filteredBlogPosts.length }} Blogpost(s)</p>
    </aside>

    <ul class="md:mt-10 w-full md:w-4/5">
      <ListItem
        v-for="post in filteredBlogPosts"
        :key="post.slug"
        :post-data="post"
        :route="path"
      />
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
      const blogPosts = await $content('blog', params.slug)
        .only(['title', 'date', 'description', 'slug', 'category', 'tags'])
        .sortBy('date', 'desc')
        .fetch()

      const path = route.path

      const allTags = blogPosts.map((post) => {
        const postTags = post.tags !== undefined ? post.tags : ''

        const filterdPostTags = postTags.filter((postTag) => {
          return postTag !== undefined
        })

        return filterdPostTags
      })

      const tags = [...new Set(allTags.flat(1))]

      return {
        blogPosts,
        path,
        tags
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      return false
    }
  },
  data() {
    return {
      tags: [],
      selectedTag: ''
    }
  },
  computed: {
    filteredBlogPosts() {
      const filteredPosts = this.blogPosts.filter((blogpost) => {
        // eslint-disable-next-line no-console
        if (!this.selectedTag || this.selectedTag.length === 0) return blogpost

        if (blogpost.tags.includes(this.selectedTag)) {
          return blogpost
        }
      })

      return filteredPosts
    }
  },
  methods: {
    //   listTags(tags) {}
    setTag(event) {
      this.selectedTag = event.target.getAttribute('data-tag')
    }
  },
  layout: 'blog'
}
</script>
