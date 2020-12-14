<template>
  <nav class="navbar is-light is-fixed-bottom" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item has-text-left logo" href="/">
        <img src="~/assets/images/scriptedPixelsLogo.svg" width="150" height="85" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="[isActive ? 'is-active' : '']"
        @click="toggleClass()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="[isActive ? 'is-active' : '']">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" exact :to="{ name: 'index' }">Home</nuxt-link>
        <nuxt-link class="navbar-item" :to="{ name: 'about' }">About</nuxt-link>
        <nuxt-link class="navbar-item" :to="{ name: 'work' }">Work</nuxt-link>
        <nuxt-link class="navbar-item" :to="{ name: 'blog' }">Blog</nuxt-link>
      </div>
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

<style scoped lang="scss">
.navbar {
  grid-area: navigation;
}
</style>
