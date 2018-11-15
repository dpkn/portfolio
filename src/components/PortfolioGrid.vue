<template>
  <section class="portfolio">

    <section class="button-group">
      <router-link tag="button" :to="{ name: 'portfolio', params: { filter: 'all'} }">
        all
      </router-link>
      <router-link tag="button" :to="{ name: 'portfolio', params: { filter:'web' }  }">
        web
      </router-link>
      <router-link tag="button" :to="{ name: 'portfolio', params: { filter:'photography'} }">
        photography
      </router-link>
      <router-link tag="button" :to="{ name: 'portfolio', params: { filter:'branding'} }">
        branding
      </router-link>
    </section>

    <section id="portfolio-grid" class="portfolio-grid container">
      <div v-for="(item,key) in portfolioItems" v-bind:key="key" class="portfolio-item"
        :class="item.tags">
          <router-link :to="{ name: 'PortfolioItem', params: {'id':key} }">
            <img v-if="item.thumbnail.type=='img'" :src="baseUrl + item.thumbnail.url"
            :alt="item.title" />
            <video  v-if="item.thumbnail.type=='video'"
                    autoplay loop muted playsinline class="video-js"
                    data-setup='{"preload": "auto","fluid":true}'>
              <source
                  :src="baseUrl + item.thumbnail.url"
                type="video/webm">
            </video>
            <div class="overlay">
              <div class="text">
                <h1>{{ item.title }}</h1>
                <p>
                  {{
                    (item.thumbnail.subtitle === undefined) ? item.subtitle : item.thumbnail.subtitle
                  }}
                </p>
              </div>
            </div>
          </router-link>
      </div>
    </section>
  </section>
</template>

<script>
// Import plugins
import 'video.js/dist/video-js.css';
import 'video.js';

import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import axios from 'axios';

export default {
  name: 'PortfolioGrid',
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      portfolioItems: {},
    };
  },
  mounted() {
    // Import all portfolio items from the .json file into this components data
    axios.get('portfolio.json').then((response) => {
      this.portfolioItems = response.data;
    });
  },
  updated() {
    // When Vue has finished rendering the portfolio items,
    // wait for the images to load, then activate Isotope.
    imagesLoaded('#portfolio-grid', () => {
      this.grid = new Isotope('#portfolio-grid', {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
        masonry: {
          gutter: 30,
        },
      });
      if (this.$route.params.filter === '' || !this.$route.params.filter) {
        this.$router.push({ name: 'portfolio', params: { filter: 'all' } });
      }
    });
  },
  watch: {
    /* eslint func-names: ["error", "never"] */
    // If the route changes, it means that another filter is applied.
    '$route.params.filter': function (filterName) {
      if (this.grid) {
        if (filterName === 'all' || !filterName) {
          this.filter = '*';
        } else {
          this.filter = `.${filterName}`;
        }
        this.grid.arrange({ filter: this.filter });
        this.grid.layout();
      }
    },
  },
};
</script>

<style scoped lang="scss">

.portfolio{
  background: #FAFAFA;
  text-align: center;
  @include clearfix;
  min-height: 600px;
}
.portfolio-grid{
  text-align: center;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  @include clearfix;

}
.portfolio-item{
  width: 50%;
  width: -webkit-calc(50% - 15px);
  float:left;
  display: inline-block;
  position: relative;
  border-radius: 3px;
  margin-bottom: 30px;
  background: #323232;
  box-shadow: 0 1px 2px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.20);
  overflow: hidden;
  @media screen and (max-width: 800px) {
    margin-right: 0;
    width: 100%;
  }
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
    p{
      padding: 0 50px;
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
