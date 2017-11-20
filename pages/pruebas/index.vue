<template>
  <section class="b-pruebas">
    <h1>Pruebas</h1>
    <card-list :data="assessmentsToDisplay"></card-list>
  </section>
</template>
<script>
  import CardList from '../../components/card-list/CardList.vue'

  export default {
    layout: 'conductor-genial',
    components: {CardList},
    fetch(context) {
      return context.store.dispatch('RETRIEVE_ASSESSMENTS');
    },
    computed: {
      assessmentsToDisplay() {
        return this.$store.getters.allAssessments
      }
    }
  }
</script>
<style>
</style>
