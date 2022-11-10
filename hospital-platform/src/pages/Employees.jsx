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
const Employees = () => {
  return (
    <div className=" grid grid-cols-6 h-screen grid-rows-5">
      <header className="col-span-6 p-10 bg-amber-200 row-span-1">
        <h1 className="text-center text-2xl">Filters in this div</h1>
      </header>

      <aside className="col-span-5 md:col-span-2 p-10 bg-gray-700 row-span-2">
        <h1 className="text-center text-2xl text-white">
          Ansel's cards in this div.
        </h1>
      </aside>

      <main className="col-span-4 md:col-span-2 p-10 bg-blue-200 h-full row-span-5">
      <h1 className="text-center text-2xl text-black">
          <Typography variant="h3">Employee Scores</Typography>
        </h1>
        <h1 className="text-center text-2xl text-black">
          <Typography variant="h4">Staff Scores</Typography>
          <Grid container rowSpacing={6}>
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
          <Typography variant="h4">Doctor Scores</Typography>
          <Grid container rowSpacing={6}>
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
          <Typography variant="h3">Employee Verbatim</Typography>
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
