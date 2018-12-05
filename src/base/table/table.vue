<!--  -->
<template>
  <div>
    <div class="title">
      <table cellspacing="0" border="1" width="100%">
        <tr>
          <th>文章ID</th>
          <th>标题</th>
          <th>发布时间</th>
          <th>修改时间</th>
          <th>编辑</th>
        </tr>
      </table>
    </div>
    <div class="center">
      <table cellspacing="0" border="1" width="100%">
        <tr>
          <td>
            <div>2</div>
          </td>
          <td>
            <div>1</div>
          </td>
          <td>
            <div>1</div>
          </td>
          <td>
            <div>1</div>
          </td>
          <td class="redact">
            <div>编辑</div>
            <div class="red">删除</div>
          </td>
        </tr>
      </table>
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

.title {
  width: 100%;
  margin-top: 15px;

  table {
    border: 1px solid black;

    tr {
      height: 40px;
      border: 1px solid black;
      line-height: 40px;
      font-size: 20px;

      th {
        width: 20%;
        border: 1px solid black;
      }
    }
  }
}

.center {
  table {
    border: 1px solid black;
    table-layout: fixed;
    word-break: break-all;
    word-wrap: break-word;
    padding: 0px;
    // white-space: nowrap;
    border-collapse: collapse;

    tr {
      width: 20%;
      border: 1px solid black;
      font-size: 18px;

      td {
        text-align: center;
        vertical-align: middle;
        width: 20%;
        padding: 15px;
        border: 1px solid black;
      }

      .redact {
        div {
          float: left;
          width: 56px;
          height: 28px;
          font-size: 12px;
          line-height: 28px;
          margin-left: 10px;
          border-radius: 3px;
          background: #fff;
          border: 1px solid #dcdfe6;
          color: #606266;
          cursor: pointer;
        }

        .red {
          background-color: #f56c6c;
          border-color: #f56c6c;
          color: #fff;
        }
      }
    }
  }
}
</style>