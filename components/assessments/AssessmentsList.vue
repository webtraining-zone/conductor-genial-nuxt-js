<template>
  <div class="b-assessments-list">
    <card-list :data="assessmentsToDisplay"></card-list>
  </div>
</template>
<script>
  import CardList from '../card-list/CardList.vue'

  export default {
    props: ['data'],
    components: {CardList},
    computed: {
      assessmentsToDisplay() {
        return this.data.map((a, i) => {
          return {
            id: a.id || i,
            imageUrl: `/assessments/${a.imageFilename}`,
            title: a.name,
            summary: a.summary,
            href: `/pruebas/${a.id || i}`
          }
        });
      }
    }
  }
</script>
<style>
</style>
