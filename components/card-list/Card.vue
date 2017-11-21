<template>
  <nuxt-link :to="href" class="b-card">
    <div class="b-card-image" :style="cardStyle"></div>
    <div class="b-card-title">{{title}}</div>
    <div class="b-card-summary" :class="summaryClass">{{summary}}</div>
    <div class="fa b-card-summary__action" :class="actionClass" @click="toggleSummary"></div>
  </nuxt-link>
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
      href() {
        return this.data.href;
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
      toggleSummary() {
        this.expandedSummary = !this.expandedSummary;
      }
    }
  }
</script>
<style>
</style>
