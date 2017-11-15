<template>
  <div class="b-senal-tile b-tile" :style="tileStyle" @click="onClick">
    <div class="b-tile-mask b-tile-mask--single">
      <p class="b-tile-title ellipsify">{{titleToDisplay}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['data'],
    computed: {
      tileStyle() {
        return {
          'background-image': `url(/traffic-signals/${this.data.filename})`
        }
      },
      titleToDisplay() {
        return this.data.name;
      }
    },
    methods: {
      onClick() {
        console.log('Clicked on ' + this.data.name)
      }
    }
  }
</script>
<style scoped>
  /* START: Senal Tile */
  .b-senal-tile {
    background-size: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ffffff;
  }
  /* END: Senal Tile */
</style>
