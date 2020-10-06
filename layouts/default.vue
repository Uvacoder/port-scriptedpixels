<template>
  <div>
    <Navigation />
    <section class="section grid-content container is-fluid">
      <Nuxt />
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
