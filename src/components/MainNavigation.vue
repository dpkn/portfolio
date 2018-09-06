<template>
  <header class="navbar">
    <h1 class="pull-left">Daniël Korssen</h1>
    <nav class="pull-right">
      <router-link to="/">work</router-link>
      <router-link to="/about">contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainNavigation',
};
</script>

<style scoped lang="scss">
// TODO: Move mix-in to a global file
@mixin clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
.navbar{
  width:100%;
  padding: 50px 0;
  box-sizing: border-box;
  max-width: 1000px;
  margin: 0 auto;
  @include clearfix;
}
.navbar h1, a{
  margin: 0;
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
  color:#000;
}
a{
  font-size: 1.5em;
  padding-left: 10px;
}
</style>
