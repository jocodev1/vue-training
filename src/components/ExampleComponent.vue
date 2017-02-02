<template>
  <div id="example-component">
    <h6>{{ title }}</h6>
    <hr>
    <p v-if="message">
      <i class="fa fa-commenting fa-spacing-right"></i>
      {{ message }}
    </p>
    <p v-else>
      <i class="fa fa-exclamation-circle fa-spacing-right"></i>
      <i>Please enter a message above.</i>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'example-component',
    data () {
      return {
        title: 'Basic Example'
      }
    },
    props: {
      message: {
        type: String,
        default: 'This is the default message.'
      }
    }
  }
</script>

<style lang="scss">
  #example-component {
    background-color: #839C87;
    border: 0px solid #333;
    border-radius: 5px;
    color: white;
    box-shadow: 3px 3px 5px #333;
    font-size: 0.7em;
    padding: 15px 25px;

    > hr {
      border-color: white;
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;
    }
  }

</style>