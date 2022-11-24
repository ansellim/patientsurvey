import React from "react";
import LineChart from "../components/charts/LineChart";
import { SatisfactionScore } from "../components/cards/SatisfactionScore";
import { NetPromoterScore } from "../components/cards/NetPromoterScore";
import { EfficiencyScore } from "../components/cards/EfficiencyScore";
import { HospitalityScore } from "../components/cards/HospitalityScore";
import { StaffScore } from "../components/cards/StaffScore";
import { DoctorScore } from "../components/cards/DoctorScore";
import { OpenTicketsCount } from "../components/cards/OpenTicketsCount";
//import { EfficiencyWaitingTime } from "../components/cards/EfficiencyWaitingTime";
//import { EfficiencyValueForMoney } from "../components/cards/EfficiencyValueForMoney";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
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
//import { AverageHospitalityScore } from "../components/cards/AverageHospitalityScore";

const DUMMY_DATA = {
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

const Dashboard = () => {
  const hospitaloptions = [
    'ABCHospital'
  ];
  const departmentoptions = [
    "All",
    "A&E",
    "Business Office",
    "Day Surgery",
    "Delivery Suites",
    "Endoscopy",
    "Front Office",
    "ICU",
    "NICU",
    "HDU",
    "Operating Theater",
    "Laboratory",
    "Radiology",
    "Ward 6 East",
    "Ward 6 West",
    "Ward 7 East",
    "Ward 7 West",
    "Ward 8 East",
    "Ward 8 West",
    "Ward 9 East",
    "Ward 9 West",
    "Ward 10 East",
    "Ward 10 West",
  ];

  const dateoptions = [
    "All",
    '2019', '2020', '2021', '2022'  ]
  const defaulthospOption = hospitaloptions[0];
  const defaultdeptOption = departmentoptions[0];
  const defaultdatepOption = dateoptions[0];
  const [hospitalfilterval, setHospitalFilterVal] = useState("ABCHospital");
  const [departmentfilterval, setDepartmentfilterval] = useState("All");
  const [datefilterval, setDatefilterval] = useState("All");
  const selectFilterHandler1 =(event) =>{
    setHospitalFilterVal(event.value);
    
  }
  const selectFilterHandler2 =(event) =>{
    setDepartmentfilterval(event.value);
    
  }
  const selectFilterHandler3 =(event) =>{
    setDatefilterval(event.value);
    
  }
  return (
    <div className=" grid grid-cols-6 grid-rows-1">
      <header className="col-span-6 p-10 bg-amber-200 row-span-1">
      <Typography variant="h5"><b>Filters</b></Typography>
      <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item lg={2}>
              <Typography variant="h6">Hospital</Typography>
              <Dropdown options={hospitaloptions} onChange={selectFilterHandler1} value={defaulthospOption} placeholder="Select an option" />
            </Grid>

            <Grid item lg={2}>
            <Typography variant="h6">Department</Typography>
            <Dropdown options={departmentoptions} onChange={selectFilterHandler2} value={defaultdeptOption} placeholder="Select an option" />

            </Grid>

            <Grid item lg={2}>
            <Typography variant="h6">Time Period</Typography>
            <Dropdown options={dateoptions} onChange={selectFilterHandler3} value={defaultdatepOption} placeholder="Select an option" />
            </Grid>
          </Grid>
        

      </header>

      <aside className="col-span-5 md:col-span-2 p-10 bg-gray-700 row-span-4">
        <h1 className="text-center text-2xl text-white">
          <Typography variant="h5"><b>Key Performance Indicators</b></Typography>

          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item lg={12}>
              <SatisfactionScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></SatisfactionScore>
            </Grid>

            <Grid item lg={12}>
              <NetPromoterScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></NetPromoterScore>
            </Grid>
            <Grid item lg={12}>
              <OpenTicketsCount hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></OpenTicketsCount>
            </Grid>
{/* 
            <Grid item lg={4}>
              <EfficiencyWaitingTime></EfficiencyWaitingTime>
            </Grid>

            <Grid item lg={4}>
              <EfficiencyValueForMoney></EfficiencyValueForMoney>
            </Grid>

            <Grid item lg={4}>
              <AverageHospitalityScore></AverageHospitalityScore>
            </Grid> */}
          </Grid>
        </h1>
      </aside>

      <main className="col-span-5 md:col-span-2 p-10 bg-blue-200 h-full row-span-4">
        <h1 className="text-center text-2xl text-black">
          <Typography variant="h5"><b>Category Scores</b></Typography>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item lg={6}>
              <EfficiencyScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></EfficiencyScore>
            </Grid>
            <Grid item lg={6}>
              <HospitalityScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></HospitalityScore>
            </Grid>
            <Grid item lg={6}>
              <StaffScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></StaffScore>
            </Grid>
            <Grid item lg={6}>
              <DoctorScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></DoctorScore>
            </Grid>
          </Grid>
        </h1>
      </main>

      <aside className="col-span-5 md:col-span-2 p-10 row-span-6">
        <h1 className="text-center text-2xl text-black">
          <Typography variant="h5"><b>Specific Verbatim</b></Typography>
        </h1>
        <VerbatimFeedback hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></VerbatimFeedback>
      </aside>

      <div className="col-span-5 md:col-span-4 p-10 row-span-2">
      <h1 className="text-center text-2xl text-black">
        <Typography variant="h5"><b>Charts</b></Typography>
        </h1>
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
