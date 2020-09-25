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
/* eslint-disable no-alert, no-console */
export default {
  asyncData({ $axios, route }) {
    return $axios.get(`http://jsonplaceholder.typicode.com/posts/${route.params.id}`).then((response) => {
      return { post: response.data }
    })
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
/* eslint-disable no-alert, no-console */
</script>

<style scoped></style>
