<!--  -->
<template>
  <div class="center">
    <div class="title-box">
      <div class="title">标题</div>
      <input type="text" autocomplete="off" placeholder="请输入标题" class="el-input__inner">
    </div>
    <div class="title-box">
      <div class="title">备注</div>
      <input type="text" autocomplete="off" placeholder="请输入备注" class="el-input__inner">
    </div>
    <div class="title-box">
      <div class="title">链接地址</div>
      <input type="text" autocomplete="off" placeholder="请输入链接地址" class="el-input__inner">
    </div>
    <div class="title-box">
      <div class="title">图标地址</div>
      <input type="text" autocomplete="off" placeholder="请输入图标地址" class="el-input__inner">
    </div>
    <div class="change">
      <div class="place">
        <div class="ture style">确定</div>
        <div class="cancle style">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';

.center {
  width: 900px;
  overflow: hidden;
  background-color: #f7f7f7;
  margin: 0px auto 110px;
  position: relative;

  .title-box {
    width: 100%;
    height: 50px;
    padding: 15px 0;
    line-height: normal;
    display: inline-table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;

    .title {
      background-color: #f5f7fa;
      color: #909399;
      vertical-align: middle;
      display: table-cell;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      padding: 0 20px;
      width: 1px;
      white-space: nowrap;
    }

    .el-input__inner {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 50px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
    }
  }

  .change {
    width: 100%;
    height: 50px;
    position: relative;

    .place {
      position: absolute;
      right: 0;

      .style {
        width: 60px;
        height: 100%;
        text-align: center;
        float: left;
        line-height: 50px;
        border-radius: 10px;
        margin-left: 15px;
        cursor: pointer;
      }

      .ture {
        color: #fff;
        background-color: #f9a7b5;
      }

      .cancle {
        color: black;
        background-color: #fff;
      }
    }
  }
}
</style>