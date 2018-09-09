<template>
  <div class="portfolio-item">
    <div class="info">
      <h1>{{item.title}}</h1>
      <h2 v-if="item.subtitle">
        {{item.subtitle}}
      </h2>
      <p v-if="item.description">
        {{item.description}}
      </p>
    </div>
    <div class="horizontal-scroll">
      <div v-for="(contents,key) in item.content" class="item">
        <img :src="contents.url" />
      </div>
    </div>
  </div>
</template>

<script>
import portfolioItems from '../assets/portfolio/portfolio.json';

export default {
  name: 'PortfolioItem',
  data() {
    return {
      item: {
        title: '',
        content: '',
        coverImage: '',
      },
    };
  },
  methods: {
    getItemContent(id) {
      if (portfolioItems[id]) {
        this.item = portfolioItems[id];
      } else {
        // If the provided id doesn't match with a portfolio entry, route back to home
        this.$router.push('/');
      }
    },
  },
  mounted() {
    this.getItemContent(this.$route.params.id);
  },
};
</script>
<style lang="scss">
.info{
  max-width: 1000px;
  margin: 40px auto;
  text-align: left;
}
h1,h2{
  margin: 0;
}
.item{
  display: inline-block;
  overflow: hidden;
  margin-left: 30px;
  &:last-child{
    margin-right: 30px;
  }
}
.item img{
    max-width: 400px;
}
.horizontal-scroll {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  overflow-scrolling: touch;
  overscroll-behavior: contain;
}
</style>
