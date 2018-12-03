<!--  -->
<template>
  <div class="bgcolor">
    <div class="center">
      <div v-for="item in box" :key="item.vaule">
        <div class="box">
          <div class="categorys-title">Apr 2018</div>
          <div class="post-lists">
            <div class="post-list-item" v-for="item in num" :key="item.value">
              <div class="post-list-item-container">
                <div class="padding">
                  <div class="title">
                    <a href>TensorFlow.js 的核心概念</a>
                  </div>
                  <div class="item-meta-date">Apr 1, 2018</div>
                </div>
              </div>
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
        { text: "代驾" },
        { text: "巴士" },
        { text: "快车" },
        { text: "专车" },
        { text: "顺风车" },
        { text: "出租车" },
        { text: "代驾" }
      ],
      num: [1, 2, 3, 4]
    };
  }
  // components: {},
  // computed: {},
  // mounted() {},
  // methods: {}
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

  .center {
    width: 900px;
    overflow: hidden;
    margin: 0px auto 110px;
    position: relative;

    .box {
      width: 100%;
      height: auto;
      position: relative;

      .categorys-title {
        font-size: 14px;
        position: relative;
        margin: 10px auto;
        padding: 0 30px;
        color: #5f5f5f;
      }

      .categorys-title::before {
        position: absolute;
        top: 0;
        left: -15px;
        padding: 0 30px;
        content: '#';
        color: #eb5055;
      }

      .post-lists {
        position: relative;
        display: block;
        padding: 0px;
        overflow: hidden;

        .post-list-item {
          float: left;
          width: 33.3333%;
          height: 127px;
          padding: 15px;
          align-items: center;
          box-sizing: border-box;
          transition: all 0.5s;

          &:hover {
            -webkit-transform: scale(1.05, 1.05);
            -moz-transform: scale(1.05, 1.05);
            -transform: scale(1.05, 1.05);
          }

          .post-list-item-container {
            width: 100%;
            position: relative;
            border: 1px solid rgba(184, 197, 214, 0.2);
            border-radius: 3px;
            background: #fff;
            height: 95px;

            .padding {
              position: relative;
              padding: 25px 20px 40px;

              .title {
                a {
                  font-size: 14px;
                  display: block;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  color: #313131;
                }
              }

              .item-meta-date {
                color: #5f5f5f;
                font-size: 12px;
                float: left;
                padding-top: 15px;
                text-align: right;
                text-transform: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>