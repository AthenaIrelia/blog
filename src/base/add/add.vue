<!--  -->
<template>
  <div class="center">
    <div class="title-box">
      <div class="title">标题</div>
      <input type="text" autocomplete="off" placeholder="请输入标题" class="el-input__inner">
    </div>
    <div class="brief">
      <textarea
        autocomplete="off"
        placeholder="请输入简介"
        class="el-textarea__inner"
        style="min-height: 96px; height: 96px;"
      ></textarea>
    </div>
    <mavon-editor v-model="something" defaultOpen="preview"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      something: ""
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';
@import '~./index.css';

.center {
  width: 900px;
  overflow: hidden;
  background-color: #f7f7f7;
  margin: 0px auto 110px;
  position: relative;

  .title-box {
    width: 100%;
    height: 50px;
    // padding: 15px 0;
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

  .brief {
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
    font-size: 14px;
    padding: 30px 0;

    .el-textarea__inner {
      display: block;
      resize: vertical;
      padding: 5px 15px;
      line-height: 1.5;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      font-size: inherit;
      color: #606266;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>