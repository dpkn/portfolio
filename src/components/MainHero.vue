<template>
  <section class="hero container" ref="root">
    <img
      class="headshot pull-right"
      src="/headshot.png"
      alt="Headshot"
    />
    <div class="pull-left">
      <h1>
        Hi! I'm a freelance <span>creative developer</span>
        building peculiar interactive digital artefacts, focussing on experimental web technologies.
      </h1>
      <p>
        Find me on
        <a
          href="https://github.com/dpkn"
          target="_blank"
        >GitHub</a>,
        <a
          href="https://twitter.com/danielkorssen"
          target="_blank"
        >Twitter</a>,
        <a
          href="https://instagram.com/danielkorssen"
          target="_blank"
        >Instagram</a>,
        <a
          href="http://linkedin.com/in/danielkorssen/"
          target="_blank"
        >LinkedIn</a>,
        or send me an
        <a
          href="#"
          onclick="this.href=atob('bWFpbHRvOmRhYW5rb3Jzc2VuJTQwZ21haWwuY29t'); return true"
        >
          email</a>.
      </p>
      <div class="aboutSection" :class="{open: aboutOpen }">
        <a @click="aboutOpen = !aboutOpen"><span>&rarr;</span>Exhibitions & Talks</a>
        <div>
          <p><b>'Creating a Not-So-Smart AI Chatbot with p5.js'</b>, Talk @ PCD, Amsterdam, 2019</p>
          <p><b>HertzianSpace</b>, Exhibition @ BYOB, Utrecht, 2019</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: 'MainHero',
  mounted() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, 500);
    this.$refs.root.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / 500, 1, 500);
    this.camera.position.z = 3;
    this.camera.position.y = 5;
    this.camera.position.x = 5;

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0.5, 1.0, 0.5).normalize();
    this.scene.add(light);

    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // this.scene.add(cube);

    const grid = new THREE.GridHelper(100, 100, 0xd9d9d9, 0xd9d9d9);
    this.scene.add(grid);

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.addEventListener('change', () => {
      this.renderer.render(this.scene, this.camera);
    });
    controls.update();

    const loader = new GLTFLoader();

    loader.load('/head.glb', (gltf) => {
      this.scene.add(gltf.scene);
      console.log('yoink');
    }, undefined, (error) => {
      console.error(error);
    });

    this.drawFrame();
  },
  data() {
    return {
      aboutOpen: false,
    };
  },
  methods: {
    drawFrame() {
      requestAnimationFrame(this.drawFrame);
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style scoped lang="scss">
.hero {
  padding: 20px 0 80px 0;
  @include clearfix;
}
.pull-left {
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
  height: 0;
  overflow:hidden;
  transition:0.3s height;
}
.aboutSection.open div{
  height: 200px;
}
.aboutSection a{
  font-weight: bold;
  text-decoration: underline;
}
.aboutSection a span{
  transition:0.5s transform;
  display: inline-block;
}
.aboutSection.open a span{
  transform: rotate(90deg);
}
</style>

<style>
canvas{
  position:absolute;
  z-index:-2;
  top:0;
  left:0;
}
</style>
