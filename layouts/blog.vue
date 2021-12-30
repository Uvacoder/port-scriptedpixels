<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/TheNavbar'
import Footer from '@/components/TheFooter'

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>
