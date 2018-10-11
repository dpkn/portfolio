<template>
  <div class="home">
    <MainHero></MainHero>
    <PortfolioGrid></PortfolioGrid>
  </div>
</template>

<script>
import MainHero from '@/components/MainHero.vue';
import PortfolioGrid from '@/components/PortfolioGrid.vue';

export default {
  name: 'home',
  components: {
    MainHero,
    PortfolioGrid,
  },
};
</script>
