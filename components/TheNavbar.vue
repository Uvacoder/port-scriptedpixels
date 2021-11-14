<template>
  <header class="fixed w-screen border-b-2 border-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-3">
      <div class="flex justify-between items-center py-3">
        <nuxt-link to="/">
          <img
            src="~/assets/images/scriptedpixelslogoInitial--white.svg"
            width="150"
            height="85"
            aria-hidden=""
            alt="Scripted Pixes Logo"
            class="w-12 md:w-20"
          />
        </nuxt-link>

        <nav role="navigation" aria-label="main navigation">
          <div class="text-white" :class="[isActive ? 'is-active' : '']">
            <nuxt-link class="tracking-widest" exact :to="{ name: 'index' }">Home</nuxt-link>
            <nuxt-link class="tracking-widest" :to="{ name: 'about' }">About</nuxt-link>
            <nuxt-link class="tracking-widest" :to="{ name: 'work' }">Work</nuxt-link>
            <nuxt-link class="tracking-widest" :to="{ name: 'blog' }">Blog</nuxt-link>
          </div>
        </nav>
      </div>
    </div>
  </header>
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

<style>
header {
  background-color: var(--brand-grey);
}
</style>
