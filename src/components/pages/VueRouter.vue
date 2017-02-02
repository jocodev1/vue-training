<template>
  <div class="vue-router-page">
    <h4>Vue Router</h4>
    <hr>
    <p>
      A separate vue plugin that provides us the ability to make an SPA (Single Page Application) on one html page / blade template.
    </p>
    <p>
      <a href="https://router.vuejs.org/en/" target="_blank">Documentation</a>
    </p>
    <hr>
    <p>
      As you change pages on this site, pay attention to the url. You aren't actually loading anything, you are simply displaying different vue components, which drastically improves the user experience.
    </p>
    <p>
      Considering this, you can theoretically create your whole front-end interface as an SPA. Then to get data to your vuex store or components, you can use vue-resource (on previous slide) to asynchronously call API endpoints on a back-end service.
    </p>
    <blockquote>
      <i class="fa fa-info-circle fa-spacing-right"></i> <i>However, if you are creating monolithic Laravel applications and using Laravel's routing, you would be forced to create a new vue instance for each Laravel "view" or blade template.</i>
    </blockquote>
    <p>
      In the url on this page you will see <i>/#/vue-router</i>. The <b>#</b> shows us where the vue route starts. Then <b>/vue-router</b> corresponds to the path configured in your main vue instance. Vue router will match this path and show the assigned page component in place of the <b>&lt;router-view&gt;&lt;/router-view&gt;</b>
      tag in your main page component.
    </p>

  </div>
</template>

<script>
  export default {
    name: 'vue-router'
  }
</script>

<style>

</style>