<template>
  <!-- START: Content -->
  <section class="b-main-content">

    <AppHeader/>

    <nuxt/>

    <AppFooter/>
    
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
