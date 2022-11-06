import React from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

const DUMMY_DATA = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

const LineChart = ({ series, options }) => {
  return (
    <div>
      <Chart type="area" width="500" series={series} options={options}></Chart>
    </div>
  );
};

export default LineChart;
