import React from "react";
import Typography from '@mui/material/Typography';

const Wordcloud = () => {
  return (
    <div className=" grid grid-cols-6 h-screen grid-rows-5">
      
      <header className="col-span-6 p-10 bg-amber-200 row-span-1">
        <h1 className="text-center text-2xl">Wordcloud Page</h1>
      </header>

      <aside className="col-span-5 md:col-span-2 p-10 bg-gray-700 row-span-2">
        <h1 className="text-center text-2xl text-white">
          Ansel's cards in this div.
        </h1>
      </aside>

    </div>
  );
};

export default Wordcloud;
