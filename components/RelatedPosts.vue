<template>
  <ul class="posts-list">
    <li v-for="post in posts" :key="post.id" class="posts-list-link">
      <nuxt-link :to="'/blog/' + post.id">
        {{ post.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default() {},
    },
  },
}
</script>

<style scoped></style>
