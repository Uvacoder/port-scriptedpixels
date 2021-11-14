<template>
  <nuxt-link :to="`${route}/${postData.slug}`">
    <h3 class="title">
      {{ postData.title }}
    </h3>
    <p class="subtitle">{{ postData.description }}</p>
    <p>Date published: {{ postData.date }}</p>
    <p v-if="postData.category">Category: {{ postData.category }}</p>
    <small v-if="postData.tags" class="tags has-addons is-size-6 mb-0">
      Tags:
      <span v-for="tag in postData.tags" :key="tag" class="tag is-white mb-0 pr-0 is-size-6">{{ tag }}</span>
    </small>
  </nuxt-link>
</template>

<script>
export default {
  props: ['postData', 'route'],
}
</script>
