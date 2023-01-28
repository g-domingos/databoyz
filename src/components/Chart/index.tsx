import ReactECharts from "echarts-for-react";

export const Chart = () => {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}%",
    },
    // toolbox: {
    //   feature: {
    //     dataView: { readOnly: false },
    //     restore: {},
    //     saveAsImage: {},
    //   },
    // },
    // legend: {
    //   data: ["Show", "Click", "Visit", "Inquiry"],
    //   textStyle: { color: "#fff",  fontSize: 18},
    // },
    textStyle: { color: "#fff" },
    series: [
      {
        name: "Funnel",
        type: "funnel",
        left: "0%",
        top: 30,
        bottom: 40,
        width: "100%",
        min: -100,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        gap: 6,
        label: {
          show: true,
          position: "inside",
          fontSize: "18"
        },
        color: ["#5E17EB", "#753EDA", "#8C52FF", "#9A86EA"],
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        itemStyle: {
          borderColor: "#171515",
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 40,
          },
        },
        data: [
          { value: 60, name: "Visit" },
          { value: 40, name: "Inquiry" },
          { value: 20, name: "Order" },
          { value: 80, name: "Click" },
        ],
      },
    ],
  };

  return <ReactECharts option={option} />;
};
