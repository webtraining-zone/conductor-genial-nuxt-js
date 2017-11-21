<template>
  <div class="b-card" @click="navigateToHref">
    <div class="b-card-image" :style="cardStyle"></div>
    <div class="b-card-title">{{title}}</div>
    <div class="b-card-summary" :class="summaryClass">{{summary}}</div>
    <div class="fa b-card-summary__action" :class="actionClass" @click.stop="toggleSummary"></div>
  </div>
</template>
<script>
  /**
   *  Data: Object with the following structure
   *    {
   *      id: _id,
   *      imageUrl: _imageUrl,
   *      title: _title,
   *      summary: _summary,
   *      href: _href
   *    }
   */
  export default {
    props: ['data'],
    data() {
      return {
        expandedSummary: false
      }
    },
    computed: {
      cardStyle() {
        return {
          'background-image': `url(${this.data.imageUrl})`
        }
      },
      title() {
        return this.data.title;
      },
      summary() {
        return this.data.summary;
      },
      summaryClass() {
        return this.expandedSummary ? 'b-card-summary--expanded' : 'ellipsify'
      },
      actionClass() {
        return this.expandedSummary ? 'fa-chevron-up' : 'fa-chevron-down'
      }
    },
    methods: {
      navigateToHref() {
        this.$router.push(this.data.href)
      },
      toggleSummary() {
        this.expandedSummary = !this.expandedSummary;
      }
    }
  }
</script>
<style>
</style>
