<template>
  <div class="b-senales-grid b-grid-list">
    <senal-tile v-for="s of senalesToDisplay" :data="s" :key="s.filename"></senal-tile>
  </div>
</template>
<script>
  import SenalTile from './SenalTile.vue'

  export default {
    props: ['data'],
    components: {SenalTile},
    computed: {
      senalesToDisplay() {
        return this.data;
      }
    }
  }
</script>
<style scoped>
</style>
