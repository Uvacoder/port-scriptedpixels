<template>
  <div>
    <h1 class="title is-spaced">Latest posts from the blog</h1>
    <div class="columns is-multiline">
      <div v-for="post in blogPosts" :key="post.slug" class="column is-full">
        <div class="card">
          <div class="card-content">
            <h4 class="title is-size-4">
              <nuxt-link :to="`blog/${post.slug}`">
                {{ post.title }}
              </nuxt-link>
            </h4>
            <p class="subtsitle">Date pusblished: {{ post.date }}</p>
          </div>
        </div>
      </div>
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
