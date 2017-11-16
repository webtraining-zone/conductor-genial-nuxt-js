<template>
  <nuxt-link :to="href" class="b-tile" :style="tileStyle">
    <div class="b-tile-mask b-tile-mask--single">
      <p class="b-tile-title ellipsify">{{title}}</p>
    </div>
  </nuxt-link>
</template>
<script>
  /**
   *  Data: Object with the following structure
   *    {
   *      id: _id,
   *      imageUrl: _imageUrl,
   *      title: _title,
   *      href: _href
   *    }
   */
  export default {
    props: ['data'],
    computed: {
      tileStyle() {
        return {
          'background-image': `url(${this.data.imageUrl})`
        }
      },
      title() {
        return this.data.title;
      },
      href() {
        return this.data.href;
      }
    },
    methods: {}
  }
</script>
<style>
</style>
