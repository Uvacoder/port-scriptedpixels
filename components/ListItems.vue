<template>
  <nuxt-link :to="`${route}/${postData.slug}`">
    <h3 class="title">
      {{ postData.title }}
    </h3>
    <p class="subtitle">{{ postData.description }}</p>
    <p class="is-light">Date published: {{ postData.date }}</p>
    <p v-if="postData.category" class="is-light">Category: {{ postData.category }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: ['postData', 'route'],
}
</script>
