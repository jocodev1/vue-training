<template>
  <div class="components-page">
    <h4>Components</h4>
    <hr>
    <p>
      Components are one of the major reasons why Vue JS is so powerful. With components we can make our code and pages completely modular and separate complexity into several pieces.
    </p>
    <p>
      All properties that are available to the vue instance are available to a component, with some minor differences:
    </p>
    <hr>
    <blockquote><b>name</b> - is a new property that gives a component a custom name and identifies each individual component in vue-devtools. It is not required, but should be used for consistency. The default component name will be the component's filename that was imported.</blockquote>
    <hr>
    <blockquote>
      <b>data</b> - (for component) has to be a function that returns an object. This helps Vue maintain reactivity within components the same way the instance does.
      <div class="row head-room-sm">
        <div class="six columns">
          <i>vue instance</i>
          <pre>{
  data: {}
}</pre>
        </div>
        <div class="six columns">
          <i>component</i>
          <pre>{
  data () {
    return { ... }
  }
}</pre>
        </div>
      </div>
    </blockquote>
    <hr>
    <blockquote>
      <b>props</b> - are used to bind information to a component from the parent when the component is injected into the parent template.
    </blockquote>
    <hr>
    <h5>EXAMPLE</h5>
    <p>
      This example demonstrates how you can pass a value from a parent component to a child component. The green box is our child component and the textarea is controlled by the parent component (this page component).
    </p>

    <!-- Example begin -->
    <label for="change-message">Enter message here:</label>
    <textarea id="change-message" v-model="exampleMessage"></textarea>
    <example :message="exampleMessage"></example>

  </div>
</template>

<script>
import Example from '../ExampleComponent.vue'
export default {
  name: 'components',
  components: {
    Example
  },
  data () {
    return {
      exampleMessage: null
    }
  }
}
</script>

<style scoped>
  textarea#change-message {
    width: 100%;
    font-size: 0.9em;
  }
</style>