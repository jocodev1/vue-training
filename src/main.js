import Vue from 'vue'
import VueCollier from 'vue-collier'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueCollier)
Vue.use(VueRouter)
Vue.use(VueResource)

// vuex
import store from './vuex/store'
import slides from './vuex/slides'
import vueResourceVuex from './vuex/VueResource'

// page components
import Start from './components/pages/Start.vue'
import Components from './components/pages/Components.vue'
import VuexPage from './components/pages/Vuex.vue'
import VueResourcePage from './components/pages/VueResource.vue'
import VueRouterPage from './components/pages/VueRouter.vue'
import End from './components/pages/End.vue'

import './assets/sass/app.scss'

var router = new VueRouter({
  routes: [
    { path: '/', component: Start },
    { path: '/components', component: Components },
    { path: '/vuex', component: VuexPage },
    { path: '/vue-resource', component: VueResourcePage },
    { path: '/vue-router', component: VueRouterPage },
    { path: '/end', component: End }
  ]
})

// Manually set slide order for example
slides.state.slideOrder = [
  '/',
  '/components',
  '/vuex',
  '/vue-resource',
  '/vue-router',
  '/end'
]

store.registerModule('slides', slides)
store.registerModule('vue-resource', vueResourceVuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  data: {
    test: 'this is a test'
  },
  template: '<App/>',
  components: { App }
})
