<template>
  <div class="portfolio-item">
    <div class="info container">
      <router-link to="/" class="back-button">&larr; PORTFOLIO</router-link>
      <h1>{{item.title}}</h1>
      <h2 v-if="item.subtitle">
        {{item.subtitle}}
      </h2>
      <p v-if="item.description">
        {{item.description}}
      </p>
      <p v-if="item.cta" v-html="item.cta">
      </p>
    </div>
    <div :class="item.layout">
      <img :src="contents.url" v-for="(contents,key) in item.content"
      :key="key" class="item" :class="contents.class">
    </div>
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
      items: {},
      item: {
        title: '',
        content: '',
        coverImage: '',
      },
    };
  },
  methods: {
    getItemContent(id) {
      axios.get('portfolio.json')
        .then((response) => {
          console.log(response, id);
          // handle success
          this.items = response.data;
          if (this.items[id]) {
            this.item = this.items[id];
          } else {
            // If the provided id doesn't match with a portfolio entry, route back to home
            this.$router.push('/');
          }
        });
    },
  },
  mounted() {
    // FIXME: : Figure out why loading callback does not work ksfdskjklddksaldjksakljdaklj
    this.getItemContent(this.$route.params.id);

    const imgLoad = imagesLoaded('.filmstrip');
    imgLoad.on('progress', (instance, image) => {
      console.log(instance, image);
    });
    imgLoad.on('done', (instance, image) => {
      console.log(instance, image);
    });
  },
};
</script>

<style lang="scss">
.info{
  margin:70px auto;
  text-align: left;
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
    margin-top: -4px;
    &.sixty{
      width: 60%;
    }
    &.fourty{
      width: 40%;
    }
  }
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
}
</style>
