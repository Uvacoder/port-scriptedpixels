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
  computed: {
    posts() {
      return this.$store.state.posts.all
    },
  },
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
