<template>
  <div class="container">
    <h1>The blog layout:</h1>

    <div class="flex-layout">
      <div class="blog-content">
        <nuxt />
      </div>

      <aside>
        <!-- <h3>Related posts:</h3>
        <ul>
          <li v-for="related in relatedPosts" :key="related.id">
            <nuxt-link :to="'/blog/' + related.id">
              {{ related.title }}
            </nuxt-link>
          </li>
        </ul> -->
      </aside>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.flex-layout {
  justify-content: space-between;
  margin: 30px 0 0;
  display: flex;
}
.blog-content {
  margin: 0 20px 0 0;
  flex: 1 0 300px;
}
aside {
  background-color: rgba(255, 255, 255, 0.1);
  height: 100vh;
  min-width: 300px;
}
</style>
