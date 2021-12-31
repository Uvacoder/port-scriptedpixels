---
title: 'Vue Accordion Component'
date: '2020-10-02'
description: 'A Vue accordion component that can be re-used to create....'
tags: ['Vue', 'JavaScript', 'Front-end']
category: 'Web Development'
---

I've created a super small Vue Accordion component that accepts 3 props: a header, the content, and if it should be open by default. This renders an accordion with the passed in heading, content, and whether it should be expanded (open) or not.

#### demo

<accordion :is-open="true" header="Duis exercitation laborum veniam tempor voluptate amet elit qui." content="Aliqua deserunt ea magna cupidatat enim culpa. Officia anim labore occaecat minim officia. Incididunt quis ipsum eu sunt quis voluptate excepteur. Ut sit ullamco consectetur nisi mollit veniam ex incididunt. Laborum sit ut cupidatat eiusmod Lorem eiusmod Lorem deserunt laboris ex in. Labore eu voluptate elit incididunt occaecat esse dolor non duis mollit." ></accordion>

<accordion :is-open="false" header="Duis exercitation laborum veniam tempor voluptate amet elit qui." content="Aliqua deserunt ea magna cupidatat enim culpa. Officia anim labore occaecat minim officia. Incididunt quis ipsum eu sunt quis voluptate excepteur. Ut sit ullamco consectetur nisi mollit veniam ex incididunt. Laborum sit ut cupidatat eiusmod Lorem eiusmod Lorem deserunt laboris ex in. Labore eu voluptate elit incididunt occaecat esse dolor non duis mollit." ></accordion>

<accordion header="Duis exercitation laborum veniam tempor voluptate amet elit qui." content="Aliqua deserunt ea magna cupidatat enim culpa. Officia anim labore occaecat minim officia. Incididunt quis ipsum eu sunt quis voluptate excepteur. Ut sit ullamco consectetur nisi mollit veniam ex incididunt. Laborum sit ut cupidatat eiusmod Lorem eiusmod Lorem deserunt laboris ex in. Labore eu voluptate elit incididunt occaecat esse dolor non duis mollit." ></accordion>


#### The template
```javascript
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
```

#### Vue JS
```javascript
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
```

#### Styling (sass)
```css
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
```