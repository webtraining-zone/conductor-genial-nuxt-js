<template>
  <section class="b-pruebas">
    <h1>Pruebas</h1>
    <assessments-list :data="assessments"></assessments-list>
  </section>
</template>
<script>
  import AssessmentsList from '../../components/assessments/AssessmentsList.vue'

  export default {
    layout: 'conductor-genial',
    components: {AssessmentsList},
    fetch(context) {
      return context.store.dispatch('RETRIEVE_ASSESSMENTS');
    },
    computed: {
      assessments() {
        return this.$store.getters.allAssessments
      }
    }
  }
</script>
<style>
</style>
