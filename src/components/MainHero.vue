<template>
  <section class="hero container">
    <img class="headshot pull-right" src="/headshot.jpg" alt="Headshot" />
    <h1 class="pull-left">Hi! I am Dani&euml;l, a <span>creative developer</span>
      working and experimenting at the intersection of art and technology.
      I'm currently studying <span>Interaction Design</span> at <a href="https://www.hku.nl/en.htm" target="_blank">HKU</a>.
      You can find me on
      <a href="https://github.com/dpkn" target="_blank">GitHub</a>,
      <a href="http://linkedin.com/in/danielkorssen/" target="_blank">LinkedIn</a>,
      or <a href="#" onclick="this.href=atob('bWFpbHRvOmRhYW5rb3Jzc2VuJTQwZ21haWwuY29t'); return true">write me a message.</a>
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
  padding:40px 0 80px 0;
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

.headshot{
  width: 250px;
  margin-top: -30px;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition:1s;
  @media screen and (max-width: 1000px) {
    display: none;
  }
}
</style>
