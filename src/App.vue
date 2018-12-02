<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import MHeader from "components/Header/Header.vue";
import Bottom from "components/Bottom/Bottom.vue";
export default {
  components: {
    MHeader,
    Bottom
  }
};
</script>

<style>
#app {
  position: relative;
  z-index: 2;
}
</style>
