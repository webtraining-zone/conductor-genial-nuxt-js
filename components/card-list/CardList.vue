<template>
  <div class="b-card-list">
    <card v-for="item of data" :data="item" :key="item.id"></card>
  </div>
</template>
<script>
  /**
   *  Data: Array of the following objects
   *    {
   *      id: _id,
   *      imageUrl: _imageUrl,
   *      title: _title,
   *      summary: _summary,
   *      href: _href
   *    }
   *
   */
  import Card from './Card.vue'

  export default {
    components: {Card},
    props: ['data']
  }
</script>
<style>
</style>
