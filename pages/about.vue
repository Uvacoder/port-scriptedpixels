<template>
  <section class="section grid-content">
    <div class="container">
      <h1 class="title">About</h1>
      <h2>Netlify forms test</h2>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label for="name">Your Name:</label>
          <input type="text" name="name" />
        </p>
        <p>
          <label for="email">Your Email:</label>
          <input type="email" name="email" />
        </p>
        <p>
          <label for="role[]">Your Role:</label>
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </p>
        <p>
          <label for="message">Message:</label>
          <textarea name="message"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
