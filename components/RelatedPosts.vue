<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <nuxt-link :to="'/blog/' + post.id">
        {{ post.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['posts']),
  },
}
</script>

<style scoped></style>
