<template>
  <nuxt-link :to="`${route}/${postData.slug}`">
    <h3 class="title">
      {{ postData.title }}
    </h3>
    <p class="subtitle">{{ postData.description }}</p>
    <p class="is-light">Date pusblished: {{ postData.date }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: ['postData', 'route'],
}
</script>
