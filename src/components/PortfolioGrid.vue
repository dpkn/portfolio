<template>
  <section class="portfolio-grid">
    <div v-for="(item,key) in portfolioItems" class="portfolio-item" style="">
        <router-link :to="{ name: 'PortfolioItem', params: {'id':key} }">
          <img v-if="item.thumbnail.type=='img'" :src="baseUrl + item.thumbnail.url" :alt="item.title" />
          <video  v-if="item.thumbnail.type=='video'"
                  autoplay loop muted playsinline class="video-js"
                  data-setup='{"preload": "auto","fluid":true}'>
            <source
              :src="`${baseUrl}videos/big_buck_bunny.webm`"
              type="video/webm">
              <source
                :src="`${baseUrl}videos/big_buck_bunny.mp4`"
                type="video/mp4">
          </video>
          <div class="overlay">
            <div class="text"><h1>{{ item.title }}</h1><p>{{ item.subtitle }}</p></div>
          </div>
        </router-link>
    </div>
<!--
    <div class="portfolio-item" style="height:550px;">
      <img :src="`${baseUrl}videos/lesya.png`" alt="Portfolio item" />
      <div class="overlay">
        <div class="text">Lesya</div>
      </div>
    </div>
    <router-link :to="{ name: 'PortfolioItem', params: {'id':3,'name':'hello-world'} }">
      <div class="portfolio-item">
        <video autoplay loop muted playsinline class="video-js"
        data-setup='{"preload": "auto","fluid":true}'>
          <source
            :src="`${baseUrl}videos/big_buck_bunny.webm`"
            type="video/webm">
            <source
              :src="`${baseUrl}videos/big_buck_bunny.mp4`"
              type="video/mp4">
        </video>
        <div class="overlay">
          <div class="text">Hello World</div>
        </div>
      </div>
    </router-link>
    <div class="portfolio-item" style="height:350px;">
      <img :src="`${baseUrl}videos/howmanyweeks.png`" alt="Portfolio item" />
      <div class="overlay">
        <div class="text">How many weeks left?</div>
      </div>
    </div>
    <div class="portfolio-item" style="height:500px;">
      <img :src="`${baseUrl}videos/bloclock.png`" alt="Portfolio item" />
      <div class="overlay">
        <div class="text">Bloclock</div>
      </div>
    </div>
  -->
  </section>
</template>

<script>
// Import assest for video.js library
import 'video.js/dist/video-js.css';
import 'video.js';

import portfolioItems from '../assets/portfolio/portfolio.json';

export default {
  name: 'PortfolioGrid',
  created() {
    // Import all portfolio items from the .json file into this components data
    this.portfolioItems = portfolioItems;
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      portfolioItems,
    };
  },
};
</script>

<style scoped lang="scss">
// TODO: Move mix-in to a global file
@mixin clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
.portfolio-grid{
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  @include clearfix;
  box-sizing: border-box;
}
.portfolio-item{
  width: 47%;
  width: -webkit-calc(50% - 30px);
  float:left;
  display: inline-block;
  position: relative;
  border-radius: 3px;
  margin: 15px;
  background: #323232;
  box-shadow: 0 1px 2px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.20);
  overflow: hidden;
}
.portfolio img {
  display: block;
  width: 100%;
}
.portfolio video {
  display: block;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
}
.vjs-tech { object-fit: cover; }
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  border-radius: 3px;
  transition: .3s ease;
  background-color: rgba(0,0,0,0.5);
  .text{
    background: #fff;
    padding: 20px 0;
    bottom: -100px;
    position: absolute;
    width: 100%;
    text-align: center;
    transition: bottom 0.3s;
    color:#000;
    h1{
      font-size: 2em;
      font-weight: 700;
    }
  }
  a,a:visited{
    color:#000;
  }
}
.portfolio-item:hover .overlay {
  opacity: 1;
}
.portfolio-item:hover .overlay .text {
  bottom:0;
}
</style>
