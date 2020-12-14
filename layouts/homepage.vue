<template>
  <div>
    <Navigation />
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="container has-text-centered">
            <img src="~/assets/images/scriptedPixelsLogo.svg" alt="The Scripted Pixels Logo" width="700" />
            <h2 class="subtitle is-size-6-mobile is-size-3 m-0">Design, Develop, Deliver</h2>
          </div>
        </div>
      </div>
    </section>
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
