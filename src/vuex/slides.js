export default {
  // Contains all state data for this module
  state: {
    currentSlideIndex: 0,
    slideOrder: []
  },

  // Available to any component
  getters: {
    currentSlideIndex: state => {
      return state.currentSlideIndex
    },
    currentRoutePath: state => {
      return state.slideOrder[state.currentSlideIndex]
    },
    slideOrder: state => {
      return state.slideOrder
    }
  },

  // The only place where state should be updated after inital build
  mutations: {
    incrementCurrentSlideIndex (state) {
      state.currentSlideIndex += 1
    },
    decrementCurrentSlideIndex (state) {
      state.currentSlideIndex -= 1
    },
    resetCurrentSlideIndex (state) {
      state.currentSlideIndex = 0
    }
  },

  // Also available to any component
  // Pay attention to naming since all actions must be unique
  actions: {
    nextSlide ({ commit, state }) {
      if (state.currentSlideIndex < state.slideOrder.length - 1) {
        commit('incrementCurrentSlideIndex')
      }
    },
    prevSlide ({ commit, state }) {
      if (state.currentSlideIndex > 0) {
        commit('decrementCurrentSlideIndex')
      }
    },
    startOver ({ commit }) {
      commit('resetCurrentSlideIndex')
    }
  }
}
