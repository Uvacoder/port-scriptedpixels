<template>
  <section class="max-w-7xl mx-auto px-3 md:px-6 pt-12">
    <h3 class="text-3xl">About</h3>

    <section class="max-w-3xl mx-auto">
      <p>I'm an independent creative front-end developer.</p>
      <p>
        I work with companies to develop their website(s). Taking ideas from wireframes to prototypes toward a final
        product.
      </p>
      <p>
        I’m skilled in HTML, CSS (Sass), JavaScript (framework of choice is Vue), PHP CMS’ (Magento & WordPress), image
        editing (Sketch, Photoshop and Adobe XD). I also like to try new frameworks & tech-stacks.
      </p>
      <p>
        If you have a project that needs to be designed and/or built, if you need some help or advice, then please do
        contact me on on any of the following:
        <a href="https://www.twitter.com/scriptedpixels" target="_blank">Twitter</a>,
        <a href="https://linkedin.com/in/kambanwait" target="_blank">LinkedIn</a> or send me a message below:
      </p>

      <form
        name="contact"
        aria-disabled="disabled"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="mt-10 mb-20 max-w-lg"
      >
        <fieldset disabled>
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label for="name" class="block">Full name</label>
            <input
              type="text"
              name="name"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-sm border-gray-300"
              placeholder="Agent Smith"
              aria-label="Your full name"
            />
          </div>

          <div>
            <label for="email" class="block">Your Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-sm border-gray-300"
              aria-label="Your email address"
              placeholder="someone@domain.com"
            />
          </div>

          <div>
            <label for="message" class="block">Tell me a little about what you'd like help with</label>
            <textarea
              id="message"
              rows="3"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-sm"
              name="message"
              placeholder="Provide as much information as possible to help me, help you"
            />
          </div>

          <button
            type="submit"
            class="py-2 px-8 border border-transparent rounded-sm text-white focus:outline-none focus:ring-1 focus:ring-offset-1 mt-10"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  </section>
</template>

<script>
export default {}
</script>

<style>
label {
  @apply mt-5 mb-2;
}

button {
  @apply bg-brandGreen-700;
}
</style>
