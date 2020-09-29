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
  async GET_POST({ commit }, postId) {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    commit('SET_CURRENT_POST', data)
  },
}
