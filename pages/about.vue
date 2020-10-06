<template>
  <div>
    <div class="content">
      <h1 class="title is-spaced">About Scripted Pixels</h1>

      <h4 class="subtitle">Who's behind Scripted Pixels?</h4>

      <p class="">I'm a ...</p>
    </div>

    <div class="content">
      <p>Have this on the right hand side on desktop</p>
      <h4 class="subtitle">Contact Scripted Pixels?</h4>
    </div>

    <div class="content">
      <h4>Netlify forms test</h4>

      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
        <fieldset>
          <input type="hidden" name="form-name" value="contact" />

          <div class="field">
            <label for="name" class="label">Name</label>
            <div class="control">
              <input class="input" type="text" name="name" placeholder="Text input" />
              <p class="help">This is a help text</p>
            </div>
          </div>

          <div class="field">
            <label for="email" class="label">Your Email:</label>
            <div class="control">
              <input class="input" type="email" name="email" placeholder="Text input" />
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
</template>

<script>
export default {}
</script>

<style></style>
