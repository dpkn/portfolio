<template>
  <section id="overview">
    <div class="container">
      <div v-html="page.content"></div>
      <div v-for="(course,key) in page.courses" :id="key">
        <h2>{{course.name}}</h2>
            <ol>
              <li v-for="item in course.homework">
               <a target="_blank" :href="item.url" :title="item.date"><b>{{item.title }}</b></a>
              </li>
            </ol>
          </h3>
      </div>
    </div>
  </section>
</template>

<script>
// Import Page data
import axios from 'axios';

export default {
  name: 'HkuYearOverview',
  data() {
    return {
      pages: {},
      page: {
        content: '',
      },
    };
  },
  methods: {
    getPageContent(id) {
      if (this.pages[id]) {
        this.page = this.pages[id];
      } else {
        // If the provided id doesn't match with a portfolio entry, route back to home
        this.$router.push('/');
      }
    },
  },
  mounted() {
    axios.get('hku.json')
      .then((response) => {
      // handle success
        this.pages = response.data;
        this.getPageContent(this.$route.params.id);
      });
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
h2{
  font-weight: bold;
  margin:30px 0 10px 0;
}
  #overview{
    background: #f2f2f2;
    margin-top: 30px;
    padding: 50px 0;
  }
  ol{
    list-style: none;
  }
  li{
    margin:5px 0;
  }
  li a{
    text-decoration: none;
  }
</style>
