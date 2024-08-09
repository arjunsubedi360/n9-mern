import React from "react";
import MoneyIcon from "../icons/MoneyIcon";

function TodaysMoney() {
  return (
    <>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
        <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          <MoneyIcon />
        </div>
        <div className="p-4 text-right">
          <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
            Today's Money
          </p>
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
            $53k
          </h4>
        </div>
        <div className="border-t border-blue-gray-50 p-4">
          <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
            <strong className="text-green-500">+55%</strong>&nbsp;than last week
          </p>
        </div>
      </div>
    </>
  );
}

export default TodaysMoney;
