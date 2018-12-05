<!--  -->
<template>
  <div class="box">
    <div class="center">
      <div id="main" class="main" style="width: 900px;height:600px;"></div>
    </div>
  </div>
</template>

<script>
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/component/timeline");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/dataset");
require("echarts/lib/component/legendScroll");
require("echarts/lib/component/polar");
require("echarts/lib/component/angleAxis");
require("echarts/lib/component/radiusAxis");
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    this.tubiao();
  },

  methods: {
    tubiao() {
      var myChart = echarts.init(document.getElementById("main"));
      var data = [];

      for (var i = 0; i <= 360; i++) {
        var t = (i / 180) * Math.PI;
        var r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }
      let option = {
        title: {
          text: "CPU图表"
        },
        legend: {
          data: ["line"]
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      };
      myChart.setOption(option, true);
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '~common/stylus/index.styl';

.box {
  width: 100%;
  height: auto;

  .center {
    width: 900px;
    overflow: hidden;
    background-color: #f7f7f7;
    margin: 0px auto 110px;
    position: relative;
  }
}
</style>