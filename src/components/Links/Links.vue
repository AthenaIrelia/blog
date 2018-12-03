<!--  -->
<template>
  <div class="bgcolor">
    <div class="center">
      <div class="post-header">
        <h1>Links</h1>
        <div class="post-data">
          <span>Published on Jan 30, 2016</span>
        </div>
      </div>
      <div class="post-content">
        <h3>友情链接</h3>
        <ul>
          <li v-for="item in num" :key="item.value">
            🔒
            <a href>设计笔记</a>
          </li>
        </ul>
        <h3>链接须知</h3>
        <div class="know">
          <li>1.请确定贵站可以稳定运营</li>
          <li>2.原创博客优先，技术类博客优先，设计、视觉类博客优先</li>
          <li>3.经常过来访问和评论，眼熟的</li>
        </div>
        <p>备注：默认申请友情链接均为内页（当前页面）</p>
        <h3 class="information">基本信息</h3>
        <pre>
         <code>
           网站名称：XXXXX
           网站地址：www.XXXXX.com
         </code>
        </pre>
        <p>暂时先这样，同时欢迎互换友链，这个页面留言即可。 ^_^</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: [1, 2, 3, 4, 1, 2, 3, 41, 2, 3, 41, 2, 3, 41, 2, 3, 41, 2, 3, 4]
    };
  }

  //   components: {},

  //   computed: {},

  //   mounted() {},

  //   methods: {}
};
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
      // padding: 15px;
      h1 {
        font-size: 21px;
        color: #222;
      }

      .post-data {
        font-size: 12px;
        padding-top: 15px;
        color: #5f5f5f;
      }
    }

    .post-content {
      h3 {
        font-weight: 500;
        position: relative;
        text-align: left;
        margin: 12px;
        font-size: 20px;
        color: #444;
      }

      h3::before {
        position: absolute;
        top: 0;
        left: -13px;
        font-weight: 600;
        content: '#';
        color: #eb5055;
      }

      ul {
        margin: 40px 0;
        vertical-align: baseline;

        li {
          display: inline-block;
          overflow: hidden;
          width: 32%;
          height: 35px;
          line-height: 35px;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-wrap: break-word;

          a {
            text-decoration: none;
            color: #313131;
            outline: 0;

            &:hover {
              color: #eb5055;
            }
          }
        }
      }

      .know {
        margin: 25px;

        li {
          list-style: none;
          font-size: 16px;
          height: 30px;
          line-height: 30px;
          word-wrap: break-word;
          word-break: break-word;
        }
      }

      .information {
        margin-top: 35px;
      }

      pre {
        margin: 20px 0;
        border-radius: 4px;

        code {
          display: block;
          line-height: 20px;
          margin: 0;
          padding: 1.3em;
          color: #313131;
          background-color: #f7f7f7;
        }
      }
    }
  }
}
</style>