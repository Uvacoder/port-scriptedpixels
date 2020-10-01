<template>
  <div>
    <h1>About: about page</h1>
    <h2>Netlify forms test</h2>
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
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
</template>

<script>
export default {}
</script>

<style></style>
