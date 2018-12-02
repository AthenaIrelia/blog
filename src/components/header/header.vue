<!--  -->
<template>
  <div class="header">
    <div class="center">
      <router-link tag="div" class="vertical" to="/Home">
        <img class="logo" src="./logo@3x.png">
      </router-link>
      <div class="center-list">
        <router-link tag="div" to="/Archives">
          <span>Archives</span>
        </router-link>
        <router-link tag="div" to="/Links">
          <span>Links</span>
        </router-link>
        <router-link tag="div" to="/About">
          <span>About</span>
        </router-link>
        <router-link tag="div" to="/Search">
          <span>Search</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   data () {
  //     return {
  //     };
  //   },
  //   components: {},
  computed: {},
  //   mounted() {},
  methods: {
    // click() {
    // }
  }
};
</script>
<style lang='stylus' scoped>
.header {
  width: 100%;
  height: 70px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: fixed;
  z-index: 9999;

  .center {
    position: relative;
    width: 1040px;
    max-width: 100%;
    height: 70px;
    margin: 0 auto;
    display: flex;

    .vertical {
      width: 50px;
      height: 50px;
      position: absolute;
      margin-top: 9px;
    }

    .logo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid black;
      cursor: pointer;
      transition: 1.5s;
    }

    .logo:hover {
      transform: rotate(360deg);
    }

    .center-list {
      display: flex;
      position: absolute;
      right: 0;
      width: auto;

      .router-link-active {
        span {
          color: #eb5055;
          background-color: #ddd;
        }
      }

      span {
        font-size: 14px;
        padding: 0 15px;
        line-height: 70px;
        cursor: pointer;
      }

      span:hover {
        color: #eb5055;
        background-color: #ddd;
        transition: background-color 0.8s ease-out, color 0.8s ease-out;
      }

      .active {
        background-color: #ddd;
      }
    }
  }
}
</style>