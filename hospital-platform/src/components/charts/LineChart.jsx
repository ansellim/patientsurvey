import React from "react";
import Chart from "react-apexcharts";

const LineChart = ({ series, title }) => {
  const options = {
    chart: {
      type: "area",
      background: "#eff4f7",
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      borderColor: "#555",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "straight",
    },
    toolbar: {
      show: true,
    },
    title: { text: title },
    offsetX: -30,
    offsetY: 100,
    align: "right",
    colors: ["#00BAEC"],
  };
  return (
    <div>
      <Chart series={series} options={options}></Chart>
    </div>
  );
};

export default LineChart;
