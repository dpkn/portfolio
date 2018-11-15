<template>
  <div id="app">
    <MainNavigation></MainNavigation>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <MainFooter></MainFooter>

    <transition name="fade" mode="out-in">
      <router-view name="modal"></router-view>
    </transition>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'app',
  components: {
    MainNavigation,
    MainFooter,
  },
};
</script>
