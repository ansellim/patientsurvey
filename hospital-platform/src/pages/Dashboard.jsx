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

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex justify-center flex-wrap lg:flex-nowrap">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Hospital Overview</p>
            </div>
          </div>
          <div className="mt-6">
            <span>Placeholder here.</span>
          </div>
        </div>
      </div>
      {/*Example of producing a chart using ApexCharts: https://codesandbox.io/s/iryeq?file=/src/App.js:801-829 */}
      <Chart
        type="area"
        width="500"
        series={DUMMY_DATA.series}
        options={DUMMY_DATA.options}
      ></Chart>
      dashboard
    </div>
  );
};

export default Dashboard;
