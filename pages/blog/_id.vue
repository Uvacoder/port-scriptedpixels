<template>
  <article class="container">
    <h1 class="title">{{ post.title }}</h1>
    <p>
      <small>ID: {{ post.id }}</small>
    </p>
    <p>
      <small>User: {{ post.userId }}</small>
    </p>
    <p>{{ post.body }}</p>
  </article>
</template>

<script>
export default {
  async fetch({ store, route }) {
    await store.dispatch('GET_POST', route.params.id)
  },
  computed: {
    // goes to store/index.js and returns the post from state
    post() {
      return this.$store.state.post
    },
  },
  layout: 'blog',
  head() {
    return {
      title: `Scripted Pixels | ${this.post.title}`,
      meta: [
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.post.content },
      ],
    }
  },
}
</script>

<style scoped></style>
