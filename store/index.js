import axios from 'axios'

export const state = () => ({
  posts: [],
  currentPost: {},
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_CURRENT_POST(state, post) {
    state.currentPost = post
  },
}

export const actions = {
  async GET_POSTS({ commit }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    commit('SET_POSTS', data)
  },
  async GET_CURRENT_POST({ commit }, postId) {
    // check the posts to see if this ID exists
    const postToFetch = this.state.posts.find((post) => post.id === postId)

    if (postToFetch) {
      commit('SET_CURREN_POST', postToFetch)
    } else {
      // if not, make the request to get the data
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      commit('SET_CURRENT_POST', data)
    }
  },
}
