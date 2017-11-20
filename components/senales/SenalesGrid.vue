<template>
  <grid-list class="b-senales-grid" :data="senalesToDisplay"></grid-list>
</template>
<script>
  import GridList from '../grid-list/GridList.vue'

  export default {
    props: ['data'],
    components: {GridList},
    computed: {
      senalesToDisplay() {
        return this.data.map((s, i) => {
          return {
            id: s.id || i,
            imageUrl: `/traffic-signals/${s.filename}`,
            title: s.name,
            href: `/senales/${s.id || i}`
          }
        });
      }
    }
  }
</script>
<style scoped>
  /* START: Senal Tile */
  .b-senales-grid >>> .b-tile {
    background-size: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ffffff;
  }

  /* END: Senal Tile */
</style>
