<template>
  <section class="mt-28 mb-16 max-w-3xl mx-auto w-full flex flex-wrap">
    <nuxt-img
      src="/KamBanwait.png"
      alt="Memoji of Kam Banwait waving"
      class="w-32 h-auto mb-5 md:mb-0"
      width="100"
      height="100"
    />

    <h3 class="m-0 text-3xl self-end">Hi there, I'm Kam Banwait</h3>

    <p class="mt-5">
      I'm a creative Front-end developer with over 10 years of experience
      building websites and applications for many companies.
    </p>

    <p>
      I’m proficient in HTML, CSS (<a
        href="https://sass-lang.com"
        target="_blank"
        >Sass</a
      >), JavaScript (multiple frameworks), CMS’s (Headless, Magento &
      WordPress), APIs, JamStack (<a href="#" target="_blank">wtf is jamstack</a
      >), and I can also design and edit images with the use of Sketch,
      Photoshop & Adobe XD.
    </p>

    <p>
      I'm in the process of updating the whole site but check out
      <a href="/work" class="underline">my work</a> for an idea of what I've
      developed.
    </p>

    <p>
      If you have a project that needs to be designed and/or built, if you need
      some help or advice, then please do contact me on on any of the following:
      <a href="https://www.twitter.com/scriptedpixels" target="_blank"
        >Twitter</a
      >,
      <a href="https://linkedin.com/in/kambanwait" target="_blank">LinkedIn</a>
      or send me a message below:
    </p>

    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="mb-20 max-w-lg"
      action="/success"
    >
      <fieldset>
        <input type="hidden" name="contact" value="contact" />

        <div>
          <label for="name" class="block">Full name</label>
          <input
            type="text"
            name="name"
            class="text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-sm border-gray-300"
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
            class="text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-sm border-gray-300"
            aria-label="Your email address"
            placeholder="someone@domain.com"
          />
        </div>

        <div>
          <label for="message" class="block"
            >Tell me a little about what you'd like help with</label
          >
          <textarea
            id="message"
            rows="3"
            class="text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-sm"
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
</template>

<script>
export default {
  data() {
    return {
      title: 'About Kam Banwait, Scripted Pixels Ltd',
      description:
        'About Kam Banwait, the developer behind Scripted Pixels Ltd.'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
}
</script>

<style>
label {
  @apply mt-5 mb-2;
}

button {
  @apply bg-brandGreen-700;
}
</style>
