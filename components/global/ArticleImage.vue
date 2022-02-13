<template>
  <div>
    <img :src="imgSrc()" :alt="getAlt()" class="article-image mb-5 shadow-lg" />
    <div>
      <p class="my-5 text-center text-sm w-100"><slot name="caption"></slot></p>
    </div>
  </div>
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
