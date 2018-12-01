<!--  -->
<template>
  <div class="bgcolor">
    <div class="center">
      <div class="post-lists-body">
        <div v-for="item in box" :key="item.value">
          <div class="bg-box">
            <div class="bg-size">
              <div class="bg"></div>
              <div class="lucency"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      box: [
        { text: "巴士" },
        { text: "快车" },
        { text: "专车" },
        { text: "顺风车" },
        { text: "出租车" },
        { text: "代驾" }
      ]
    };
  }
};
</script>
<style lang='stylus' scoped>
.bgcolor {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
}

.center {
  width: 900px;
  height: 1640px;
  margin: 0px auto;
  padding-top: 30px;
  z-index: 200;

  .post-lists-body {
    &.post-lists-body div {
      float: left;
      width: 33.3333%;
      height: 410px;
      padding: 15px;
      align-items: center;
      box-sizing: border-box;

      .bg-box {
        width: 100%;
        height: 380px;
        background: #fff;
        padding: 0;

        .bg-size {
          width: 100%;
          height: 250px;
          position: relative;
          overflow: hidden;
          padding: 0;

          &:hover >.lucency {
            display: block;
          }

          &:hover:hover >.bg {
            filter: blur(1px);
            transform: scale(1.2);
          }

          .bg {
            width: 100%;
            height: 250px;
            cursor: pointer;
            background-image: url('./logo@3x.png');
            background-position: 50% 50%;
            background-size: cover;
            transition: all 0.6s;
          }

          .bg:hover {
            filter: blur(1px);
            transform: scale(1.2);
          }

          .lucency {
            background: #000;
            height: 250px;
            width: 100%;
            position: absolute;
            display: none;
            -moz-opacity: 0.6;
            opacity: 0.6;
          }
        }
      }
    }
  }
}
</style>