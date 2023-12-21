import React from "react";
import "./style/Main.css"
import HeaderWithoutAuth from "./componetns/headerWithoutAuth";

function Main(){
    return(
        <div>
            <HeaderWithoutAuth/>
            <svg
        className="rectangle-19"
        width="988"
        height="569"
        viewBox="0 0 988 569"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_59_637)">
          <path
            d="M4.5 30C4.5 13.4314 17.9315 0 34.5 0H953.5C970.069 0 983.5 13.4315 983.5 30V539C983.5 555.569 970.069 569 953.5 569H34.5C17.9315 569 4.5 555.569 4.5 539V30Z"
            fill="url(#paint0_linear_59_637)"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_59_637"
            x="0.5"
            y="0"
            width="987"
            height="577"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_59_637"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_59_637"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_59_637"
            x1="494"
            y1="0"
            x2="494"
            y2="569"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F5F5F5" />
            <stop offset="1" stop-color="#F5F5F5" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      
      <div className="task-tracker2">
        <span>
          <span className="task-tracker-2-span">TaskTracker </span>
          <span className="task-tracker-2-span2">
            об’єднає всі ваші завдання й учасників команди!
            <br />
          </span>
          <span className="task-tracker-2-span3">
            Зберіть усе докупи, навіть якщо учасники вашої команди перебувають у
            різних місцях.
          </span>
        </span>
      </div>

      <button class="frame-19">
        <div class="div">Зареєструватись</div>
      </button>
        </div>
    );
}

export default Main;