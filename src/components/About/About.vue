<!--  -->
<template>
  <div class="bgcolor">
    <div class="center">
      <div class="post-header">
        <h1>About</h1>
        <div class="post-data">
          <h2>Published on Jan 28, 2016</h2>
        </div>
      </div>
      <div class="post-content">
        <h3>Hello,World</h3>
        <p>This is the blog of two people</p>
        <p>Because it was done by two people</p>
        <p>I am Wang(望),I made the front end</p>
        <p>His is Yang(杨),He did the back end</p>
        <p>We are from the same high school</p>
        <p>We are very good friends</p>
        <p>Of course we don't have girlfriends</p>
        <h3>And of course there are others</h3>
        <p>If you want to make friends with me, you must welcome me. You can contact us through the social link at the bottom of the blog page</p>
        <div class="contact">
          <li>
            <a href>Weibo</a>
          </li>
          <li>
            <a href>Twitter</a>
          </li>
          <li>
            <a href>Github</a>
          </li>
          <li>
            <a href>v2ex</a>
          </li>
          <li>
            <a href>zhihu</a>
          </li>
          <li>
            <a href>Medium</a>
          </li>
          <li>
            <a href>1339521912@qq.com</a>
          </li>
        </div>
        <p>推荐使用邮箱联系···</p>
      </div>
    </div>
    <message-board></message-board>
  </div>
</template>

<script>
import MessageBoard from "base/message-board/message-board.vue";
export default {
  data () {
    return {
    };
  },

components: {
    MessageBoard
  }

//   computed: {},

//   mounted() {},

//   methods: {}
}
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';

.bgcolor {
  width: 100%;
  height: 100%;
  background-color: #fff;
  top: 68px;
  position: relative;

  .center {
    width: 700px;
    overflow: hidden;
    margin: 0px auto 110px;
    padding-top: 60px;
    position: relative;

    .post-header {
      h1 {
        color: #222;
        font-size: 21px;
      }

      .post-data {
        margin-top: 15px;

        h2 {
          font-size: 12px;
          color: #5f5f5f;
        }
      }
    }

    .post-content {
      margin-top: 15px;
      position: relative;

      h3 {
        font-size: 1.2em;
        color: #444;
        font-weight: 500;
        position: relative;
        margin: 30px 0;
      }

      h3::before {
        font-weight: 600;
        content: '#';
        color: #eb5055;
      }

      p {
        font-size: 14px;
        word-wrap: break-word;
        word-break: break-word;
        margin: 20px 0;
        vertical-align: baseline;
      }

      .contact {
        li {
          margin: 15px;

          a {
            color: #313131;
            font-size: 14px;
            border-bottom: 1px solid #ccc;

            &:hover {
              color: #eb5055;
            }
          }
        }
      }
    }
  }
}
</style>