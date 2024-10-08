import React from "react";
import NotificationIcon from "../../icons/NotificationIcon.jsx";

function NotificationManagement() {
  return (
    <>
      <a className="" href="#">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <NotificationIcon />
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            notifactions
          </p>
        </button>
      </a>
    </>
  );
}

export default NotificationManagement;
