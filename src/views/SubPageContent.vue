<template>
  <section id="overview">
    <div class="container" v-html="page.content">
    </div>
  </section>
</template>

<script>
// Import Page data
import pages from '../assets/pages.json';

export default {
  name: 'HkuYearOverview',
  data() {
    return {
      page: {
        content: '',
      },
    };
  },
  methods: {
    getPageContent(id) {
      if (pages[id]) {
        this.page = pages[id];
      } else {
        // If the provided id doesn't match with a portfolio entry, route back to home
        this.$router.push('/');
      }
    },
  },
  mounted() {
    this.getPageContent(this.$route.params.id);
  },
  watch: {
    /* eslint func-names: ["error", "never"] */
    // If the route changes, it means that another page is requested
    '$route.params.id': function (id) {
      this.getPageContent(id);
    },
  },
};
</script>

<style lang="scss">
  #overview{
    background: #f2f2f2;
    margin-top: 30px;
    padding: 50px 0;
  }
</style>
