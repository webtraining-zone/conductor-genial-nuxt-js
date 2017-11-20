<template>
  <div class="b-card-list">
    <h2>Card List</h2>
    <p v-for="item of data">{{item}}</p>
  </div>
</template>
<script>
  export default {
    props: ['data']
  }
</script>
<style>
</style>
