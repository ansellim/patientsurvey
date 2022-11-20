import React from "react";
import Typography from '@mui/material/Typography';
import { WordcloudChart } from "../components/charts/WordcloudChart";

const Wordcloud = () => {
  return (

    <>
     {/* <div className=" grid grid-cols-6 h-screen grid-rows-5"> */}
      
      {/* <header className="col-span-6 p-10 bg-amber-200 row-span-1">
        <h1 className="text-center text-2xl">Wordcloud Page</h1>
      </header> */}


      {/* <div className="col-span-6 p-10 bg-amber-200 row-span-1"> */}
      <WordcloudChart></WordcloudChart>
      {/* </div> */}
  

     {/* </div> */}

    </>
  );
};

export default Wordcloud;
