// src/components/quiz/qna/loading.js
import React from "react";
import MOSS from "../../../assets/images/quiz/moss.png";
export default function Loading() {
  return (
    <>
      <style>
        {`
        .wrapper {
          width: 100%;
          height: 12vw;
          position: relative;
          z-index: 1;
          margin: 0 auto;

        }

        .circle {
          width: 5vw;
          height: 5vw;
          position: absolute;
          border-radius: 50%;
          background-image: url(${MOSS});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          left: 8%;
          transform-origin: 50%;
          animation: circle7124 .5s alternate infinite ease;
        }

        @keyframes circle7124 {
          0% {
            top: 6vw;
            height: 0.5vw;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
          }

          40% {
            height: 2vw;
            border-radius: 50%;
            transform: scaleX(1);
          }

          100% {
            top: 0%;
          }
        }

        .circle:nth-child(2) {
          left: 48%;
          animation-delay: .2s;
        }

        .circle:nth-child(3) {
          left: auto;
          right: 0%;
          animation-delay: .3s;
        }

        .shadow {
          width: 3.5vw;
          height: 0.8vw;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.9);
          position: absolute;
          top: 9vw;
          transform-origin: 50%;
          z-index: -1;
          left: 10%;
          filter: blur(2px);
          animation: shadow046 .5s alternate infinite ease;
        }

        @keyframes shadow046 {
          0% {
            transform: scaleX(1.5);
          }

          40% {
            transform: scaleX(1);
            opacity: .7;
          }

          100% {
            transform: scaleX(.2);
            opacity: .4;
          }
        }

        .shadow:nth-child(4) {
          left: 49%;
          animation-delay: .2s
        }

        .shadow:nth-child(5) {
          left: auto;
          right: 2%;
          animation-delay: .3s;
        }

        .loading-text {
          margin-top: 2.4vw;
          text-align: center;
          font-size: 2.5vw;
          color: #333;
          font-weight: bold;
          font-family: "Ownglyph_meetme-Rg";
        }

        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40vw;
        }

        @media screen and (max-width: 768px) {
          .wrapper {
            width: 50vw;
            height: 15vw;
          }

          .circle {
            width: 8vw;
            height: 8vw;
          }

          .loading-text {
            font-size: 3.5vw;
          }
        }

        @media screen and (max-width: 480px) {
          .wrapper {
            width: 70vw;
            height: 18vw;
          }

          .circle {
            width: 10vw;
            height: 10vw;
          }

          .loading-text {
            text-align: center;
            font-size: 4vw;
 
          }
       
        }
        `}
      </style>
      <div className="loading-container">
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
        <div className="loading-text">로딩중... 잠시만 기다려주세요</div>
      </div>
    </>
  );
}
