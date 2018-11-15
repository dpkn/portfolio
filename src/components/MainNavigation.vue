<template>
  <header class="container">
      <h1 class="pull-left">Daniël Korssen</h1>
  </header>
</template>

<script>
export default {
  name: 'MainNavigation',
  props: ['styleParameter'],
};
</script>

<style scoped lang="scss">
header{
  padding: 30px 0;
  box-sizing: border-box;
  @include clearfix;
}
h1, a{
  margin: 0;
  font-weight: bold;
  text-decoration: none;
}
</style>
