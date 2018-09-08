<template>
  <div class="about">
    <h1>{{this.$route.params.id}}: <span>{{this.$route.params.name}}</span></h1>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
};
</script>
