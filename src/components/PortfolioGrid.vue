<template>
  <section class="portfolio">
    <section class="button-group">
      <router-link tag="button" :to="{ name: 'portfolio', params: { filter: 'all'} }">
        all
      </router-link>
      <span>|</span>
      <router-link tag="button" :to="{ name: 'portfolio', params: { filter:'web' }  }">
        web
      </router-link>
      <router-link tag="button" :to="{ name: 'portfolio', params: { filter:'visual'} }">
        visual
      </router-link>
      <router-link
        tag="button"
        :to="{ name: 'portfolio', params: { filter:'experiments'} }">
        experiments
      </router-link>
    </section>
    <transition-group name="fade" mode="out-in">
      <section id="portfolio-grid" class="portfolio-grid container" v-show="imagesLoaded" key="portfolio-grid">
        <div
          v-for="(item,key) in portfolioItems"
          v-bind:key="key"
          class="portfolio-item"
          :class="item.tags"
        >
          <router-link :to="{ name: 'PortfolioItem', params: {'id':key} }">
            <img
              v-if="item.thumbnail.type=='img'"
              :src="baseUrl + item.thumbnail.url"
              :alt="item.title"
            />

            <video
              v-if="item.thumbnail.type=='video'"
              :poster="baseUrl + item.thumbnail.poster"
              autoplay
              loop
              muted
              playsinline
            >
              <source :src="baseUrl + item.thumbnail.url" type="video/mp4" />
            </video>

            <div class="overlay">
              <div class="text">
                <h1>{{ item.title }}</h1>
                <p>
                  {{
                  (item.thumbnail.subtitle === undefined) ?
                  item.subtitle : item.thumbnail.subtitle
                  }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </section>
      <LoadingSpinner v-show="!imagesLoaded" key="loading-portfolio"></LoadingSpinner>
    </transition-group>
  </section>
</template>

<script>
// Import plugins
import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import axios from 'axios';

// Import components
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {
  name: 'PortfolioGrid',
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      portfolioItems: {},
      imagesLoaded: false,
    };
  },
  methods: {
    applyFilter(filterName, isStill = false) {
      if (this.grid) {
        if (filterName === 'all' || !filterName) {
          this.filter = '*';
        } else {
          this.filter = `.${filterName}`;
        }
        let transitionDuration = '0.4s';
        if (isStill) {
          transitionDuration = 0;
        }
        this.grid.arrange({ filter: this.filter, transitionDuration });
      }
    },
  },
  mounted() {
    // Import all portfolio items from the .json file into this components data
    axios.get(`${this.baseUrl}portfolio.json`).then((response) => {
      this.portfolioItems = response.data;
    });
  },
  activated() {
    // Because of keep-alive, videos stop playing when out of view.
    // This starts them again after the page is visible
    const videos = document.getElementsByTagName('video');
    // eslint-disable-next-line no-restricted-syntax
    for (const video of videos) {
      if (video.paused) {
        video.play();
      }
    }
  },
  updated() {
    // When Vue has finished rendering the portfolio items,
    // wait for the images to load, then activate Isotope.
    imagesLoaded('#portfolio-grid', () => {
      this.imagesLoaded = true;
      this.grid = new Isotope('#portfolio-grid', {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
        masonry: {
          gutter: 30,
        },
      });

      // Really ugly fix for the video elements not having a height at first
      setTimeout(()=>{
        this.grid.layout();
      },300)

      // If no filter is specified, show noteworthy projects. Otherwise apply requested filter
      if (this.$route.params.filter === '' || !this.$route.params.filter) {
        this.$router.push({
          name: 'portfolio',
          params: { filter: 'all' },
        });
      } else {
        this.applyFilter(this.$route.params.filter, true);
        this.grid.layout();
      }
    });
  },
  watch: {
    /* eslint func-names: ["error", "never"] */
    // If the route changes, it means that another filter is applied
    // or the page switched. Only apply new filter on actual filter change
    '$route.params.filter': function (filterName) {
      if (filterName !== this.filterName) {
        this.applyFilter(filterName);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.portfolio {
  background: #fafafa;
  text-align: center;
  @include clearfix;
  min-height: 600px;
}
.portfolio-grid {
  text-align: center;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  @include clearfix;
}
.portfolio-item {
  float: left;
  position: relative;
  margin-bottom: 30px;
  background: #323232;
  border-radius: 10px;
    //box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 4px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.23);
  transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
  margin-right: 0;
  width: 100%;
  @media screen and (min-width: 800px) {
      width: 50%;
      width: calc(50% - 15px);
  }
  @media screen and (min-width: 1200px) {
    width: 33%;
    width: calc(33% - 30px);
  }
  overflow: hidden;
  border-right-width: 0px;
}
.portfolio img {
  display: block;
  width: 100%;
}

video{
  width:100%;
  height:auto;
  margin-bottom:-10px;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  border-radius: 10px;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.5);
  .text {
    background: #fff;
    padding: 20px 0;
    bottom: -100px;
    position: absolute;
    width: 100%;
    text-align: center;
    transition: bottom 0.3s;
    color: #000;
    h1 {
      font-size: 2em;
      font-weight: 700;
    }
    p {
      padding: 0 50px;
    }
  }
  a,
  a:visited {
    color: #000;
  }
}
.portfolio-item:hover{
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  
}
.portfolio-item:hover .overlay {
  opacity: 1;
}
.portfolio-item:hover .overlay .text {
  bottom: 0;
}
</style>
