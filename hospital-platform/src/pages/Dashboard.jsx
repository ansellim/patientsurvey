import React from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import LineChart from "../components/charts/LineChart";
import { SatisfactionScore } from "../components/cards/SatisfactionScore";
import {NetPromoterScore} from "../components/cards/NetPromoterScore";
import { EfficiencyScore } from "../components/cards/EfficiencyScore";
import { HospitalityScore } from "../components/cards/HospitalityScore";
import { StaffScore } from "../components/cards/StaffScore";
import { DoctorScore } from "../components/cards/DoctorScore";
import { EfficiencyWaitingTime } from "../components/cards/EfficiencyWaitingTime";
import { EfficiencyValueForMoney } from "../components/cards/EfficiencyValueForMoney";
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';

import Grid from '@mui/material/Grid';

import Placeholder from '../Placeholder'

import {VerbatimFeedback} from "../components/cards/VerbatimFeedback";
import { AverageHospitalityScore } from "../components/cards/AverageHospitalityScore";


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

        <aside className="col-span-5 md:col-span-2 p-10 bg-gray-700 row-span-4">

          <h1 className="text-center text-2xl text-white">
            <Typography variant="h3">Key Performance Indicators</Typography>
            
            <Grid container rowSpacing={2} columnSpacing={2}>

              <Grid item lg={12}>
              <SatisfactionScore></SatisfactionScore>
              </Grid>

              <Grid item lg={12}>
                <NetPromoterScore></NetPromoterScore>
              </Grid>

              <Grid item lg={4}>
                <EfficiencyWaitingTime></EfficiencyWaitingTime>
              </Grid>

              <Grid item lg={4}>
                <EfficiencyValueForMoney></EfficiencyValueForMoney>
              </Grid>

              <Grid item lg={4}>
                <AverageHospitalityScore></AverageHospitalityScore>
              </Grid>
              
            </Grid>

          </h1>
        </aside>

        <main className="col-span-5 md:col-span-2 p-10 bg-blue-200 h-full row-span-4">
        <h1 className="text-center text-2xl text-black">
          <Typography variant="h3">Category Scores</Typography>
          <Grid container rowSpacing={4}>
            <Grid item lg={6}>
            <EfficiencyScore></EfficiencyScore>
            </Grid>
            <Grid item lg={6}>
            <HospitalityScore></HospitalityScore>
            </Grid>
            <Grid item lg={6}>
            <StaffScore></StaffScore>
            </Grid>
            <Grid item lg={6}>
            <DoctorScore></DoctorScore>
            </Grid>
          </Grid>

        </h1>

        </main>

        <aside className="col-span-5 md:col-span-2 p-10 bg-rose-300 row-span-6">
        <h1 className="text-center text-2xl text-black">
          <Typography variant="h3">Specific Verbatim</Typography>
        </h1>
        <VerbatimFeedback></VerbatimFeedback>
          
        </aside>

        <footer className="col-span-5 md:col-span-4 p-10 bg-green-300 row-span-2">
          <h1 className="text-center text-2xl">
            Suyash will add the graphs here.
          </h1>
          <LineChart series={DUMMY_DATA.series} options={DUMMY_DATA.options} />
        </footer>
      </div>
  );
};
// {DUMMY_DATA.series}
// {DUMMY_DATA.options}

export default Dashboard;
