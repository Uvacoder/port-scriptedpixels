<template>
  <div>
    <h1 class="title is-spaced">Work: list out most recent projects I've worked on</h1>
    <div class="links">
      <ul class="posts-list">
        <li v-for="post in workPosts" :key="post.slug" class="posts-list-link">
          <nuxt-link :to="`/work/${post.slug}`">
            {{ post.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const workPosts = await $content('work', params.slug)
      .only(['title', 'date', 'description', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      workPosts,
    }
  },
}
</script>

<style></style>
