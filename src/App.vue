<template>
  <div id="app">
    <MainNavigation></MainNavigation>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Portfolio',
    // all titles will be injected into this template
    titleTemplate: '%s | Daniël Korssen',
    meta: [
      { vmid: 'description', name: 'description', content: 'Daniël is a creative developer working and experimenting at the intersection of art and technology, currently studying Interaction Design at HKU University of Arts. You can find him on GitHub, LinkedIn, Instagram, or send him a message.' },
    ],
  },
};
</script>
