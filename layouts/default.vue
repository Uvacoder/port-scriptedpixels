<template>
  <div class="grid-container">
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
import Navigation from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    Navigation,
    TheFooter,
  },
}
</script>

<style scoped></style>
