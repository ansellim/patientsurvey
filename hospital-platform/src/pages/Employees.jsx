import React from "react";
import Typography from '@mui/material/Typography';
import {VerbatimEmployee} from "../components/cards/VerbatimEmployee";
import Grid from '@mui/material/Grid';
import { StaffSkillScore } from "../components/cards/StaffSkillScore";
import { StaffProfessionalScore } from "../components/cards/StaffProfScore";
import { StaffExplanationScore } from "../components/cards/StaffExplanationScore";
import { StaffEmpathyScore } from "../components/cards/StaffEmpathyScore";
import { StaffCourtesyScore } from "../components/cards/StaffCourtesyScore";
import { DoctorSkillScore } from "../components/cards/DoctorSkillScore";
import { DoctorProfessionalScore } from "../components/cards/DoctorProfScore";
import { DoctorExplanationScore } from "../components/cards/DoctorExplanationScore";
import { DoctorEmpathyScore } from "../components/cards/DoctorEmpathyScore";
import { DoctorCourtesyScore } from "../components/cards/DoctorCourtesyScore";
import { StaffScore } from "../components/cards/StaffScore";
import { DoctorScore } from "../components/cards/DoctorScore";
import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { TotalSkillScore } from "../components/cards/TotalSkillScore";
import { TotalProfessionalScore } from "../components/cards/TotalProfScore";
import { TotalExplanationScore } from "../components/cards/TotalExplanationScore";
import { TotalEmpathyScore } from "../components/cards/TotalEmpathyScore";
import { TotalCourtesyScore } from "../components/cards/TotalCourtesyScore";
import LineChart from "../components/charts/LineChart";
import { EmployeeScore } from "../components/cards/EmployeeScore";

const DUMMY_DATA = {
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};
const Employees = () => {
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

  const dateoptions = ["All",
    '2019',"2020","2021","2022"  ]
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
            <Typography variant="h6">Time Period (Verbatim only)</Typography>
            <Dropdown options={dateoptions} onChange={selectFilterHandler3} value={defaultdatepOption} placeholder="Select an option" />
            </Grid>
          </Grid>
        
      </header>

      <aside className="col-span-5 md:col-span-2 p-10 bg-gray-700 row-span-1">
        <h1 className="text-center text-2xl text-white">
        <Typography variant="h5"><b>Employee Key Performance Indicators</b></Typography>
        <Typography variant="h6">Overall Scores</Typography>
        <Grid container rowSpacing={2} columnSpacing={2}>
        
            <Grid item lg={12}>
              <EmployeeScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></EmployeeScore>
            </Grid>
            <Grid item lg={6}>
              <StaffScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></StaffScore>
            </Grid>
            <Grid item lg={6}>
              <DoctorScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></DoctorScore>
            </Grid>

          </Grid><br/>
          <Typography variant="h6">Sub-Scores</Typography>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item lg={6}>
              <TotalSkillScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></TotalSkillScore>
            </Grid>
            <Grid item lg={6}>
              <TotalProfessionalScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></TotalProfessionalScore>
            </Grid>
            <Grid item lg={6}>
              <TotalExplanationScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></TotalExplanationScore>
            </Grid>
            <Grid item lg={6}>
              <TotalEmpathyScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></TotalEmpathyScore>
            </Grid>
            <Grid item lg={6}>
              <TotalCourtesyScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></TotalCourtesyScore>
            </Grid>
      </Grid>
        </h1>
      </aside>

      <main className="col-span-5 md:col-span-2 p-10 bg-blue-200 h-full row-span-1">
        <h1 className="text-center text-2xl text-black">
      <Typography variant="h5"><b>Employee Category Scores</b></Typography>
        </h1>
        <h1 className="text-center text-2xl text-black">
        <Typography variant="h6"><b>Staff Scores</b></Typography>
          <Grid container  rowSpacing={2} columnSpacing={3}>
            <Grid item md={4}>
              <StaffSkillScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></StaffSkillScore>
            </Grid>
            <Grid item md={4}>
              <StaffProfessionalScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></StaffProfessionalScore>
            </Grid>
            <Grid item md={4}>
              <StaffExplanationScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></StaffExplanationScore>
            </Grid>
            <Grid item md={4}>
              <StaffEmpathyScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></StaffEmpathyScore>
            </Grid>
            <Grid item md={4}>
              <StaffCourtesyScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></StaffCourtesyScore>
            </Grid>
          </Grid>
        </h1>
        <br></br>
        <h1 className="text-center text-2xl text-black">
        <Typography variant="h6"><b>Doctor Scores</b></Typography>
          <Grid container rowSpacing={2} columnSpacing={3}>
            <Grid item md={4}>
              <DoctorSkillScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></DoctorSkillScore>
            </Grid>
            <Grid item md={4}>
              <DoctorProfessionalScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></DoctorProfessionalScore>
            </Grid>
            <Grid item md={4}>
              <DoctorExplanationScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></DoctorExplanationScore>
            </Grid>
            <Grid item md={4}>
              <DoctorEmpathyScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></DoctorEmpathyScore>
            </Grid>
            <Grid item md={4}>
              <DoctorCourtesyScore hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></DoctorCourtesyScore>
            </Grid>
          </Grid>
        </h1>
      </main>

      <aside className="col-span-5 md:col-span-2 p-10 bg-rose-300 row-span-4">
      <h1 className="text-center text-2xl text-black">
      <Typography variant="h5"><b>Employee Verbatim</b></Typography>
        </h1>
        <VerbatimEmployee hospitalfilterval={hospitalfilterval} departmentfilterval={departmentfilterval} datefilterval={datefilterval}></VerbatimEmployee>
      </aside>

      {/* <footer className="col-span-5 md:col-span-2 p-10 bg-green-300 row-span-2">
        <h1 className="text-center text-2xl">
          Suyash will add the graphs here.
        </h1>
        
      </footer> */}
       <aside className="col-span-5 md:col-span-4 p-10 row-span-2">
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
            {/*JSON.stringify(graph_data)*/}
            <LineChart series={DUMMY_DATA.series} title="Title 6" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Employees;
