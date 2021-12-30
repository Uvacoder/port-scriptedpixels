<template>
  <section class="mt-28 mb-16 max-w-3xl mx-auto w-full">
    <h3 class="mt-0 mb-4 text-3xl">Hi there, I'm Kam Banwait</h3>

    <p>
      I'm a creative Front-end developer with over 10 years of experience building websites and applications for many
      companies.
    </p>

    <p>
      I’m proficient in HTML, CSS (<a href="https://sass-lang.com" target="_blank">Sass</a>), JavaScript (multiple
      frameworks), CMS’s (Headless, Magento & WordPress), APIs, JamStack (<a href="#" target="_blank">wtf is
      jamstack</a>), and I can also  design and edit images with the use of Sketch, Photoshop & Adobe XD.
    </p>

    <p>I'm in the process of updating the whole site but check out <a href="/work" class="underline">my work</a> for an
      idea of what I've developed.
    </p>

    <p>
      If you have a project that needs to be designed and/or built, if you need some help or advice, then please do
      contact me on on any of the following: <a href="https://www.twitter.com/scriptedpixels" target="_blank">Twitter
    </a>, <a href="https://linkedin.com/in/kambanwait" target="_blank">LinkedIn</a> or send me a message below:
    </p>

    <em class="text-red-500">Form is currently disabled</em>

    <form
      name="contact"
      aria-disabled="disabled"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="mb-20 max-w-lg"
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
