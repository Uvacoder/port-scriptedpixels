<template>
  <section class="section grid-content">
    <div class="container">
      <h1 class="title">Latest posts from the blog</h1>
      <div class="links">
        <ul class="posts-list">
          <li v-for="post in posts" :key="post.id" class="posts-list-link">
            <nuxt-link :to="`/blog/${post.id}`">
              {{ post.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store }) {
    await store.dispatch('GET_POSTS')
  },
  computed: {
    ...mapState(['posts']),
  },
}
</script>
