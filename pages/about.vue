<template>
  <div>
    <h3 class="text-3xl">About</h3>
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
      class="my-10"
    >
      <fieldset disabled>
        <input type="hidden" name="form-name" value="contact" />

        <div class="field">
          <label for="name" class="label">Your full name:</label>
          <div class="control">
            <input class="input" type="text" name="name" placeholder="Text input" aria-label="Your full name" />
          </div>
        </div>

        <div class="field">
          <label for="email" class="label">Your Email address:</label>
          <div class="control">
            <input class="input" type="email" name="email" placeholder="Text input" aria-label="Your email address" />
          </div>
        </div>

        <div class="field">
          <label for="message" class="label">Tell me a little about what you'd like help with:</label>
          <div class="control">
            <textarea
              class="textarea"
              name="message"
              placeholder="Provide as much information as possible to help me, help you"
            ></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {}
</script>
