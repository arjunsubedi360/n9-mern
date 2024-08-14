import React from "react";

function LogoIcon({ height = "35px", width = "35px" }) {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Plate */}
      <circle cx="32" cy="32" r="30" stroke="#f0c419" fill="#f7e6a5" />
      
      {/* Fork */}
      <line x1="16" y1="16" x2="16" y2="40" stroke="#7f8c8d" strokeWidth="3" />
      <line x1="14" y1="16" x2="14" y2="20" stroke="#7f8c8d" strokeWidth="1.5" />
      <line x1="18" y1="16" x2="18" y2="20" stroke="#7f8c8d" strokeWidth="1.5" />
      
      {/* Knife */}
      <line x1="48" y1="16" x2="48" y2="40" stroke="#7f8c8d" strokeWidth="3" />
      <line x1="46" y1="16" x2="46" y2="20" stroke="#7f8c8d" strokeWidth="1.5" />
      
      {/* Food (lettuce and tomato) */}
      <circle cx="32" cy="32" r="10" fill="#e74c3c" />
      <path
        d="M27 37c0 3 2 5 5 5s5-2 5-5-2-5-5-5-5 2-5 5z"
        fill="#27ae60"
      />
    </svg>
  );
}

export default LogoIcon;
