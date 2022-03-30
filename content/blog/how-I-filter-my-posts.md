---
title: 'How to filter lists in Vue using computed properties'
date: '2022-02-26'
description: "A look in to how I'm filtering the blog posts with the use of Tags and how easy it is to render using Vue's `Computed` properties."
tags: ['Vue', 'JavaScript']
category: 'Web Development'
---

<p class="introduction">The blog posts on my site have tags in their metadata. I display these tags on the left hand side of the <a href="/blog/">main blog post page</a>, so visitors can filter posts to specific topics that they're intretsed in.</p>

The tags are an array within each post, e.g: `tags: ['Vue', 'JavaScript', ...]`.

When the blog index page is being built by Nuxt, I carry out the following steps to remove any undefined and duplicated tags:

```javascript
// use map to go through the blogPosts array and return the tags for each blogpost (post.tags) if they're not empty ('')
const allTags = blogPosts.map((post) => {
  // for each post I filter post.tags and return any tag that's not equal to undefined
  const filterdPostTags = (post.tags !== undefined ? post.tags : '')
    .filter((postTag) => {
      // return the tag that isn't equal to undefined
      return postTag !== undefined
    })

  // return the filtered Post tags to allTags for each post within this map function on all blogposts
  return filterdPostTags
})

// create a new const called 'tags' that's created from 'allTags' using new Set(). This automatically removes duplicate entries from the array passed in.

// .flat(1) flattens allTags to ensure there's no nested arrays from the filtering above
const tags = [...new Set(allTags.flat(1))]
```

The `tags` const is stored in the blog index page state, I use this to render all the tags in the left hand column with a simple `v-for` directive that we've seen in previous posts:

```javascript
<li
  class="flex-none pb-4 mr-4 md:block md:pb-1 md:mr-0 hover:cursor-pointer"
  :class="selectedTag == tag ? 'font-bold' : ''"
  v-for="(tag, index) in tags"
  :key="tag + index"
  :data-tag="tag"
  @click="setTag"
>
  {{ tag }}
</li>
```

Each `<li>` here has a `@click="setTag"` event handler attached to it. This runs a method called `setTag` that takes the tag value and saves it to the local blog index state under `selectedTag`. I'm using Vue to bind dynamic data to the class so when the selectedTag value is the same as the tag value that Vue is rendering, it will apply the `font-bold` class to the `<li>`, and removes it when the values don't match. The class `font-bold` is appended/removed to the classes we apply with regular HTML:

```html
<li class="flex-none pb-4 mr-4 md:block md:pb-1 md:mr-0 hover:cursor-pointer font-bold" data-tag="tag">tag</li>
```

Now that tags can be selected and stored, I can use this to create a computed property to calculate what posts should be shown in the main blog post' list.

### Computed properties

Computed properties allow us to handle reactive data that requires complex logic. We could do all logic in the template *but* it's recommended that we keep any complex logic out of the template used a computed property instead. This keeps the template clean and much easier to read:

```javascript
computed: {
  filteredBlogPosts () {
    const filteredPosts = this.blogPosts.filter((blogpost) => {
      // check if this.selectedtag has a value, if not just return the blogpost
      if (!this.selectedTag || this.selectedTag.length === 0) return blogpost

      // if this blog post's tag array includes the selectedTag then we return this blogpost in to the filteredPosts array
      if (blogpost.tags.includes(this.selectedTag)) {
        return blogpost
      }
    })

    // once we've filtered all blogposts, we return this to the template and Vue will render the posts
    return filteredPosts
  }
},.
```

The template can now render each post within `filteredBlogPosts` using my `<ListItem>` component:

```html
<ListItem
  v-for="post in filteredBlogPosts"
  :key="post.slug"
  :post-data="post"
  :route="path"
/>
```

Computed properties look very similar to methods, but there's a big advantage of using a computed property over a method. Computed properties are cached, depending on their reactive dependencies. They're only re-calculated when Vue has detected a change in the depedencies, where as methods will run whever a re-render happens.
