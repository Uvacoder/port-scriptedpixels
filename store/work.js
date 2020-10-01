import axios from 'axios'

export const state = () => ({
  projects: [],
  currentProject: {},
})
export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_CURRENT_PROJECT(state, project) {
    state.currentProject = project
  },
}

export const actions = {
  async GET_PROJECTS({ commit }) {
    const { data } = await axios.get('https://scriptedpixels.co.uk/wp-json/wp/v2/posts?categories=3')
    commit('SET_PROJECTS', data)
  },
  async GET_CURRENT_PROJECT({ commit }, projectId) {
    const projectToFetch = await this.state.work.projects.find((project) => project.id === projectId)

    if (projectToFetch) {
      commit('SET_CURRENT_PROJECT', projectToFetch)
    } else {
      // if not, make the request to get the data
      const { data } = await axios.get(`https://scriptedpixels.co.uk/wp-json/wp/v2/posts/${projectId}`)
      commit('SET_CURRENT_PROJECT', data)
    }
  },
}
