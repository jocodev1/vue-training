<template>
  <div class="vue-resource-page">
    <h4>Vue Resource</h4>
    <hr>
    <p>
      A separate vue plugin that provides us the ability to make ajax calls within our Vue code.
    </p>
    <p>
      <a href="https://github.com/pagekit/vue-resource" target="_blank">Documentation</a>
    </p>
    <hr>
    <h5>EXAMPLE</h5>
    <p>
      When you click the button, the vue-resource plugin will fetch data from an api (using personal project that uses a Node.js API: <a href="http://www.sfuicehockey.com/api/game" target="_blank">http://www.sfuicehockey.com/api/game</a>). The endpoint is being called in our vuex module for this page. Once the response is returned, the reactivity in the vuex getter allows us to immediately display the information.
    </p>
    <i>Action that calls async request (using vue-resource) to fetch data...</i>

    <pre>// ...
actions: {
  fetchAjaxResults ({ commit }) {
    Vue.http({
      url: 'http://www.sfuicehockey.com/api/game',
      method: 'GET'
    }).then(function (response) {
      commit('updateAjaxResults', response.body)
    }, function (errorResponnse) {
      console.log(errorResponnse.body.error)
    })
  }
}</pre>



    <!-- Example begin -->
    <button type="button" class="button button-primary" @click="fetchResults">Fetch Data</button>
    <button type="button" class="button button-default" @click="resetResults">Reset</button>

    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Opponent</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in ajaxResults">
          <td>{{ result.datetime }}</td>
          <td>{{ result.opponent }}</td>
        </tr>
        <tr v-if="ajaxResults.length <= 0">
          <td colspan="2">There are no results.</td>
        </tr>
      </tbody>
    </table>
    <p class="head-room-lg">
      You can setup a POST, PUT, or DELETE a similar way. You would just update the method property in the http function and include a body object to pass data like below...
    </p>




    <pre>// ...
actions: {
  postData ({ commit }) {
    Vue.http({
      url: 'http://some-route-to-post',
      method: 'POST',
      body: {
        dataField1: 'test',
        dataField2: 'test2'
      }
    }).then(function (response) {
      commit('mutationToUpdateState', response.body)
    }, function (errorResponnse) {
      console.log(errorResponnse.body.error)
    })
  }
}</pre>
  <p>
    By default, the body data is passed as JSON, but there are other options to pass data as form data, which can be found in the documentation.
  </p>
  <blockquote>
    <i class="fa fa-info-circle fa-spacing-right"></i> <i>By default, Laravel already expects JSON, so we don't necessarily have to worry about this, but could be useful if we break front-end from back-end and our request expectations change.</i>
  </blockquote>

  </div>
</template>

<script>
  export default {
    name: 'vue-resource',
    computed: {
      ajaxResults () {
        return this.$store.getters.ajaxResults
      }
    },
    methods: {
      fetchResults () {
        this.$store.dispatch('fetchAjaxResults')
      },
      resetResults () {
        this.$store.dispatch('resetAjaxResults')
      }
    }
  }
</script>

<style>
  .table {
    font-size: 0.7em;
    width: 100%;
  }
</style>