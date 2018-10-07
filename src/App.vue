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
  mounted() {
    this.switchStyle(this.$route.query.style);
  },
  watch: {
    /* eslint func-names: ["error", "never"] */
    // This function is called whenever the ?style parameter in the url
    // changes. It switches between two website themes by applying a class to the #app
    // element

    // TODO: REMOVE AFTER Project Portfolio is over.
    '$route.query.style': function (styleParameter) {
      this.switchStyle(styleParameter);
    },
  },
  methods: {
    switchStyle(styleParameter) {
      if (styleParameter === '2') {
        document.getElementById('app').className = 'alternative';
      } else if (styleParameter === '1') {
        document.getElementById('app').className = '';
      }
    },
  },
};
</script>
