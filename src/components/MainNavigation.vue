<template>
  <nav class="navbar">
    <h1>DANIEL KORSSEN</h1>
    <router-link to="/">Homeee</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'MainNavigation',
};
</script>

<style scoped lang="scss">
.navbar{
  width:100%;
  background: #fff;
  color:#000;
}
</style>
