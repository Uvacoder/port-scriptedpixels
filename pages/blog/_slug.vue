<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title mb-0">{{ blogPost.title }}</h1>
          <p class="is-size-6">Date posted: {{ blogPost.date }}</p>
          <p v-if="blogPost.category" class="is-size-6">Category: {{ blogPost.category }}</p>
          <p v-if="blogPost.tags" class="tags has-addons is-size-6">
            Tags:
            <span v-for="tag in blogPost.tags" :key="tag" class="tag is-light mb-0 pr-0 is-size-6">{{ tag }}</span>
          </p>
        </div>
      </div>
    </section>
    <section class="section grid-content container">
      <div class="content">
        <nuxt-content :document="blogPost" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogPost = await $content('blog', params.slug).fetch()

    return { blogPost }
  },
  layout: 'post',
}
</script>
