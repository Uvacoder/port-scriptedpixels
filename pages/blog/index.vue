<template>
  <div>
    <div class="links">
      <h3>Latest posts from the blog</h3>
      <ul class="posts-list">
        <li v-for="post in posts" :key="post.id" class="posts-list-link">
          <nuxt-link :to="`/blog/${post.id}`">
            {{ post.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('GET_POSTS')
  },
  computed: {
    // goes to store/index.js and returns the posts from state
    posts() {
      return this.$store.state.posts
    },
  },
  layout: 'blog',
}
</script>

<style>
.links {
  margin: 30px auto 0;
}
</style>
