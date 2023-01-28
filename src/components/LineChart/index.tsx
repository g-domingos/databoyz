import echarts from "echarts/types/dist/echarts";
import ReactECharts from "echarts-for-react";
import { ChartDiv } from "./styles";

export const LineChart = ({ data, label }: any) => {

  const xData = data.map((item: any) => item.date)
  const yData = data.map((item:any) => item.value)

  const option = {
    xAxis: {
      type: "category",
      data: xData,
      splitLine: {
        show: false,
      },
    },
    tooltip: {
      trigger: "axis",
      borderWidth: -1,
      borderColor: "#3A536B",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "transparent",
        },
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        data: yData,
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <ChartDiv>
      <div>
        <label>{label}</label>
      </div>
      <ReactECharts option={option} />
    </ChartDiv>
  );
};
