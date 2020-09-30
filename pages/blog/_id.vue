<template>
  <article class="container">
    <h1 class="title">{{ currentPost.title }}</h1>
    <p>
      <small>ID: {{ currentPost.id }}</small>
    </p>
    <p>
      <small>User: {{ currentPost.userId }}</small>
    </p>
    <p>{{ currentPost.body }}</p>
  </article>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, params }) {
    await store.dispatch('GET_CURRENT_POST', params.id)
  },
  computed: {
    ...mapState(['currentPost']),
  },
  layout: 'blog',
}
</script>

<style scoped></style>
