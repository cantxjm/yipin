<template>
  <el-card>
    <div slot="header" class="header">
      <div class="category-header">
        <span>销售额类别占比</span>
        <el-radio-group v-model="value">
          <el-radio-button label="全部渠道"></el-radio-button>
          <el-radio-button label="线上"></el-radio-button>
          <el-radio-button label="门店"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div>
      <div class="charts" ref="charts"></div>
    </div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      value: "全部渠道",
    };
  },
  mounted() {
    // 饼图
    let mychart = echarts.init(this.$refs.charts);
    mychart.setOption({
      title: {
        text: "纳西妲",
        subtext: 1048,
        left: "center",
        top: "center",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
            position: "outside",
          },
          data: [
            { value: 1048, name: "纳西妲" },
            { value: 735, name: "雷电将军" },
            { value: 580, name: "八重神子" },
            { value: 484, name: "流浪者" },
            { value: 300, name: "刻晴" },
          ],
        },
      ],
    });
    // 绑定事件
    mychart.on("mouseover", (params) => {
      // 获取鼠标移上去的那条数据
      const { name, value } = params.data;
      // 重新设置标题
      mychart.setOption({
        title: {
          text: name,
          subtext: value,
          left: "center",
          top: "center",
        },
      });
    });
  },
};
</script>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  border-bottom: 1px solid #eee;
}
.charts {
  width: 100%;
  height: 300px;
}
</style>