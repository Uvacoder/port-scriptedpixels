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
  computed: {
    posts() {
      return this.$store.state.posts.list // goes to store/posts.js and returns the state list array
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
