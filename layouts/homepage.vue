<template>
  <div>
    <Navigation />

    <section class="flex flex-col justify-center h-screen">
      <div class="mx-auto px-4 sm:px-3">
        <img src="../assets/images/scriptedpixels-logo--white.svg" alt="" />
        <h2 ref="subHeading" class="text-center text-l text-white md:text-2xl my-0 mt-5">Design, Develop, Deliver</h2>
      </div>
    </section>

    <!-- main content  -->
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
