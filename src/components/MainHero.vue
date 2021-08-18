<template>
  <section class="hero container" ref="root">
    <div class="introduction">
      <h1>
        Hi! I'm a freelance <span>creative technologist</span>
        building peculiar interactive digital artefacts, focussing on experimental web technologies.
      </h1>
      <p>
        Find me on
        <a
          href="https://github.com/dpkn"
          target="_blank"
        >GitHub</a>,
        <a
          href="https://instagram.com/danielkorssen"
          target="_blank"
        >Instagram</a>,
        <a
          href="http://linkedin.com/in/danielkorssen/"
          target="_blank"
        >LinkedIn</a>,
        <a
          href="https://twitter.com/danielkorssen"
          target="_blank"
        >Twitter</a>,
        <a
          href="https://open.spotify.com/user/daankorssen"
          target="_blank"
        >Spotify</a>,
        or send me an
        <a
          href="#"
          onclick="this.href=atob('bWFpbHRvOmRhYW5rb3Jzc2VuJTQwZ21haWwuY29t'); return true"
        >
          email</a>.
      </p>
      <div class="aboutSection" :class="{open: aboutOpen }">
        <a @click="aboutOpen = !aboutOpen"><span>&rarr;</span>Recent Exhibitions & Talks</a>
        <div>
          <p><b>Awwwards.com Honourable Mention / Mobile Excellence</b>, portfolionight.xyz, 2021 (Website)</p>
          <p><b>HertzianSpace</b>, Dutch Design Week, 2020 (Exhibition)</p>
          <p><b>Mathematical Love</b>, BYOB Utrecht, 2020 (Exhibition)</p>
          <p><b>'Demystifying Technology'</b>, Ars Electronica, 2020 (Discussion)</p>
          <p><b>HertzianSpace</b>, Ars Electronica, 2020 (Exhibition)</p>
          <p><b>'Organizing a Digital Dance Party'</b>, IxDA Redux Conference, 2020 (Session)</p>
          <p><b>HertzianSpace</b>, BYOB Utrecht, 2019 (Exhibition)</p>
          <p><b>'Creating a Not-So-Smart AI Chatbot with p5.js'</b>, PCD Amsterdam, 2019 (Talk)</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainHero',
  data() {
    return {
      aboutOpen: false,
    };
  },
};
</script>

<style scoped lang="scss">
.hero {
  padding: 20px 0 80px 0;
  position: relative;
  overflow:hidden;
  display:flex;
  z-index: 5;
     user-select: none;
    pointer-events: none;

}
.introduction{
  max-width: 700px;
}
h1 {
  font-size: 1.4em;
  font-weight: 300;
  line-height: 1.5em;
  font-family: "Merriweather", serif;
  & span {
    color: orange;
    background-image: repeating-linear-gradient(
      45deg,
      violet,
      indigo,
      blue,
      green,
      yellow,
      orange,
      red,
      violet
    );
    text-align: center;
    background-size: 800% 800%;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    animation: rainbow 8s ease infinite;
  }
}
.hero div p a{
  pointer-events: all;
}

@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 25%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.headshot {
  // display: none;
  width: 250px;
  margin-top: -30px;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 1s;
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
.aboutSection div{
  max-height: 0;
  overflow:hidden;
  transition:0.3s max-height;
  margin-left: 15px;
  margin-top:10px;
  font-size:.9em;
  p{
    margin-top: 0;
    margin-bottom: 0;
  }
}
.aboutSection.open div{
  max-height:400px;
}
.aboutSection a{
  font-weight: bold;
  text-decoration: underline;
    pointer-events: all;
}
.aboutSection a span{
  transition:0.5s transform;
  display: inline-block;
}
.aboutSection.open a span{
  transform: rotate(90deg);
}
</style>
