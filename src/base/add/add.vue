<!--  -->
<template>
  <div class="center">
    <mavon-editor v-model="something" defaultOpen="preview" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      something:""
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';
@import '~./index.css';
//我上次做音乐的 必须把哪个 放在这里 才拥有 不然还是没图标 放在 main.js 会在全局加载  但是我放在main。js中没用 
.center {
  width: 900px;
  overflow: hidden;
  background-color: #f7f7f7;
  margin: 0px auto 110px;
  position: relative;

  
}
</style>