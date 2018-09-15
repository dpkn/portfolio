<template>
  <div class="test">
    <MainNavigation></MainNavigation>
    <nav class="sub-nav">
        <router-link to="/portfolio">Jaar 1</router-link>
        <router-link to="/portfolio">Jaar 2</router-link>
        <router-link to="/portfolio">Jaar 3</router-link>
        <router-link to="/portfolio">Jaar 4</router-link>
    </nav>

  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';

export default {
  name: 'Contact',
  components: {
    MainNavigation,
  },
};
</script>

<style lang="scss">
.sub-nav{
  width: 100%;
  background: #f2f2f2;
  text-align: center;
}
.sub-nav a{
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  color:#000;
}

.active{
  border: 2px solid #000;
  border-radius: 3px;
}

</style>
