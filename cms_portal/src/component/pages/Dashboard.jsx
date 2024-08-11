import React from "react";
import TodaysMoney from "../TodaysMoney";
import TodaysUser from "../TodaysUser";
import TodaysClient from "../TodaysClient";
import TodaysSale from "../TodaysSale";

function Dashboard() {
  return (
    <>
      <TodaysMoney />
      <TodaysUser />
      <TodaysClient />
      <TodaysSale />
    </>
  );
}

export default Dashboard;
