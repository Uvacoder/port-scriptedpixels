<template>
  <div>
    <TheNavbar />

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
  </div>
</template>

<script>
export default {}
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
  flex: 1 0 420px;
}
aside {
  background-color: rgba(255, 255, 255, 0.1);
  min-height: 100px;
  min-width: 300px;
  flex: 1 1 300px;
}
</style>
