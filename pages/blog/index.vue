<template>
  <div>
    <h1>Blog: A list of the most recent blog posts, in bactches of 10</h1>
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
export default {
  asyncData({ $axios }) {
    return $axios.get('http://jsonplaceholder.typicode.com/posts?_limit=20').then((response) => {
      return { posts: response.data }
    })
  },
}
</script>

<style>
.links {
  margin: 30px auto 0;
}
</style>
