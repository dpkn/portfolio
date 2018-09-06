<template>
  <section class="hero">
    <h1>Hi! I am Dani&euml;l Korssen, an <span>interaction designer</span>
      focused on finding new ways to use technology as a method of expression.
      Lorem ipsum dolor sit amet I need more text here. Find me on <a href="#">GitHub</a>,
      <a href="#">LinkedIn</a>, <a href="#">Instagram</a>, or <a href="#">write me a message</a>.
    </h1>
  </section>
</template>

<script>
export default {
  name: 'MainHero',
};
</script>

<style scoped lang="scss">
.hero{
  padding:100px 0;
}
.hero h1{
  font-size: 1.7em;
  font-weight: 500;
  max-width: 1000px;
  margin: 0 auto;
  & span{
    color:#F39237;
  }
}
.hero a{
  color:#000;
  transition:color .5s;
  &:visited{
    color:#000;
  }
  &:hover{
    color:#6f6f6f;
  }
}
</style>
