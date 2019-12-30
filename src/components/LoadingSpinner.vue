<template>
  <div class="loader">
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
};
</script>

<style scoped lang="scss">

.loader,
.loader:after {
  border-radius: 50%;
  width: 7em;
  height: 7em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  border-top: 0.5em solid #f2f2f2;
  border-right: 0.5em solid #f2f2f2;
  border-bottom: 0.5em solid#f2f2f2;
  border-left: 0.5em solid #d3d3d3;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>
