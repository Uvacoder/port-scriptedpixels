<template>
  <img :src="imgSrc()" :alt="getAlt()" class="article-image" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (e) {
        return null
      }
    },
    getAlt() {
      try {
        return this.alt
      } catch (e) {
        return 'Please provide image alt text'
      }
    }
  }
}
</script>
