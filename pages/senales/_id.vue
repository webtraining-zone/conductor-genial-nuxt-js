<template>
  <section class="b-senal-detalle">
    <h1>Detalle de {{id}}</h1>
    <p>{{senalToDisplay}}</p>
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
      return store.dispatch('RETRIEVE_SENAL', +params.id);
    },
    computed: {
      senalToDisplay() {
        return this.$store.getters.getSenalById(this.id);
      }
    }
  }
</script>
<style>
</style>
