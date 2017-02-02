<template>
  <div class="end-page">
    <h4>Finished</h4>
    <button type="button" class="button button-primary" @click="startOver">Start Over</button>
  </div>
</template>

<script>
export default {
  name: 'end-page',
  methods: {
    startOver () {
      this.$store.dispatch('startOver')
    }
  }
}
</script>

<style></style>