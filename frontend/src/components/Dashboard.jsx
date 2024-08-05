import React from "react";
import Navbar from "./Navbar";
import StatCards from "./StatCards";
import ProjectsTable from "./ProjectsTable";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <div className="p-4 xl:ml-80">
          <Navbar />
          <div className="mt-12">
            <StatCards />
            <ProjectsTable />
          </div>
          <div className="text-blue-gray-600">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
