<template>
  <div class="my-10 p-4 pb-0 rounded-sm border border-gray-900 shadow-lg">
    <input
      v-model="newItem"
      type="text"
      aria-label="Type a new item to add to your list"
      class="text-black p-2 mb-4 mr-2"
      placeholder="Enter then name of your next item"
      @keydown.enter="addNewItemToList"
    />

    <button
      class="py-2 px-4 border-r border-none bg-green-500"
      :disabled="!newItem.length"
      @click="addNewItemToList"
    >
      Add item
    </button>

    <ul class="mt-4">
      <li v-for="item in items" :key="item.id" class="mt-2 mb-0">
        <p class="m-0">{{ item.label }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          label: 'Pack of eggs'
        },
        {
          id: 2,
          label: 'Bread'
        },
        {
          id: 3,
          label: 'Milk'
        },
        {
          id: 4,
          label: 'Cereal'
        }
      ],
      newItem: ''
    }
  },

  methods: {
    addNewItemToList() {
      if (!this.newItem.length) return

      this.items.push({
        id: Math.floor(Math.random() * (100 - 1) + 1),
        label: this.newItem
      })
      // set newItem back to an empty string, clearing the input for the next item
      this.newItem = ''
    }
  }
}
</script>

<style>
button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
