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
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
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
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif, Arial, sans-serif;
  letter-spacing: 1px;
  display: block;
  font-size: 100px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
}
.links {
  padding-top: 15px;
}
</style>
