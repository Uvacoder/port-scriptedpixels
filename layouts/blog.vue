<template>
  <div>
    <Navigation />
    <div class="container">
      <h1>Blog: A list of the most recent blog posts, in pages of 10</h1>

      <div class="flex-layout">
        <div class="blog-content">
          <nuxt />
        </div>

        <aside>
          <h3>Related posts:</h3>
          <RelatedPosts />
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/TheNavbar'
import RelatedPosts from '@/components/RelatedPosts'

export default {
  components: {
    Navigation,
    RelatedPosts,
  },
}
</script>

<style scoped>
.flex-layout {
  justify-content: space-between;
  flex-direction: row;
  margin: 30px 0 0;
  flex-wrap: wrap;
  display: flex;
}
.blog-content {
  margin: 0 20px 0 0;
  flex: 1 1 420px;
}
aside {
  background-color: rgba(255, 255, 255, 0.1);
  min-height: 100px;
  min-width: 300px;
  flex: 1 1 300px;
}
</style>
