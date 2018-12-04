<!--  -->
<template>
  <div class="bgcolor">
    <div class="login">
      <div class="login-box">
        <h1>登陆</h1>
        <input type="text">
        <input type="text">
        <button>登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
// export default {
//   data () {
//     return {
//     };
//   },

//   components: {},

//   computed: {},

//   mounted() {},

//   methods: {}
// }
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';

.bgcolor {
  width: 100%;
  height: 100%;
  top: 68px;
  position: relative;

  .login {
    width: 600px;
    margin: 0px auto;
    position: relative;
    padding-top: 150px;

    .login-box {
      width: 600px;
      height: 400px;

      h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        text-align: center;
      }

      input {
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid #ddd;
        height: 48px;
        padding: 4px 8px;
        margin: 50px auto;
      }

      button {
        cursor: pointer;
        background-color: #000;
        color: #ddd;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid #ddd;
        height: 48px;
        padding: 4px 8px;
        margin: 50px auto;
      }
    }
  }
}
</style>