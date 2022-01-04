<template>
  <section
    class="flex flex-col justify-center min-h-screen -mt-12 -mb-20 text-center"
  >
    <div class="mx-auto px-4 sm:px-3">
      <h2 class="text-center text-l text-white md:text-2xl my-0 mt-5 mb-10">
        Great success!
      </h2>
      <p>
        Thanks for getting in touch, I'll aim to get back to you as soon as I
        can.
      </p>

      <p>
        Back to the <nuxt-link to="/" class="underline">Home</nuxt-link> page.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Scripted Pixels: Success!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Your messasge has been sent, Thank you.'
        }
      ]
    }
  }
}
</script>

<style></style>
