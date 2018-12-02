<!--  -->
<template>
  <div class="footer">
    <div class="footer-social">
      <div class="foot-box">
        <div class="social-center">
          <a href="#">WEIBO</a>
          <a href="#">ZHIHU</a>
          <a href="#">RSS</a>
          <a href="#">GITHUB</a>
          <a href="#">TWITTER</a>
          <p>@2018 赣ICP备XXXXX号</p>
        </div>
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
  //   computed: {},
  //   mounted() {},
  //   methods: {}
};
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';

.footer {
  width: 100%;
  height: auto;
  background-color: #fff;
  position: fixed;
  z-index: 201;
  bottom: 0px;

  .footer-social {
    border-bottom: 1px solid rgba(184, 197, 214, 0.2);

    .foot-box {
      margin: 0 auto;
      width: 940px;
      height: 80px;

      .social-center {
        width: 500px;
        height: 100%;
        margin: 0 auto;

        a {
          font-size: 13px;
          padding: 0 25px;
          color: #5f5f5f;
          line-height: 50px;
        }

        a:hover {
          color: #eb5055;
        }

        p {
          text-align: center;
        }
      }
    }
  }

  .footer-meta {
    width: 100%;
    background: #eee;
    height: 150px;
  }
}
</style>