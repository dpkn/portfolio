<template>
  <section class="hero">
    <h1 class="pull-left">Hi! I am Dani&euml;l Korssen, a <span>creative developer</span>
      working and experimenting at the intersection of art and technology.
      I currently study Interaction Design at <a href="https://www.hku.nl/en.htm" target="_blank">HKU</a>.
      You find me on
      <a href="https://github.com/dpkn" target="_blank">GitHub</a>,
      <a href="http://linkedin.com/in/danielkorssen/" target="_blank">LinkedIn</a>,
      <a href="http://instagram.com/danielkorssen" target="_blank">Instagram</a>,
      or <a href="#">write me a message</a>.
    </h1>
    <img class="headshot pull-right" src="../assets/images/headshot_square2.png" alt="Headshot" />
  </section>
</template>

<script>
export default {
  name: 'MainHero',
};
</script>

<style scoped lang="scss">
.hero{
  padding:100px 0 160px 0;
  margin: 0 auto;
  max-width: 1000px;
  @include clearfix;
}
.hero h1{
  font-size: 1.7em;
  font-weight: 500;
  & span{
    color:#F39237;
  }
  max-width: 700px;
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
.headshot{
  width: 250px;
  margin-top: -30px;
  border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition:1s;
}
.headshot:hover{
  transform: rotate(360deg);
}
</style>
