<template>
  <section class="b-senales">
    <h1>Señales</h1>
    <senales-grid :data="senales"></senales-grid>
  </section>
</template>
<script>
  import SenalesGrid from '../../components/senales/SenalesGrid.vue'

  export default {
    layout: 'conductor-genial',
    components: {SenalesGrid},
    asyncData(context) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve({})
        }, 1500)
      })
    },
    /*
    mounted() { // Client-side
      this.$store.dispatch('RETRIEVE_SENALES');
    },
    */
    fetch({store}) { // Server-side
      store.dispatch('RETRIEVE_SENALES');
    },
    computed: {
      senales() {
        return this.$store.getters.allSenales;
      }
    }
  }
</script>
<style>
</style>
