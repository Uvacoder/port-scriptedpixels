<template>
  <div>
    <TheNavbar />

    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'

export default {
  components: {
    TheNavbar,
  },
}
</script>

<style scoped></style>
