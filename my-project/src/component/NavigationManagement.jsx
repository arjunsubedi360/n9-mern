import React from "react";
import Search from "./Search";
import BreadCrumps from "./BreadCrumps";
import Setting from "./Setting";
import NotificationIcon from "./icons/NotificationIcon";

function NavigationManagement() {
  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <BreadCrumps />
        <div className="flex items-center">
          <Search />
          <Setting />
         <a href="#">  <NotificationIcon /></a>        
        </div>
      </div>
    </>
  );
}

export default NavigationManagement;
