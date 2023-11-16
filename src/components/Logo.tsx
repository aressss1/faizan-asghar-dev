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
            d="M 20,20 L 20,10 L 30,10 L 30,15 L 25,15 L 25,20 L 30,20 L 30,25 L 25,25 L 25,40 L 20,40 Z"
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

