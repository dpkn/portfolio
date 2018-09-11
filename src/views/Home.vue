<template>
  <div class="home">
    <MainNavigation></MainNavigation>
    <MainHero></MainHero>
    <PortfolioGrid></PortfolioGrid>
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
