<template>
  <div>
    <section class="hero is-fullheight-with-navbar">
      <Navigation />
      <div class="hero-body">
        <div class="container">
          <div class="container has-text-centered">
            <img src="~/assets/images/scriptedPixelsLogo.png" alt="Scripted Pixels Logo" />
            <h2 class="subtitle">Design, Develop, Deliver</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
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
