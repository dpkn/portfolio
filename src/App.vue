<template>
  <div id="app">
    <MainNavigation></MainNavigation>
    <MainHero></MainHero>
    <section class="portfolio">
      <section class="buttons">
        <a class="button">school</a>
        <a class="button selected">graphic design</a>
        <a class="button">experiments</a>
        <a class="button">case studies</a>
        <a class="button">web</a>
        <a class="button">other</a>
      </section>
      <PortfolioGrid></PortfolioGrid>
    </section>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';
import MainHero from '@/components/MainHero.vue';
import PortfolioGrid from '@/components/PortfolioGrid.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'app',
  components: {
    MainNavigation,
    MainHero,
    PortfolioGrid,
    MainFooter,
  },
};
</script>

<style lang="scss">
// TODO: Move mix-in to a global file
@mixin clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
.portfolio{
  background: #FAFAFA;
  width: 100%;
  text-align: center;
  padding-top: 20px;
  @include clearfix;
}
.buttons{
  max-width: 500px;
  margin: 20px auto;
}
.button{
  padding: 10px 15px;
  margin: 5px;
  border-radius: 3px;
  font-weight: 500;
  background: #fff;
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.20);
  transition: color .5s, background .5s;
  &:hover{
    background: #f2f2f2;
  }
  &.selected{
    background: #434343;
    color:#fff;
  }
}
</style>
