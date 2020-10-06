<template>
  <div>
    <Navigation />
    <section class="section grid-content">
      <div class="container is-fluid">
        <Nuxt />
      </div>
    </section>
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
