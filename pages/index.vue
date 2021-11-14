<template>
  <section class="flex flex-col justify-center h-screen">
    <!-- <div class="column">
        <h3 class="title title--with-bottom-border title--border-danger is-spaced">Design</h3>
        <h4 class="subtitle">Wireframes, Sketch, Prototypes</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi corporis eveniet ipsam blanditiis in amet,
          eligendi, optio earum totam similique eius nostrum. Voluptatem facilis possimus saepe molestias nisi cum.
          <br />
          {{ test }}
        </p>
      </div>

      <div class="column">
        <h3 class="title title--with-bottom-border title--border-link is-spaced">Develop</h3>
        <h4 class="subtitle">Coding, iterate, create</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi corporis eveniet ipsam blanditiis in amet,
          eligendi, optio earum totam similique eius nostrum. Voluptatem facilis possimus saepe molestias nisi cum.
        </p>
      </div>

      <div class="column">
        <h3 class="title title--with-bottom-border title--border-success is-spaced">Deliver</h3>
        <h4 class="subtitle">Deploy, release, production</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi corporis eveniet ipsam blanditiis in amet,
          eligendi, optio earum totam similique eius nostrum. Voluptatem facilis possimus saepe molestias nisi cum.
        </p>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  asyncData({ $config }) {
    // eslint-disable-next-line no-console
    const test = $config.apiSecret
  },
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
