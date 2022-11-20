import React from "react";
import LineChart from "../components/charts/LineChart";
import { SatisfactionScore } from "../components/cards/SatisfactionScore";
import { NetPromoterScore } from "../components/cards/NetPromoterScore";
import { EfficiencyScore } from "../components/cards/EfficiencyScore";
import { HospitalityScore } from "../components/cards/HospitalityScore";
import { StaffScore } from "../components/cards/StaffScore";
import { DoctorScore } from "../components/cards/DoctorScore";
import { EfficiencyWaitingTime } from "../components/cards/EfficiencyWaitingTime";
import { EfficiencyValueForMoney } from "../components/cards/EfficiencyValueForMoney";
import Typography from "@mui/material/Typography";
import {
  nps,
  hospitalityRating,
  efficiencyRating,
  overallRating,
  vfmRating,
  graph_data,
} from "../static_data/graphData";

import Card from "@mui/material/Card";

import Grid from "@mui/material/Grid";

import Placeholder from "../Placeholder";

import { VerbatimFeedback } from "../components/cards/VerbatimFeedback";
import { AverageHospitalityScore } from "../components/cards/AverageHospitalityScore";

const DUMMY_DATA = {
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-6 grid-rows-5">
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

      <aside className="col-span-5 md:col-span-2 p-10 row-span-6">
        <h1 className="text-center text-2xl text-black">
          <Typography variant="h3">Specific Verbatim</Typography>
        </h1>
        <VerbatimFeedback></VerbatimFeedback>
      </aside>

      <div className="col-span-5 md:col-span-4 p-10 row-span-2">
        <div className="text-center text-2xl grid grid-cols-2 grid-rows-3 gap-3">
          {/* This div will be a 3x2 grid for the graphs */}
          <div>
            <LineChart
              series={DUMMY_DATA.series}
              title="Value for Money Rating over Time"
            />
          </div>
          <div>
            <LineChart
              series={overallRating}
              title="Overall Rating over Time"
            />
          </div>
          <div>
            <LineChart
              series={efficiencyRating}
              title="Efficiency Rating over Time"
            />
          </div>
          <div>
            <LineChart
              series={hospitalityRating}
              title="Hospitality Rating over Time"
            />
          </div>
          <div>
            <LineChart series={nps} title="Net Promoter Score over Time" />
          </div>
          <div>
            {/*JSON.stringify(graph_data)*/}
            <LineChart series={DUMMY_DATA.series} title="Title 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
