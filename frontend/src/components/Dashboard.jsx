import React from "react";
import Navbar from "./Navbar";
import StatCards from "./StatCards";
import ProjectsTable from "./ProjectsTable";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-50/50">
          {/* <Navbar /> */}
          <div className="mt-12">
            <StatCards />
            <ProjectsTable />
          </div>
          <div className="text-blue-gray-600">
            <Footer />
          </div>
        </div>
    </>
  );
};

export default Dashboard;
