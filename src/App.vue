<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from "components/Header/Header.vue";
export default {
  components: {
    MHeader
  }
};
</script>

<style>
#app {
  position: relative;
  z-index: 2;
}
</style>
