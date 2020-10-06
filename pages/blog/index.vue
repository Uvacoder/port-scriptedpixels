<template>
  <div>
    <h1 class="title">Latest posts from the blog</h1>
    <div class="links">
      <ul class="posts-list">
        <li v-for="post in blogPosts" :key="post.date" class="posts-list-link">
          <!-- <nuxt-link :to="`/blog/${post.id}`"> -->
          {{ post.title }}
          <!-- </nuxt-link> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  // async fetch({ store }) {
  //   await store.dispatch('GET_POSTS')
  // },
  async asyncData({ $content, params }) {
    const blogPosts = await $content('blog', params.slug).only(['title', 'description']).sortBy('date', 'asc').fetch()

    console.log(blogPosts)

    return {
      blogPosts,
    }
  },
  // computed: {
  //   ...mapState(['posts']),
  // },
}
</script>
