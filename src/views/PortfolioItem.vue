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
        <div v-for="(contents,key) in item.content"
        :key="key" class="item" :class="contents.class">
          <video v-if="contents.type=='video'"
                  autoplay loop muted playsinline class="video-js"
                  >
            <source
               :src="baseUrl + contents.url"
              type="video/mp4">
          </video>
          <div v-else-if="contents.type=='text'">
            <h1>{{contents.title}}</h1>
            <div v-html="contents.description"></div>
          </div>
          <img v-else :src="baseUrl + contents.url"/>
        </div>
      </div>
  </transition>
  </div>
</template>

<script>
// Import plugins
import imagesLoaded from 'imagesloaded';
import axios from 'axios';

// Import plugins
import 'video.js/dist/video-js.css';
import videojs from 'video.js';

export default {
  name: 'PortfolioItem',
  data() {
    return {
      baseUrl: process.env.BASE_URL,
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
      axios.get(`${this.baseUrl}portfolio.json`).then((response) => {
        if (response.data[id]) {
          this.item = response.data[id];
        } else {
          // If the provided id doesn't match with a portfolio entry, route back to home
          // FIXME: ????? Route back on undefined project
        }
      });
    },
  },
  mounted() {
    this.getItemContent(this.$route.params.id);
  },
  updated() {
    const imgLoad = imagesLoaded('#portfolio-content');
    imgLoad.on('done', () => {
      this.imagesLoaded = true;
    });
    if (document.querySelector('.video-js')) {
      videojs(document.querySelector('.video-js'), { preload: 'auto', fluid: true });
    }
  },
  metaInfo() {
    return {
      title: this.item.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.item.description },
      ],
    };
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
  overflow-y:scroll;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
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
    background: #f2f2f2;
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

img{
  max-width: 100%;
  max-height: 100%;
  display: block;
}
video{
  background: #f2f2f2;
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
