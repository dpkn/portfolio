<template>
  <header class="navbar container">
    <h1 class="pull-left">Daniël Korssen</h1>
    <nav class="pull-right">
      <router-link to="/portfolio">work</router-link>
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
.navbar h1, a{
  margin: 0;
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
  color:#000;
}
.active{
  border: 2px solid #000;
  border-radius: 3px;
}
a{
  padding: 5px 10px;
  font-size: 1.5em;
  margin-left: 10px;
}
</style>
