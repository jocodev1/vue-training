<template>
  <div class="vuex-page">
    <h4>Vuex</h4>
    <hr>
    <p>
      A separate vue plugin that provides us the ability to <b>manage our state</b> across any scope of our application. With many layers of components, the store can be injected into any layer, making it an extremely flexible way to update content.
    </p>
    <p>
      Similar to vue components, vuex can be completely modular. <i>See modules below.</i>
    </p>
    <p>
      Will also be used for <b>time-travel debugging</b> since every change (mutation) to the vuex state is recorded. The idea behind time-travel is that when an error occurs, we can use Bugsnag (or similar tool) to return us the exact vuex state at that point. Then we can use vue-devtools to import vuex state, which will take us to the exact point where the error happened before any user contacts us about a possible emergency.
    </p>
    <p>
      <a href="https://vuex.vuejs.org/en/intro.html" target="_blank">Documentation</a>
    </p>
    <hr>
    <blockquote>
      <p><b>modules</b> - accepts another vuex object (state, getters, mutations, etc...) which becomes the child of the current vuex layer with its own state, getters, mutations, actions</p>
      <p><b>state</b> - where all of your data for this vuex layer is stored</p>
      <p><b>getters</b> - provides a reactive property for any component with access to state data through a computed property</p>
      <p><b>mutations</b> - contains functions whose sole purpose is to update the state on this vuex layer</p>
      <p><b>actions</b> - contains functions whose sole purpose is to make async calls and/or commit mutations</p>

    </blockquote>
    <hr>
    <p>
      A standard vuex store looks like the following:
      <pre>{
  modules: { ... },
  state: { ... },
  getters: { ... },
  mutations: { ... },
  actions: { ... }
}</pre>
    </p>
    <hr>
    <p>
      You may be wondering why mutations are even necessary, but the reason is so you can dispatch a vuex action that can do any number of asynchronous calls. Then inside or outside of the callbacks for those calls, we could run any number of mutations.
    </p>
    <p>
      As mentioned before, all mutations are logged. Since your mutations are separated out, we now have a very detailed log of every time the state changes.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'vuex'
  }
</script>

<style>

</style>