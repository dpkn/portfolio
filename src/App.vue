<template>
  <div id="app">
    <MainNavigation></MainNavigation>
    <router-view/>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';

export default {
  name: 'app',
  components: {
    MainNavigation,
  },
};
</script>

<style lang="scss">

</style>
