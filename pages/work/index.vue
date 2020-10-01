<template>
  <div>
    <h1>Work: home page to list out most recent projects I've worked on</h1>
    <ul class="posts-list">
      <li v-for="project in projects" :key="project.id">
        <h2>{{ project.title.rendered }}</h2>
        <small v-html="project.excerpt.rendered"></small>
        <nuxt-link :to="`/work/${project.id}`">Read more...</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('work/GET_PROJECTS')
  },
  computed: {
    projects() {
      return this.$store.state.work.projects
    },
  },
}
</script>

<style></style>
