<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <a href="#">
      <p aria-hidden class="hidden">Scripted Pixels</p>
      <img src="~/assets/images/scriptedPixelsLogo.svg" width="150" height="85" aria-hidden alt="Scripted Pixes Logo" />
    </a>

    <div class="navbar-menu" :class="[isActive ? 'is-active' : '']">
      <nuxt-link class="navbar-item" exact :to="{ name: 'index' }">Home</nuxt-link>
      <nuxt-link class="navbar-item" :to="{ name: 'about' }">About</nuxt-link>
      <nuxt-link class="navbar-item" :to="{ name: 'work' }">Work</nuxt-link>
      <nuxt-link class="navbar-item" :to="{ name: 'blog' }">Blog</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive
    },
  },
}
</script>
