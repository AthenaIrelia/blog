<!--  -->
<template>
  <div class="bgbox">
    <router-link class="box" tag="div" to="/Admin/Add1">
      <span>添加友链</span>
    </router-link>
    <form-fontrol></form-fontrol>
    <router-view></router-view>
  </div>
</template>

<script>
import formFontrol from "base/table/table1.vue";
export default {
  data() {
    return {
      text: [1, 2, 3, 4, 5]
    };
  },

  components: {
    formFontrol
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';

.bgbox {
  width: 900px;
  overflow: hidden;
  background-color: #f7f7f7;
  margin: 0px auto 110px;
  padding-top: 50px;
  position: relative;

  .router-link-active {
    color: #eb5055;
    background-color: #ddd;
    border-radius: 30px;
  }

  .active {
    background-color: #ddd;
  }

  .box {
    width: 80px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    background-color: #ddd;
    border-radius: 30px;

    &:hover {
      color: #eb5055;
      transition: background-color 0.8s ease-out, color 0.8s ease-out;
    }

    span, i {
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>