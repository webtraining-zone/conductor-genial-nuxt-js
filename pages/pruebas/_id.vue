<template>
  <section class="b-assessment-detail">
    <h1>Detalle de {{id}}</h1>
    <p>{{assessmentToDisplay}}</p>
  </section>
</template>
<script>
  export default {
    layout: 'conductor-genial',
    asyncData({params, error}) {
      return {
        id: +params.id
      }
    },
    data() {
      return {}
    },
    fetch({store, params}) { // Server-side
      return store.dispatch('RETRIEVE_ASSESSMENT', +params.id);
    },
    computed: {
      assessmentToDisplay() {
        return this.$store.getters.getAssessmentById(this.id);
      }
    }
  }
</script>
<style>
</style>
