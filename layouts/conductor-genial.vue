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
    margin: 0;
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

  /* START: Card List */
  .b-card-list {

  }

  /* END: Card List */

  /* START: Card */
  .b-card {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 300px;
    margin: 12px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  .b-card:hover {
    cursor: pointer;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  .b-card-image {
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    border-radius: 4px 4px 0 0;
    background-size: 56.25%;
    background-color: darkcyan;
    background-repeat: no-repeat;
    background-position: center;
  }

  .b-card-title {
    font-size: 24px;
    padding: 24px 16px 16px;
  }

  .b-card-summary {
    padding: 0 0 16px 16px;
    font-size: 14px;
    width: 85%;
    display: inline-block;
    vertical-align: top;
  }

  .b-card-summary.b-card-summary--expanded {
    width: 100%;
    display: block;
  }

  .b-card-summary__action {
    float: right;
    margin: 3px 16px 16px 0;
    font-size: 14px;
    border-radius: 50%;
    color: #ddd;
  }

  .b-card-summary__action:hover {
    color: #000;
  }

  /* END: Card */

</style>
