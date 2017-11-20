<template>
  <div class="b-card">
    <p>{{title}}</p>
  </div>
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
      title() {
        return this.data.title;
      }
    }
  }
</script>
<style>
</style>
