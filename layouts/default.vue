<template>
  <div>
    <Navigation />
    <section class="max-w-7xl mx-auto px-3 md:px-6 pt-12">
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
