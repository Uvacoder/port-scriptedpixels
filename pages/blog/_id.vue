<template>
  <div class="flex-layout">
    <article class="container blog-content">
      <h1 class="title">{{ currentPost.title }}</h1>
      <p>
        <small>ID: {{ currentPost.id }}</small>
      </p>
      <p>
        <small>User: {{ currentPost.userId }}</small>
      </p>
      <p>{{ currentPost.body }}</p>
    </article>

    <aside>
      <h3>Related posts:</h3>
      <RelatedPosts :posts="relatedPosts" />
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RelatedPosts from '@/components/RelatedPosts'

export default {
  components: {
    RelatedPosts,
  },
  async fetch({ store, params }) {
    await store.dispatch('GET_POSTS', params.id)
    await store.dispatch('GET_CURRENT_POST', params.id)
  },
  computed: {
    ...mapState(['currentPost', 'posts']),
    relatedPosts() {
      return this.posts.filter((p) => p.id !== this.currentPost.id)
    },
  },
  layout: 'blog',
  transition: 'test',
}
</script>

<style scoped></style>
