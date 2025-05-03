// src/components/quiz/qna/loading.js
import React from "react";
import MOSS from "../../../assets/images/quiz/moss.png";
export default function Loading() {
  return (
    <>
      <style>
        {`
        .wrapper {
          width: 30vw;
          height: 120px;
          position: relative;
          z-index: 1;
          margin: 0 auto;
        }

        .circle {
          width: 60px;
          height: 60px;
          position: absolute;
          border-radius: 50%;
            background-image: url(${MOSS}); /* ← 원하는 이미지로 교체 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
          left: 15%;
          transform-origin: 50%;
          animation: circle7124 .5s alternate infinite ease;
        }

          @keyframes circle7124 {
            0% {
              top: 60px;
              height: 5px;
              border-radius: 50px 50px 25px 25px;
              transform: scaleX(1.7);
            }

            40% {
              height: 20px;
              border-radius: 50%;
              transform: scaleX(1);
            }

            100% {
              top: 0%;
            }
          }

          .circle:nth-child(2) {
            left: 45%;
            animation-delay: .2s;
          }

          .circle:nth-child(3) {
            left: auto;
            right: 15%;
            animation-delay: .3s;
          }

          .shadow {
            width: 32px;
            height: 8px; 
            border-radius: 50%;
            background-color: rgba(0,0,0,0.9);
            position: absolute;
            top: 90px;
            transform-origin: 50%;
            z-index: -1;
            left: 15%;
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
            left: 45%;
            animation-delay: .2s
          }

          .shadow:nth-child(5) {
            left: auto;
            right: 15%;
            animation-delay: .3s;
          }
          .loading-text {
              margin-top: 24px;
              text-align: center;
              font-size: 4rem;
              color: #333;
              font-weight: bold;
              font-family: "Ownglyph_meetme-Rg";
   
          
        }
          .loading-container {
            display: flex;
            flex-direction: column;
            
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
