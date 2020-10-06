<template>
  <div class="card">
    <div class="card-content">
      <h4 class="title is-size-4">
        <nuxt-link :to="`${postData.path}`">
          {{ postData.title }}
        </nuxt-link>
      </h4>
      <p class="subtsitle">Date pusblished: {{ postData.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['postData'],
}
</script>

<style></style>
