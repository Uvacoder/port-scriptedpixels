<template>
  <section class="section grid-content">
    <div class="container">
      <div class="flex-layout">
        <article class="container blog-content">
          <h1 class="title">{{ currentProject.title.rendered }}</h1>
          <small>Published on: {{ currentProject.date }}</small>
          <div v-html="currentProject.content.rendered"></div>
        </article>

        <!-- <aside>
          <h3>Related posts:</h3>
          <RelatedPosts :posts="relatedPosts" />
        </aside> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('work/GET_PROJECTS')
    await store.dispatch('work/GET_CURRENT_PROJECT', params.id)
  },
  computed: {
    currentProject() {
      return this.$store.state.work.currentProject
    },
  },
}
</script>

<style></style>
