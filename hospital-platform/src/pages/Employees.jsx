import React from "react";

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
      </footer>
    </div>
  );
};

export default Employees;
