<template>
  <div class="accordion" :class="{ open: opened }" @click="toggleOpen">
    <div class="accordion-heading">
      <p class="m-0">{{ header }}</p>
    </div>
    <div class="accordion-content">
      <p class="m-0 pt-4">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    header: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      opened: this.isOpen || false
    }
  },
  methods: {
    toggleOpen() {
      this.opened = !this.opened
    }
  }
}
</script>

<style lang="scss">
.accordion {
  background-color: #fff;
  margin: 0 auto 20px;
  border-radius: 3px;
  padding: 12px;

  &:hover {
    cursor: pointer;
  }
}

.accordion-heading {
  padding-right: 30px;
  position: relative;
  font-size: 20px;
  color: #000;

  &:after {
    background: url('../assets/images/arrow-down.svg') no-repeat center center;
    transition: transform 250ms ease-in-out;
    transform: translatey(-50%) rotate(0deg);
    background-size: contain;
    position: absolute;
    height: 20px;
    content: '';
    width: 20px;
    top: 50%;
    right: 0;
  }

  .open &:after {
    transform: translatey(-50%) rotate(180deg);
  }
}

.accordion-content {
  transition: max-height 350ms ease-in-out;
  overflow-y: hidden;
  max-height: 0;
  color: #000;

  .open & {
    max-height: 200vh;
  }
}
</style>
