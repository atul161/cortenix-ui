import React from "react";

// No need for the Props type if it's not used
const DownArrow = () => {
  return (
      <svg
          width="20"
          height="40"
          viewBox="0 0 20 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M0.241827 30.5074L9.79972 40L19.7559 30.1118V23.3879L9.79972 33.2761L0.241827 23.7834V30.5074Z"
            fill="url(#paint0_linear_151_1366)"
        />
        <path
            d="M0.241827 18.8529L9.79972 28.2664L19.7559 18.3782V11.7334L9.79972 21.6215L0.241827 12.1289V18.8529Z"
            fill="url(#paint1_linear_151_1366)"
        />
        <path
            d="M0.241827 7.11944L9.79972 16.6121L19.7559 6.72391V-3.24249e-05L9.79972 9.88812L0.241827 0.395494V7.11944Z"
            fill="url(#paint2_linear_151_1366)"
        />
        <defs>
          <linearGradient
              id="paint0_linear_151_1366"
              x1="19.7559"
              y1="31.694"
              x2="0.241827"
              y2="31.694"
              gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF8E24" />
            <stop offset="1" stopColor="#FF7729" />
          </linearGradient>
          <linearGradient
              id="paint1_linear_151_1366"
              x1="19.7559"
              y1="19.9999"
              x2="0.241827"
              y2="19.9999"
              gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF8E24" />
            <stop offset="1" stopColor="#FF7729" />
          </linearGradient>
          <linearGradient
              id="paint2_linear_151_1366"
              x1="19.7559"
              y1="8.30601"
              x2="0.241827"
              y2="8.30601"
              gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF8E24" />
            <stop offset="1" stopColor="#FF7729" />
          </linearGradient>
        </defs>
      </svg>
  );
};

export default DownArrow;
