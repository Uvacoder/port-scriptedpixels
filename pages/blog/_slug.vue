<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ blogPost.title }}</h1>
          <p class="subtitle">date</p>
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
