<template>
  <div class="home">
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
  name: 'home',
  components: {
    MainNavigation,
    MainHero,
    PortfolioGrid,
    MainFooter,
  },
};
</script>
