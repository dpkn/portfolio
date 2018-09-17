<template>
  <header class="navbar container">
    <router-link to="/portfolio">
      <h1 class="pull-left">Daniël Korssen</h1>
    </router-link>
    <nav class="pull-right">
      <router-link to="/portfolio">work</router-link>
      <a href="hku/resume.pdf" target="_blank">resume</a>
      <router-link to="/hku">hku</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainNavigation',
};
</script>

<style scoped lang="scss">
.navbar{
  padding: 30px 0;
  box-sizing: border-box;
  @include clearfix;
}
h1, a{
  margin: 0;
  font-weight: bold;
  text-decoration: none;
  color:#000;
}
nav a{
  padding: 5px 10px;
  font-size: 1.5em;
  margin-left: 10px;
  border-radius: 3px;
  &.active{
    border: 2px solid #000;
    margin-left: 6px;
  }
}
</style>
