<template>
  <div class="b-grid-list">
    <tile v-for="s of data" :data="s" :key="s.id"></tile>
  </div>
</template>
<script>
  /**
   *  Data: Array of the following objects
   *    {
   *      id: _id,
   *      imageUrl: _imageUrl,
   *      title: _title,
   *      href: _href
   *    }
   */
  import Tile from './Tile.vue'

  export default {
    props: ['data'],
    components: {Tile},
    computed: {}
  }
</script>
<style>
</style>
