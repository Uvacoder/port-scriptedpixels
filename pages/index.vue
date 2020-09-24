<template>
  <div class="container">
    <h1>Scripted Pixels</h1>

    <div class="links">
      <h3>Latest posts from the blog</h3>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <nuxt-link :to="`/blog/${post.id}`">
            {{ post.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
export default {
  components: {},
  asyncData({ $axios }) {
    return $axios.get('http://jsonplaceholder.typicode.com/posts?_limit=20').then((response) => {
      return { posts: response.data }
    })
  },
  // computed: {
  //   posts() {
  //     return this.$store.state.posts.all
  //   },
  // },
  head() {
    return {
      title: 'Scripted Pixels | Home Page',
    }
  },
}
/* eslint-disable no-alert, no-console */
</script>

<style>
.links {
  margin: 30px auto 0;
}
</style>
