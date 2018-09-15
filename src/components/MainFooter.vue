<template>
  <footer>
    <p>
      &copy;{{ new Date().getFullYear() }} Dani&euml;l Korssen, Interaction Designer.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
};
</script>

<style scoped lang="scss">
footer{
  text-align: center;
  padding: 20px;
}
</style>
