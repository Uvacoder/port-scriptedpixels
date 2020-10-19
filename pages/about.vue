<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h3 class="title is-size-3 is-spaced p-0 mb-0">About</h3>
          <h4 class="subtitle p-0 mb-0">.....</h4>
        </div>
      </div>
    </section>

    <section class="section grid-content container">
      <div class="columns">
        <div class="column">
          <div class="content">
            <p>Have this on the right hand side on desktop</p>
            <h4 class="subtitle">Contact Scripted Pixels?</h4>
          </div>
        </div>

        <div class="column is-two-fifths">
          <div class="content">
            <h4>Netlify forms test</h4>

            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
              <fieldset>
                <input type="hidden" name="form-name" value="contact" />

                <div class="field">
                  <label for="name" class="label">Name</label>
                  <div class="control">
                    <input class="input" type="text" name="name" placeholder="Text input" aria-label="Your name" />
                    <p class="help">This is a help text</p>
                  </div>
                </div>

                <div class="field">
                  <label for="email" class="label">Your Email:</label>
                  <div class="control">
                    <input class="input" type="email" name="email" placeholder="Text input" aria-label="Your email" />
                    <p class="help">This is a help text</p>
                  </div>
                </div>

                <div class="field">
                  <label for="message" class="label">Message</label>
                  <div class="control">
                    <textarea class="textarea" name="message" placeholder="Your message"></textarea>
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'about',
}
</script>

<style></style>
