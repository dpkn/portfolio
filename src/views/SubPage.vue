<template>
  <div class="test">
    <MainNavigation></MainNavigation>
    <nav class="sub-nav container">
        <router-link v-for="(page,key) in pages" :to="'/hku/'+key" :key="key">
          {{page.title}}
        </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';
import axios from 'axios';

export default {
  name: 'SubPage',
  components: {
    MainNavigation,
  },
  data() {
    return {
      pages: {}
      ,
    };
  },
  mounted() {
    axios.get('hku.json')
      .then((response) => {
      // handle success
        this.pages = response.data;
        // If no page id is specified, go to the first page in the list
        if (!this.$route.params.id) {
          this.$router.push(`/hku/${Object.keys(this.pages)[0]}`);
        }
      });
  },
  watch: {
    /* eslint func-names: ["error", "never"] */
    // If the route changes, it means that another page is requested
    '$route.params.id': function () {
      // If no page id is specified, go to the first page in the list
      if (!this.$route.params.id) {
        this.$router.push(`/hku/${Object.keys(this.pages)[0]}`);
      }
    },
  },
};
</script>

<style lang="scss">
.sub-nav{
  width: 100%;
  text-align: center;
}
.sub-nav a{
  padding: 5px 10px;
  margin:0 10px;
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  color:#000;
  display: inline-block;
  border-radius: 3px;
  transition: border .2s;
  border: 2px solid #fff;
  &.active{
    border: 2px solid #000;
  }
}
</style>
