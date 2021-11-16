<template>
  <div>
    <Navigation />
    <section class="max-w-7xl mx-auto px-4 sm:px-3 pt-12">
      <Nuxt />
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/TheNavbar'
import Footer from '@/components/TheFooter'

export default {
  components: {
    Navigation,
    Footer,
  },
}
</script>
