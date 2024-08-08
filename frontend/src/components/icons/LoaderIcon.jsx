import React from "react";

function LoaderIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-24 h-24 animate-spin"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ff6f61", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#00bcd4", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="url(#grad1)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="251.2"
        strokeDashoffset="125.6"
        className="animate-spin-circle"
      />
    </svg>
  );
}

export default LoaderIcon;
