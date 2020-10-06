<template>
  <div class="container py-6 is-fluid">
    <div class="columns">

      <div class="column has-background-warning-light m-2">
          <h3 class="title">Design</h3>
          <h4 class="subtitle">Wireframes, Sketch, Prototypes</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi corporis eveniet ipsam blanditiis in amet,
            eligendi, optio earum totam similique eius nostrum. Voluptatem facilis possimus saepe molestias nisi cum.
          </p>
      </div>

      <div class="column has-background-link-light m-2">
          <h3 class="title">Develop</h3>
          <h4 class="subtitle">Coding, iterate, create</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi corporis eveniet ipsam blanditiis in amet,
            eligendi, optio earum totam similique eius nostrum. Voluptatem facilis possimus saepe molestias nisi cum.
          </p>
      </div>

      <div class="column has-background-success-light m-2">
          <h3 class="title">Deliver</h3>
          <h4 class="subtitle">Deploy, release, production</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi corporis eveniet ipsam blanditiis in amet,
            eligendi, optio earum totam similique eius nostrum. Voluptatem facilis possimus saepe molestias nisi cum.
          </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Scripted Pixels | Home Page',
    }
  },
  layout: 'homepage',
}
</script>

<style scoped>
.tile {
  height: 20vh;
}
.columns {
  align-items: stretch;
}
</style>
