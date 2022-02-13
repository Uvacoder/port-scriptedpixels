<template>
  <div class="my-10 pb-4 px-3 rounded-sm border border-gray-900 shadow-lg">
    <p class="my-2">{{ message }}</p>

    <input
      v-model="message"
      aria-label="Message input"
      class="text-black p-2"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello You!'
    }
  }
}
</script>
