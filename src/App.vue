<template>
  <div id="app" tabindex="0" style="outline: none"
    @keyup.right.prevent="nextSlide"
    @keyup.left.prevent="prevSlide"
  >
    <banner id="custom-banner">
      <h2>Vue JS Training</h2>
    </banner>

    <div class="container head-room-md">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <floating-button
      :next="nextSlide"
      :prev="prevSlide"
      :show-next="!isLastSlide"
      :show-prev="!isFirstSlide"
    ></floating-button>

    <div class="footer"></div>
  </div>
</template>

<script>
import FloatingButton from './components/FloatingButton.vue'

export default {
  name: 'app',
  components: {
    FloatingButton
  },
  computed: {
    currentSlideIndex () {
      return this.$store.getters.currentSlideIndex
    },
    slideOrder () {
      return this.$store.getters.slideOrder
    },
    isFirstSlide () {
      return Boolean(this.currentSlideIndex === 0)
    },
    isLastSlide () {
      return Boolean(this.currentSlideIndex >= this.slideOrder.length - 1)
    },
    currentPath () {
      return this.$store.getters.currentRoutePath
    }
  },
  created () {
    // on refresh, force router to start from beginning
    this.$router.push('/')
  },
  methods: {
    nextSlide () {
      this.$store.dispatch('nextSlide')
    },

    prevSlide () {
      this.$store.dispatch('prevSlide')
    }
  },
  watch: {
    currentPath (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">
  @import './assets/sass/template.scss';
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
    transformX: -30px
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .footer {
    width: 100%;
    padding-bottom: 100px;
  }
  #custom-banner {
    box-shadow: 3px 3px 9px #ccc;
  }
</style>
