<template>
  <div class="grid-container">
    <Navigation />
    <Nuxt />
    <TheFooter />
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
