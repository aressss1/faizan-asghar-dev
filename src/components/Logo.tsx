import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="F" transform="translate(35.000000, 35.000000)">
          {/* Replace this path data with the SVG path data for the letter "F" */}
          <path
            fill="currentColor"
            d="M75,5
            l-60,0 0,90
            M15,45
            l50,0"
          />
        </g>
        {/* Keep the rest of the SVG elements unchanged */}
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;

