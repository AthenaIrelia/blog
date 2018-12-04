<!--  -->
<template>
  <div class="message-bgcolor" id="message-bgcolor">
    <div class="comments-box">
      <p>Responses</p>
      <div class="comment-form">
        <input
          type="text"
          name="author"
          maxlength="12"
          class="input-control"
          placeholder="Name (*)"
        >
        <input type="email" name="mail" class="input-control" placeholder="Email">
        <textarea
          name="text"
          maxlength="450"
          class="form-control"
          placeholder="Your comment here. Be cool. "
          required
        ></textarea>
        <button type="submit" class="submit">SUBMIT</button>
      </div>
      <div class="comment-list" v-for="item in list" :key="item.vaule">
        <div class="comment-body">
          <div class="comment-header">
            <img src="./logo@3x.png">
            <span>xxx</span>
          </div>
          <div class="comment-content">
            <p>XXXXXXXXXXXXXX</p>
          </div>
          <div class="comment-meta">
            <span>Nov 28, 2018</span>
            <a @click="skipLocation" class="show">Reply</a>
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
      list: [1, 2, 3]
    };
  },

  //   components: {},

  //   computed: {},

  //   mounted() {},

  methods: {
    skipLocation() {
      document.querySelector("#message-bgcolor").scrollIntoView(true);
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';

.message-bgcolor {
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 81px;
  background-color: #f7f7f7;

  .comments-box {
    width: 700px;
    margin: 0px auto;
    padding-bottom: 25px;

    p {
      font-size: 14px;
      font-weight: 400;
      display: block;
      padding: 30px 0 30px 20px;
      color: #5f5f5f;
    }

    .comment-form {
      position: relative;
      margin: 0 0 40px;
      padding: 10px 20px;
      border-radius: 3px;
      background: #fff;
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);

      .input-control {
        font-size: 16px;
        height: 34px;
        color: #313131;
        min-width: 50%;
        border: none;
        border-bottom: 1px dashed #ddd;
        line-height: 34px;
        resize: none;
        outline: none;
        outline: medium;
        font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
      }

      input:focus {
        outline: none;
        border-bottom: 1px dashed red;
      }

      .form-control {
        display: block;
        overflow: hidden;
        height: 200px;
        padding: 10px 0;
        resize: none;
        border-radius: 0;
        font-size: 18px;
        width: 100%;
        color: #313131;
        outline: 0;
        border: none;
      }

      .submit {
        font-size: 13px;
        position: absolute;
        right: 20px;
        bottom: 20px;
        display: block;
        height: 32px;
        margin: 0 auto;
        padding: 0 20px;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        text-align: center;
        color: #313131;
        border: 1px solid #f7f7f7;
        border-radius: 30px;
        background-color: #f7f7f7;
        cursor: pointer;
        resize: none;
      }

      .submit:hover {
        border-color: #eb5055;
      }

      .submit:focus {
        outline: none;
      }
    }

    .comment-list {
      margin: 20px 0;
      border: 1px solid rgba(184, 197, 214, 0.2);
      border-radius: 3px;
      background: #fff;
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);

      .comment-body {
        width: 100%;
        height: auto;
        padding: 30px;

        &:hover .show {
          display: inline;
        }

        .comment-header {
          display: inline-block;
          width: 100%;

          img {
            display: inline-block;
            float: left;
            width: 40px;
            height: 40px;
            border: 1px solid #eaeaea;
            border-radius: 50%;
          }

          span {
            font-size: 13px;
            line-height: 45px;
            display: inline-block;
            float: left;
            margin: 0 20px;
          }
        }

        .comment-meta {
          font-size: 12px;
          margin: 0;
          padding: 0;
          border: 0;
          position: relative;
          -webkit-font-smoothing: antialiased;

          a {
            position: absolute;
            font-size: 13px;
            right: 50px;
            color: #313131;
            height: 32px;
            line-height: 32px;
            margin: 0 auto;
            padding: 0 20px;
            -webkit-transition-duration: 0.4s;
            transition-duration: 0.4s;
            text-align: center;
            color: #313131;
            border: 1px solid #f7f7f7;
            border-radius: 30px;
            background-color: #f7f7f7;
            display: none;
            cursor: pointer;
          }

          a:hover {
            border-color: #eb5055;
          }
        }
      }
    }
  }
}
</style>