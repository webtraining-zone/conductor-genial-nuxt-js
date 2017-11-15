<template>
  <!-- START: Content -->
  <section class="b-main-content">

    <AppHeader/>

    <nuxt/>

    <AppFooter/>

  </section>
</template>
<script>
  import AppHeader from '~/components/common/header.vue'
  import AppFooter from '~/components/common/footer.vue'

  export default {
    components: {AppHeader, AppFooter}
  }
</script>
<style>
  .ellipsify {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  /* START: Grid List */
  .b-grid-list {
    text-align: center;
  }
  /* END: Grid List */

  /* START: Tile */
  .b-tile {
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 200px;
    width: 200px;
    margin: 4px;
    background-color: #666;
  }

  .b-tile:before {
    content: '';
    background-color: #000;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0.2;
    border-radius: 10px 10px 0 0;
    visibility: hidden;
  }

  .b-tile-mask {
    position: absolute;
    background-color: #000;
    opacity: 0.7;
    bottom: 0;
    left: 0;
    right: 0;
    color: #ffffff;
    padding: 16px;
  }

  .b-tile-mask.b-tile-mask--single {
    height: 48px;
  }

  .b-tile-mask.b-tile-mask--single .b-tile-title {
    text-align: left;
    font-size: 16px;
    line-height: 1;
  }

  .b-tile:hover {
    cursor: pointer;
  }

  .b-tile:hover:before {
    visibility: visible;
  }

  .b-tile:hover .b-tile-mask {
    opacity: 0.8;
  }
  /* END: Tile */

</style>
