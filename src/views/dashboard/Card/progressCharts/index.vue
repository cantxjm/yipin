<template>
  <!-- 容器 -->
  <div class="charts" ref="charts"></div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
export default {
  name: "",
  mounted() {
    // 初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    // 配置数据
    lineCharts.setOption({
      xAxis: {
        // 隐藏x轴
        show: false,
        // 最小值与最大值的设置
        min: 0,
        max: 100,
      },
      yAxis: {
        // 隐藏y轴
        show: false,
        // 均分
        type: "category",
      },
      // 系列
      series: [
        {
          // 图表的形式-柱状图
          type: "bar",
          data: [78],
          color: "yellowgreen",
          // 柱状图的宽度设置
          barWidth: 10,
          // 背景颜色设置
          showBackground: true,
          // 设置背景颜色
          backgroundStyle: {
            color: "#eee",
          },
          // 文本
          label: {
            show: true,
            // 改变文本内容
            formatter: "|",
            // 文本标签位置调试
            position: "right",
          },
        },
      ],
      // 布局的调试
      grid: {
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
      },
    });
  },
};
</script>

<style scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>