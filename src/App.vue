<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
// TODO: Move mix-in to a global file
@mixin clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
.portfolio{
  background: #FAFAFA;
  width: 100%;
  text-align: center;
  padding-top: 20px;
  @include clearfix;
}
.buttons{
  max-width: 500px;
  margin: 20px auto;
}
.button{
  padding: 10px 15px;
  margin: 5px;
  border-radius: 3px;
  font-weight: 500;
  background: #fff;
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.20);
  transition: color .5s, background .5s;
  &:hover{
    background: #f2f2f2;
  }
  &.selected{
    background: #434343;
    color:#fff;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
