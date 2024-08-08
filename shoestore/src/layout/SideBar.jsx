import React from "react";
import DashboardManagement from "../component/sidebar/DashboardManagement";
import ProfileManagement from "../component/sidebar/ProfileManagement";
import TableManagement from "../component/sidebar/TableManagement";
import SigninManagement from "../component/sidebar/SigninManagement";
import SignupManagement from "../component/sidebar/SignupManagement";
import NotificationManagement from "../component/sidebar/NotificationManagement";

function SideBar() {
  return (
    <>
      <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <div className="relative border-b border-white/20">
          <a className="flex items-center gap-4 py-6 px-8" href="#/">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Shoe Store Dashboard
            </h6>
          </a>
        </div>
        <div className="m-4">
          <ul className="mb-4 flex flex-col gap-1">
            <li>
              <DashboardManagement />
            </li>
            <li>
              <ProfileManagement />
            </li>
            <li>
              <TableManagement />
            </li>
            <li>
              <NotificationManagement />
            </li>
          </ul>
          <ul className="mb-4 flex flex-col gap-1">
            <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
              auth pages
            </p>
            <li>
              <SigninManagement />
            </li>
            <li>
              <SignupManagement />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
