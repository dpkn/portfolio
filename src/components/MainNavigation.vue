<template>
  <header class="container">
      <h1>Dani&euml;l Korssen</h1>
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
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  pointer-events:none;
}
h1, a{
  margin: 0;
  font-weight: bold;
  text-decoration: none;
}
</style>
