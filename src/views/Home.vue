<template>
  <div class="home">
    <MainHero/>
    <Cubes/>
    <PortfolioGrid/>
    <MainFooter/>
  </div>
</template>

<script>
import MainHero from '@/components/MainHero.vue';
import Cubes from '@/components/Cubes.vue';
import PortfolioGrid from '@/components/PortfolioGrid.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'home',
  components: {
    MainHero,
    PortfolioGrid,
    Cubes,
    MainFooter,
  },
};
</script>
