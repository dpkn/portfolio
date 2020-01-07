<template>
  <section class="hero container">
    <img class="headshot pull-right" src="/headshot.jpg" alt="Headshot" />
    <div class="pull-left">
      <h1>
        Hi! I'm a freelance <span>creative developer</span>
        building peculiar interactive digital artefacts, focussing on experimental web technologies.
      </h1>
      <p>
        Find me on
        <a href="https://github.com/dpkn" target="_blank">GitHub</a>,
        <a href="https://twitter.com/danielkorssen" target="_blank">Twitter</a>,
        <a href="https://instagram.com/danielkorssen" target="_blank">Instagram</a>,
        <a href="http://linkedin.com/in/danielkorssen/" target="_blank">LinkedIn</a>,
        or send me an
        <a href="#"
          onclick="this.href=atob('bWFpbHRvOmRhYW5rb3Jzc2VuJTQwZ21haWwuY29t'); return true">
          email</a>.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainHero',
};
</script>

<style scoped lang="scss">
.hero{
  padding:20px 0 80px 0;
  @include clearfix;
}
.pull-left{
  max-width: 700px;
}
h1{
  font-size: 1.4em;
  font-weight: 300;
  line-height: 1.5em;
  font-family: 'Merriweather', serif;
  & span{
    color:orange;
    background-image: repeating-linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red, violet);
    text-align: center;
    background-size: 800% 800%;
    background-clip:text;
    text-fill-color:transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    animation: rainbow 8s ease infinite;
  }
}

@keyframes rainbow {
    0%{background-position:0% 50%}
    50%{background-position:100% 25%}
    100%{background-position:0% 50%}
}

.headshot{
  width: 250px;
  margin-top: -30px;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition:1s;
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
</style>
