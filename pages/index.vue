<template>
  <div class="container is-fluid">
    <div class="columns">
      <div class="column m-2">
        <h3 class="title title--with-bottom-border title--border-danger is-spaced">Design</h3>
        <h4 class="subtitle">Wireframes, Sketch, Prototypes</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi corporis eveniet ipsam blanditiis in amet,
          eligendi, optio earum totam similique eius nostrum. Voluptatem facilis possimus saepe molestias nisi cum.
        </p>
      </div>

      <div class="column m-2">
        <h3 class="title title--with-bottom-border title--border-link is-spaced">Develop</h3>
        <h4 class="subtitle">Coding, iterate, create</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi corporis eveniet ipsam blanditiis in amet,
          eligendi, optio earum totam similique eius nostrum. Voluptatem facilis possimus saepe molestias nisi cum.
        </p>
      </div>

      <div class="column m-2">
        <h3 class="title title--with-bottom-border title--border-success is-spaced">Deliver</h3>
        <h4 class="subtitle">Deploy, release, production</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi corporis eveniet ipsam blanditiis in amet,
          eligendi, optio earum totam similique eius nostrum. Voluptatem facilis possimus saepe molestias nisi cum.
        </p>
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

<style scoped lang="scss">
.columns {
  align-items: stretch;
}
</style>
