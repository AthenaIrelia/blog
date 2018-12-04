<!--  -->
<template>
  <div class="bgcolor">
    <div class="nav">
      <router-link class="box" tag="div" to="/Admin/HomePage">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link class="box" tag="div" to="/Admin/Essay">
        <i class="iconfont icon-guanli"></i>
        <span>文章</span>
      </router-link>
      <router-link class="box" tag="div" to="/Admin/FriendshipLink">
        <i class="iconfont icon-youqinglianjie"></i>
        <span>友链</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  //   components: {},

  //   computed: {},

  //   mounted() {},

  methods: {
    active() {}
  }
};
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';
@import '~./iconfont.css';

.bgcolor {
  width: 100%;
  height: 100%;
  top: 68px;
  position: relative;

  .nav {
    position: absolute;
    top: 80px;
    left: 5%;

    .router-link-active {
      color: #eb5055;
      background-color: #ddd;
      border-radius: 30px;
    }

    span, i {
      cursor: pointer;
    }

    .active {
      background-color: #ddd;
    }

    .box {
      width: 80px;
      line-height: 50px;
      font-size: 18px;
      text-align: center;
    }

    .box:hover {
      color: #eb5055;
      background-color: #ddd;
      border-radius: 30px;
      transition: background-color 0.8s ease-out, color 0.8s ease-out;
    }
  }
}
</style>