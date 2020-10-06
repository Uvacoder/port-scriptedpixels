<template>
  <div>
    <h1 class="title">Latest posts from the blog</h1>
    <div class="links">
      <ul class="posts-list">
        <li v-for="post in blogPosts" :key="post.slug" class="posts-list-link">
          <nuxt-link :to="`/blog/${post.slug}`">
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
    const blogPosts = await $content('blog', params.slug)
      .only(['title', 'date', 'description', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      blogPosts,
    }
  },
}
</script>
