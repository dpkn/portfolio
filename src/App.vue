<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.switchStyle(this.$route.query.style);
  },
  watch: {
    /* eslint func-names: ["error", "never"] */
    // This function is called whenever the ?style parameter in the url
    // changes. It switches between two website themes by applying a class to the #app
    // element
    '$route.query.style': function (style) {
      this.switchStyle(style);
    },
  },
  methods: {
    switchStyle(style) {
      if (style === '2') {
        document.getElementById('app').className = 'alternative';
      } else {
        document.getElementById('app').className = '';
      }
    },
  },
};
</script>
