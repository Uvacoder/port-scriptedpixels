<template>
  <header class="fixed w-screen border-b border-gray-900 h-12 top-0 z-50 drop-shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-3">
      <div class="flex justify-center md:justify-end items-center py-3">
        <!-- <nuxt-link to="/">
          <img
            src="~/assets/images/scriptedpixelslogoInitial--white.svg"
            width="150"
            height="85"
            aria-hidden=""
            alt="Scripted Pixes Logo"
            class="w-10"
          />
        </nuxt-link> -->

        <nav role="navigation" aria-label="main navigation" class="text-white">
          <template :class="[isActive ? 'is-active' : '']">
            <nuxt-link class="tracking-widest mr-1 text-lg" exact :to="{ name: 'index' }">Home</nuxt-link>
            <nuxt-link class="tracking-widest mr-1 text-lg" :to="{ name: 'about' }">About</nuxt-link>
            <nuxt-link class="tracking-widest mr-1 text-lg" :to="{ name: 'work' }">Work</nuxt-link>
            <nuxt-link class="tracking-widest text-lg" :to="{ name: 'blog' }">Blog</nuxt-link>
          </template>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
header {
  background-color: var(--brand-grey);
}
</style>
