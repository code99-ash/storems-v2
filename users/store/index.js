export const state = () => ({
    feedbacks: [
      {
        id: 1,
        heading: 'Welcome back!!',
        body: 'Welcome back to your dashboard, it\'s being a while',
        variant: 'success',
        duration: 3000
      }
    ],
})

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('products/fetchProducts');
  },

  // Feedbacks
  removeFeedback({commit}, id) {
    commit('REM_FEEDBACK', id)
  },
  addFeedback({commit}, payload) {
    commit('ADD_FEEDBACK', payload)
  },


}

export const mutations = {
  // Feedbacks
  REM_FEEDBACK(state, id) {
    state.feedbacks = state.feedbacks.filter(fb => fb.id !== id)
  },
  ADD_FEEDBACK(state, { heading, body, variant, duration }) {
    state.feedbacks = [{
      id: new Date().getTime().toString(), heading, body, variant, duration: duration ?? 3000}
      , ...state.feedbacks
    ]
  }
}