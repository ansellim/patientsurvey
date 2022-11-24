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
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const Employees = () => {
  const hospitaloptions = [
    'ABCHospital'
  ];
  const departmentoptions = [
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
    'Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019', 'Aug 2019', 'Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019',
    'Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020', 'Dec 2020', 
  ]
  const defaulthospOption = hospitaloptions[0];
  const defaultdeptOption = departmentoptions[0];
  const defaultdatepOption = dateoptions[0];
  const selectFilterHandler1 =(event) =>{
    console.log(event);
  }
  const selectFilterHandler2 =(event) =>{
    console.log(event);
  }
  const selectFilterHandler3 =(event) =>{
    console.log(event);
  }

  return (
    <div className=" grid grid-cols-6 h-screen grid-rows-1">
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

      <aside className="col-span-5 md:col-span-2 p-10 bg-gray-700 row-span-2">
        <h1 className="text-center text-2xl text-white">
          Ansel's cards in this div.
        </h1>
      </aside>

      <main className="col-span-4 md:col-span-2 p-10 bg-blue-200 h-full row-span-5">
      <h1 className="text-center text-2xl text-black">
      <Typography variant="h5"><b>Employee Scores</b></Typography>
        </h1>
        <h1 className="text-center text-2xl text-black">
        <Typography variant="h6"><b>Staff Scores</b></Typography>
          <Grid container  rowSpacing={2} columnSpacing={3}>
            <Grid item md={4}>
              <StaffSkillScore></StaffSkillScore>
            </Grid>
            <Grid item md={4}>
              <StaffProfessionalScore></StaffProfessionalScore>
            </Grid>
            <Grid item md={4}>
              <StaffExplanationScore></StaffExplanationScore>
            </Grid>
            <Grid item md={4}>
              <StaffEmpathyScore></StaffEmpathyScore>
            </Grid>
            <Grid item md={4}>
              <StaffCourtesyScore></StaffCourtesyScore>
            </Grid>
          </Grid>
        </h1>
        <br></br>
        <h1 className="text-center text-2xl text-black">
        <Typography variant="h6"><b>Doctor Scores</b></Typography>
          <Grid container rowSpacing={2} columnSpacing={3}>
            <Grid item md={4}>
              <DoctorSkillScore></DoctorSkillScore>
            </Grid>
            <Grid item md={4}>
              <DoctorProfessionalScore></DoctorProfessionalScore>
            </Grid>
            <Grid item md={4}>
              <DoctorExplanationScore></DoctorExplanationScore>
            </Grid>
            <Grid item md={4}>
              <DoctorEmpathyScore></DoctorEmpathyScore>
            </Grid>
            <Grid item md={4}>
              <DoctorCourtesyScore></DoctorCourtesyScore>
            </Grid>
          </Grid>
        </h1>
      </main>

      <aside className="col-span-5 md:col-span-2 p-10 bg-rose-300 row-span-4">
      <h1 className="text-center text-2xl text-black">
      <Typography variant="h5"><b>Employee Verbatim</b></Typography>
        </h1>
        <VerbatimEmployee></VerbatimEmployee>
      </aside>

      <footer className="col-span-5 md:col-span-2 p-10 bg-green-300 row-span-2">
        <h1 className="text-center text-2xl">
          Suyash will add the graphs here.
        </h1>
      </footer>
    </div>
  );
};

export default Employees;
