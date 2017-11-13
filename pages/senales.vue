<template>
  <section class="b-senales">
    <h1>Señales</h1>
    <div class="b-senales">
      <div class="b-senal" v-for="s of senales">
        <p>{{s.name}}</p>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    layout: 'conductor-genial',
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
