<template>
    <div ref="canvasContainer" class="canvasContainer">
        <canvas ref="canvas"></canvas>
        <div class="controls">
            <img v-if="isFullscreen" @click="exitFullscreen()"
            src="../assets/fullscreen_exit-24px.svg" alt="Exit Fullscreen"
            title="Exit Fullscreen" />
            <img v-else @click="goFullscreen()"
            src="../assets/fullscreen-24px.svg" alt="Enter Fullscreen"
            title="Enter Fullscreen"/>
        </div>
    </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: 'Cubes',
  mounted() {
    this.setUp3DBackground();
    ['', 'webkit', 'moz', 'ms'].forEach(prefix => document.addEventListener(`${prefix}fullscreenchange`, this.onFullscreenChange, false));
  },
  data() {
    return {
      isFullscreen: false,
    };
  },
  methods: {
    setUp3DBackground() {
      this.placedUnits = [];

      this.mouse = new THREE.Vector2();
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xffffff);

      const { canvas } = this.$refs;
      this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, 600);

      this.camera = new THREE.PerspectiveCamera(
        30,
        this.$refs.canvasContainer.clientWidth / 600, 1, 500,
      );
      this.camera.position.set(-4, 4, 6);
      this.camera.lookAt(3.5, 0.5, 0.5);

      // invisible floor for raycasting
      const geometry = new THREE.PlaneGeometry(100, 100, 0);
      const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
      material.visible = false;
      this.plane = new THREE.Mesh(geometry, material);
      this.plane.rotateX(-Math.PI / 2);
      this.scene.add(this.plane);

      this.raycaster = new THREE.Raycaster();

      const light = new THREE.AmbientLight(0xffffff, 1.0); // soft white light
      this.scene.add(light);

      const grid = new THREE.GridHelper(50, 50, 0xd9d9d9, 0xd9d9d9);
      this.scene.add(grid);

      const controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.maxDistance = 50;
      controls.minDistance = 5;

      controls.addEventListener('change', () => {
        this.renderer.render(this.scene, this.camera);
      });
      controls.update();

      const loader = new GLTFLoader();

      loader.load('/head2.glb', (gltf) => {
        [this.unit] = gltf.scene.children;

        const positions = [{ x: 3.5, z: -4.5 }, { x: 0.5, z: 2.5 }, { x: 3.5, z: 0.5 }];
        for (let index = 0; index < positions.length; index += 1) {
          const unit = this.unit.clone();
          unit.position.set(positions[index].x, 0.5, positions[index].z);
          this.scene.add(unit);
        }
      });


      window.onresize = this.onResize;
      //   window.ontouchmove = this.onMouseClick;
      this.$refs.canvas.addEventListener('mousedown', this.onMouseClick, true);
      this.$refs.canvas.addEventListener('touchmove', this.onMouseClick, true);
      this.drawFrame();
    },
    drawFrame() {
      requestAnimationFrame(this.drawFrame);

      this.renderer.render(this.scene, this.camera);
    },
    onMouseClick(event) {
      const canvas = document.querySelector('canvas');

      if (event.type === 'mousedown') {
        this.mouse.x = ((event.offsetX / canvas.clientWidth) * 2) - 1;
        this.mouse.y = (-(event.offsetY / canvas.clientHeight) * 2) + 1;
      } else {
        this.mouse.x = (((event.touches[0].pageX - event.touches[0].target.offsetLef) / canvas.clientWidth) * 2) - 1;
        this.mouse.y = (-((event.touches[0].pageY - event.touches[0].target.offsetTop) / canvas.clientHeight) * 2) + 1;
      }
      // update the picking ray with the camera and mouse position
      this.raycaster.setFromCamera(this.mouse, this.camera);

      // calculate objects intersecting the picking ray
      const intersects = this.raycaster.intersectObject(this.plane);

      const x = Math.floor(intersects[0].point.x) + 0.5;
      const z = Math.floor(intersects[0].point.z) + 0.5;
      let y = 0.5;
      if (this.placedUnits[x] && this.placedUnits[x][z]) {
        y = this.placedUnits[x][z] + 0.5;
      }

      const unit = this.unit.clone();
      unit.position.set(x, y, z);
      const random = Math.random();
      if (random <= 0.33) {
        unit.rotateX(-Math.PI / 2);
      } else if (random > 0.33 && random < 0.66) {
        unit.rotateY(-Math.PI / 2);
      } else if (random >= 0.66) {
        unit.rotateZ(-Math.PI / 2);
      }
      this.scene.add(unit);

      if (!this.placedUnits[x]) {
        this.placedUnits[x] = [];
      }
      if (this.placedUnits[x][z]) {
        this.placedUnits[x][z] += 1;
      } else {
        this.placedUnits[x][z] = 1;
      }
    },
    goFullscreen() {
      const element = this.$refs.canvasContainer;

      if (element.requestFullscreen) {
        element.requestFullscreen(); // W3C spec
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen(); // Firefox
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(); // Safari
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen(); // IE/Edge
      }
    },
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },
    onFullscreenChange() {
      if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        this.isFullscreen = true;
      } else {
        this.isFullscreen = false;
        this.onResize(undefined, true);
      }
    },
    onResize(event, fixedHeight = false) {
      if (fixedHeight) {
        this.camera.aspect = this.$refs.canvasContainer.clientWidth / 600;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.$refs.canvasContainer.clientWidth, 600);
      } else {
        this.camera.aspect = this.$refs.canvasContainer.clientWidth
        / this.$refs.canvasContainer.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(
          this.$refs.canvasContainer.clientWidth,
          this.$refs.canvasContainer.clientHeight,
        );
      }
    },
  },
};
</script>

<style scoped lang="scss">
.canvasContainer{
  z-index: 0;
  position:fixed;
  top:0;
  left:0;
}
.canvasContainer, canvas{
    width:100%;
  height:100%;
}
.controls{
    position:absolute;
    padding:30px;
    top:0;
    right:0;
}
</style>
