<template>
  <div>
    <Navigation />
    <Nuxt />
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

<style lang="scss" scoped>
.logo-container {
  margin: 0 auto 20px;
  max-width: 700px;
}

.subtitle {
  font-weight: 100;
  opacity: 1;
}
</style>
