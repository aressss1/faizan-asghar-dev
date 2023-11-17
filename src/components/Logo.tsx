import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="F" transform="translate(25, 25)">
          {/* Adjusted translate values to center the F */}
          <path
            fill="currentColor"
            d="M16 12C16 10.8954 16.8954 10 18 10L30 10C31.1046 10 32 10.8954 32 12C32 13.1046 31.1046 14 30 14L20 14L20 22L30 22C31.1046 22 32 22.8954 32 24C32 25.1046 31.1046 26 30 26L20 26L20 36C20 37.1046 19.1046 38 18 38C16.8954 38 16 37.1046 16 36L16 12Z"
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


