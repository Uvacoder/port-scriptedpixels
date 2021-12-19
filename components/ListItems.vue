<template>
  <li class="mb-20">
    <a
      v-if="postData.archivedLink"
      target="_blank"
      rel="noopener noreferrer"
      :href="postData.archivedLink"
      title="postData.title"
    >
      <h4 class="mt-0 mb-4 text-4xl">
        {{ postData.title }}
      </h4>

      <p class="font-light text-xl mb-4">{{ postData.description }}</p>

      <section class="border border-dashed border-b-0 border-l-0 border-r-0 pt-5 border-brandGray-200">
        <p class="mb-2 text-sm"><span class="font-semibold">Date posted:</span> {{ formattedDate }}</p>

        <p v-if="postData.category" class="mb-2 text-sm">
          <span class="font-semibold">Category:</span> {{ postData.category }}
        </p>

        <p v-if="postData.tags" class="mb-2 text-sm">
          <span class="font-semibold">Tags:</span>
          <span v-for="(tag, i) in postData.tags" :key="tag + i" :class="i + 1 == tagsTotal ? '' : 'mr-2'"
            >{{ tag }}{{ i + 1 == tagsTotal ? '' : ',' }}</span
          >
        </p>
      </section>
    </a>
    <nuxt-link v-else :to="`${route}/${postData.slug}`">
      <h4 class="mt-0 mb-4 text-4xl">
        {{ postData.title }}
      </h4>

      <p class="font-light text-xl mb-4">{{ postData.description }}</p>

      <section class="border border-dashed border-b-0 border-l-0 border-r-0 pt-5 border-brandGray-200">
        <p class="mb-2 text-sm"><span class="font-semibold">Date posted:</span> {{ formattedDate }}</p>

        <p v-if="postData.category" class="mb-2 text-sm">
          <span class="font-semibold">Category:</span> {{ postData.category }}
        </p>

        <p v-if="postData.tags" class="mb-2 text-sm">
          <span class="font-semibold">Tags:</span>
          <span v-for="(tag, i) in postData.tags" :key="tag + i" :class="i + 1 == tagsTotal ? '' : 'mr-2'"
            >{{ tag }}{{ i + 1 == tagsTotal ? '' : ',' }}</span
          >
        </p>
      </section>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    postData: {
      type: Object,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  },
  computed: {
    tagsTotal() {
      return this.postData.tags ? this.postData.tags.length : 0
    },
    formattedDate() {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      const dateTimeFormat = new Intl.DateTimeFormat('en-gb', options)
      const date = new Date(this.postData.date)
      const formatDate = dateTimeFormat.format(date)

      return formatDate
    }
  }
}
</script>
