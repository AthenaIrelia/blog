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
              <div class="introduce">
                <p>
                  使用纯CSS实现文字超过一定
                  的长度后自动显示省略号
                  使用纯CSS实现文字超过一定
                  的长度后自动显示省略号
                </p>
              </div>
            </div>
            <div class="bg-box1">
              <div class="bg1"></div>
              <div class="bg2"></div>
            </div>
            <div class="content">
              <div class="item-title">
                <a href="#">XXXXXX</a>
              </div>
              <div class="item-icon">
                <div class="icon"></div>
                <a href="#">sss</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import Bottom from "./Bottom.vue";
export default {
  components: {
    Bottom
  },
  data() {
    return {
      box: [
        { text: "巴士" },
        { text: "快车" },
        { text: "专车" },
        { text: "顺风车" },
        { text: "出租车" },
        { text: "代驾" },
        { text: "巴士" },
        { text: "快车" },
        { text: "专车" },
        { text: "顺风车" },
        { text: "出租车" },
        { text: "代驾" }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollBottem);
  },
  methods: {
    scrollBottem() {
      let winHeight = window.innerHeight, //窗口高度
        bodyHeight = document.documentElement.scrollHeight, // 页面高度
        boduTop = document.documentElement.scrollTop; // 滚动条上的高度
      // console.log(this.box);

      if (bodyHeight - boduTop - winHeight <= 100) {
        if (this.loadFlag) {
          return;
        }
        // 将标志位置为真 表示真正加载
        this.loadFlag = true;
        // 延时加载 ,,,,,因为本地加载速度太快  ... 就延时了一下
        setTimeout(async () => {
          this.box.push({ text: "巴士" }, { text: "巴士" }, { text: "巴士" });
          this.loadFlag = false;
        }, 600);
      }
    }
  },
};
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';

.bgcolor {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  top: 100px;
  position: relative;
}

.center {
  width: 900px;
  overflow: hidden;
  margin: 0px auto 110px;
  position: relative;
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
        padding: 0;
        position: relative;
        overflow: hidden;

        .bg-size {
          width: 100%;
          height: 250px;
          position: relative;
          overflow: hidden;
          padding: 0;

          &:hover >.lucency {
            display: block;
          }

          &:hover >.bg {
            filter: blur(1px);
            transform: scale(1.2);
          }

          &:hover> .introduce {
            display: block;
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
            cursor: pointer;
            position: absolute;
            display: none;
            -moz-opacity: 0.6;
            opacity: 0.6;
          }

          .introduce {
            position: absolute;
            top: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
            padding: 40px 28px;
            z-index: 214;
            display: none;

            p {
              overflow: hidden;
              height: 135px;
              font-size: 15px;
              margin: 0;
              line-height: 26px;
              word-break: break-all;
              opacity: 2;
              color: #fff;
              position: relative;
            }

            p:after {
              content: '...';
              width: 16px;
              color: #fff;
            }
          }
        }

        .bg-box1 {
          width: 100%;
          height: 80px;
          padding: 0;
          z-index: 999;
          z-index: 9;
          overflow: hidden;

          // background: red;
          .bg1 {
            position: absolute;
            z-index: 10;
            width: 110%;
            height: 100px;
            background-color: #fff;
            transform: rotate(10deg) translate(-16px, 0);
          }

          .bg2 {
            position: absolute;
            z-index: 9;
            width: 110%;
            height: 100px;
            background: #000;
            transform: rotate(-15deg) translate(10px, -10px);
            opacity: 0.7;
          }
        }

        .content {
          width: 100%;
          height: 130px;
          background-color: #fff;
          position: absolute;
          bottom: 0;
          z-index: 11;

          .item-title {
            width: 100%;
            height: auto;

            a {
              font-size: 17px;
              line-height: 17px;
              word-break: break-all;
              color: #313131;
            }
          }

          .item-icon {
            width: 100%;
            height: auto;
            padding: 0 15px 15px;
            text-align: right;

            a {
              font-size: 16px;
              position: relative;
              float: right;
              margin-right: 10px;
              padding: 10px 0;
              text-align: right;
              text-transform: none;
              color: #5f5f5f;
            }

            .icon {
              display: inline-block;
              float: right;
              width: 42px;
              height: 42px;
              border: 1px solid #eaeaea;
              border-radius: 50%;
              background-image: url('./logo@3x.png');
              background-position: 50% 50%;
              background-size: cover;
            }
          }
        }
      }
    }
  }
}
</style>