<template>
  <div class="portfolio-item-overview" :style="{ backgroundColor: item.background, color: item.color}">
    <div class="info container">
      <a
        @click.prevent="handleBack('/portfolio')"
        class="back-button"
      >&larr; PORTFOLIO</a>

      <h1
        v-if="item.title"
        v-html="item.title"
      ></h1>
      <h2
        v-if="item.subtitle"
        v-html="item.subtitle"
        :style="{ color: item.color}"
      ></h2>
      <p
        v-if="item.description"
        v-html="item.description"
      ></p>
      <p
        class="cta"
        v-if="item.cta"
        v-html="item.cta"
      ></p>
    </div>
    <transition-group
      name="fade"
      mode="out-in"
    >
      <div
        id="portfolio-content"
        :class="item.layout"
        v-show="imagesLoaded"
        key="portfolio-content"
      >
        <div
          v-for="(contents,key) in item.content"
          :key="key"
          class="item"
          :class="contents.class"
          :style="contents.style"
        >
          <video
            v-if="contents.type=='video'"
            autoplay
            loop
            muted
            playsinline
          >
            <source
              :src="baseUrl + contents.url"
              type="video/mp4"
            />
          </video>

          <div
            v-else-if="contents.type=='vimeo'"
            class="embed-container"
          >
            <iframe
              :src="contents.url +'&loop=1&title=0&byline=0&portrait=0'"
              type="video/mp4"
              width="100%"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen

            ></iframe>
          </div>

          <div v-else-if="contents.type=='text'">
            <h1>{{contents.title}}</h1>
            <div v-html="contents.description"></div>
          </div>

          <img
            v-else
            :src="baseUrl + contents.url"
          />
        </div>
      </div>
      <LoadingSpinner v-show="!imagesLoaded" key="loading-item"></LoadingSpinner>
    </transition-group>
  </div>
</template>

<script>
// Import plugins
import imagesLoaded from 'imagesloaded';
import axios from 'axios';

// Import components
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {
  name: 'PortfolioItem',
  components: {
    LoadingSpinner,
  },
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
    handleBack(fallback) {
      if (!this.fromRoute.name) {
        this.$router.push(fallback);
      } else {
        this.$router.back();
      }
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
  },
  metaInfo() {
    return {
      title: this.item.title,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.item.description,
        },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from;
    });
  },
};
</script>

<style lang="scss" scoped>
.text div {
  max-width: 400px;
  margin: 0 auto;
}
.portfolio-item-overview {
  background: #fff;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  overflow-y: scroll;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
}
.info {
  margin-top: 50px;
  margin-bottom: 50px;
}

.back-button {
  text-decoration: underline;
}

h1,
h2 {
  margin: 0;
}
h2 {
  font-weight: 500;
  font-size: 1.4em;
  opacity: 0.5;
}

p a {
  font-weight: bold;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/* The different types of Portfolio layouts are defined here*/
.grid {
  .item {
    background: #f2f2f2;
    display: inline-block;
    width: 50%;
    float: left;
    &.hundred {
      width: 100%;
    }
    &.eighty {
      width: 80%;
    }
    &.sixty {
      width: 60%;
    }
    &.fourty {
      width: 40%;
    }
    &.twenty {
      width: 20%;
    }
    @media only screen and (max-width: 1000px) {
      width: 100% !important;
    }
  }
  @include clearfix;
}

img {
  width: 100%;
  max-height: 100%;
  display: block;
}
video {
  background: #f2f2f2;
  width:100%;
}

.filmstrip {
  border: 0;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  overflow-scrolling: touch;
  overscroll-behavior: contain;
  .item {
    display: inline-block;
    overflow: hidden;
    margin-left: 30px;
    &:last-child {
      margin-right: 30px;
    }
    width: 400px;
    background: #f2f2f2;
  }
  padding-bottom: 50px;
}

.blog div, .blog img {
  max-width: 1200px;
  margin: 30px auto;
}
</style>
