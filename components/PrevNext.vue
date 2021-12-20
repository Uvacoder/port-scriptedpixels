<template>
  <div
    class="border border-l-0 border-b-0 border-r-0 border-dashed border-gray-700 py-3 flex flex-wrap gap-3 justify-between mt-20 mb-10"
  >
    <p v-if="prev" class="text-sm m-0">
      Prev:
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: prev.slug } }" class="underline">
        {{ prev.title }}
      </NuxtLink>
    </p>
    <span v-else>&nbsp;</span>
    <p v-if="next" class="text-sm m-0">
      Next:
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: next.slug } }" class="underline">
        {{ next.title }}
      </NuxtLink>
    </p>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
