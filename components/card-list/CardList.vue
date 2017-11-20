<template>
  <div class="b-card-list">
    <h2>Card List</h2>
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
