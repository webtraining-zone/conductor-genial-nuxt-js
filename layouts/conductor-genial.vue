<template>
  <!-- START: Content -->
  <section class="b-main-content">
    <div class="container">
      <AppHeader/>

      <nuxt/>

      <AppFooter/>
    </div>
  </section>
</template>
<script>
  import AppHeader from '~/components/common/header.vue'
  import AppFooter from '~/components/common/footer.vue'

  export default {
    components: {AppHeader, AppFooter}
  }
</script>
<style>

</style>
