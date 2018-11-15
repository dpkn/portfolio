<template>
  <div class="portfolio-item-overview">
    <div class="info container">
      <router-link :to="{name:'portfolio'}" class="back-button">&larr; PORTFOLIO</router-link>

      <h1 v-if="item.title" v-html="item.title"></h1>
      <h2 v-if="item.subtitle" v-html="item.subtitle"></h2>
      <p v-if="item.description" v-html="item.description"></p>
      <p class="cta" v-if="item.cta" v-html="item.cta"></p>
    </div>
    <transition name="fade" mode="out-in">
      <div id="portfolio-content" :class="item.layout" v-show="imagesLoaded">
        <img :src="contents.url" v-for="(contents,key) in item.content"
        :key="key" class="item" :class="contents.class">
      </div>
  </transition>
  </div>
</template>

<script>
// Import plugins
import imagesLoaded from 'imagesloaded';
import axios from 'axios';

export default {
  name: 'PortfolioItem',
  data() {
    return {
      imagesLoaded: false,
      item: {
        title: '',
        content: '',
        coverImage: '',
      },
    };
  },
  methods: {
    getItemContent(id) {
      axios.get('portfolio.json').then((response) => {
        if (response.data[id]) {
          this.item = response.data[id];
        } else {
          // If the provided id doesn't match with a portfolio entry, route back to home
          console.log('cant fin');
        }
      });
    },
  },
  mounted() {
    this.getItemContent(this.$route.params.id);
  },
  updated() {
    const imgLoad = imagesLoaded('#portfolio-content');
    imgLoad.on('done', (instance, image) => {
      this.imagesLoaded = true;
      console.log(instance, image);
    });
  },
};
</script>

<style lang="scss" scoped>
.portfolio-item-overview{
  background: #fff;
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  z-index: 9999;
  overflow-y: auto;
}
.info{
  margin-top: 50px;
  margin-bottom: 50px;
}
.cta a{
  font-weight: 700;
}
.back-button{
  color:#000;
}

h1,h2{
  margin: 0;
}
h2{
  font-weight:400;
}

p a{
  font-weight: bold;
}

/* The different types of Portfolio layouts are defined here*/
.grid{
  .item{
    display: inline-block;
    width: 50%;
    float:left;
    &.hundred{
      width: 100%;
    }
    &.eighty{
      width: 80%;
    }
    &.sixty{
      width: 60%;
    }
    &.fourty{
      width: 40%;
    }
    &.twenty{
      width: 20%;
    }
    @media only screen and (max-width: 1000px){
      width: 100%!important;
    }
  }
  @include clearfix;
}

.filmstrip {
  border: 0;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  overflow-scrolling: touch;
  overscroll-behavior: contain;
  .item{
    display: inline-block;
    overflow: hidden;
    margin-left: 30px;
    &:last-child{
      margin-right: 30px;
    }
    width: 400px;
    background: #f2f2f2;
  }
  padding-bottom: 50px;
}
</style>
