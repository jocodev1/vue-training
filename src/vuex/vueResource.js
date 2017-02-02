import Vue from 'vue'

export default {
  // Contains all state data for this module
  state: {
    ajaxResults: [],
    errors: []
  },

  // Available to any component that can have the store
  getters: {
    ajaxResults: state => {
      return state.ajaxResults
    }
  },

  // The only place where state should be updated after inital build
  mutations: {
    resetAjaxResults (state) {
      state.ajaxResults = []
      state.errors = []
    },
    updateAjaxResults (state, results) {
      state.ajaxResults = results
    }
  },

  // Also available to any component that can have the store
  // Pay attention to naming since all actions must be unique
  actions: {
    fetchAjaxResults ({ commit }) {
      Vue.http({
        url: 'http://www.sfuicehockey.com/api/game',
        method: 'GET'
      }).then(function (response) {
        commit('updateAjaxResults', response.body)
      }, function (errorResponnse) {
        //
      })
    },
    resetAjaxResults ({ commit }) {
      commit('resetAjaxResults')
    }
  }
}
