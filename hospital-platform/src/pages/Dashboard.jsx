import React from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import LineChart from "../components/charts/LineChart";
import { SatisfactionScore } from "../components/SatisfactionScore";

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
    <div className=" grid grid-cols-6 h-screen grid-rows-5">
      <header className="col-span-6 p-10 bg-amber-200 row-span-1">
        <h1 className="text-center text-2xl">Filters in this div</h1>
      </header>

      <aside className="col-span-5 md:col-span-2 p-10 bg-gray-700 row-span-2">
        <h1 className="text-center text-2xl text-white">
          Ansel's cards in this div.

          <SatisfactionScore></SatisfactionScore>

        </h1>
      </aside>

      <main className="col-span-5 md:col-span-2 p-10 bg-blue-200 h-full row-span-4">
        <h1 className="text-center text-2xl">The table here</h1>
      </main>

      <aside className="col-span-5 md:col-span-2 p-10 bg-rose-300 row-span-4">
        <h1 className="text-center text-2xl">Verbatim feedback display</h1>
      </aside>

      <footer className="col-span-5 md:col-span-2 p-10 bg-green-300 row-span-2">
        <h1 className="text-center text-2xl">
          Suyash will add the graphs here.
        </h1>
        {/*Example of producing a chart using ApexCharts: https://codesandbox.io/s/iryeq?file=/src/App.js:801-829 */}
        {/*Tailwind CSS Grid guide: https://www.kindacode.com/article/tailwind-css-grid-examples/ */}
        <LineChart series={DUMMY_DATA.series} options={DUMMY_DATA.options} />
      </footer>
    </div>
  );
};
// {DUMMY_DATA.series}
// {DUMMY_DATA.options}

export default Dashboard;
