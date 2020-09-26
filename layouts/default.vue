<template>
  <div>
    <Navigation />

    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/TheNavbar'

export default {
  components: {
    Navigation,
  },
}
</script>

<style scoped></style>
