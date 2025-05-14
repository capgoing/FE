import styled from "styled-components";
import colors from "../common/colors";
import MAINBG from "../../assets/images/home/bg.svg";
//import MAINBG from "../../assets/images/home/mainbg.svg";
import MAINBG2 from "../../assets/images/home/bg2.svg";

import { keyframes } from "styled-components";
import { style } from "framer-motion/client";

// import MAINBG from "../../assets/images/home/mainbg.svg";

export const HomeLayout = styled.div`
  width: 100%;

  height: 300vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  background: url(${MAINBG}) top center;
  background-size: cover;
  background-attachment: scroll;
`;

// 첫번째 페이지
export const HomeFirstPage = styled.div`
  position: relative;
  /* background: url(${MAINBG}) no-repeat center center;
  background-size: cover; // 배경 이미지를 꽉 채움
  background-attachment: fixed; // 배경이 뷰포트 기준으로 고정 */

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderBottomSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const MainLogoAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vw;
`;

export const LogoText = styled.p`
  margin-bottom: 1.5vw;
  color: ${colors.brown};
  text-align: center;
  text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  font-family: "Ownglyph meetme";
  font-size: 1.7vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LOGO = styled.img`
  width: 20vw;

  display: block;
`;
export const HomeFrameImg = styled.img`
  width: 42vw;
  height: 100%;
  display: block;
`;
export const UploadPdfButton = styled.button`
  background: ${colors.orange};
  color: #fff;
  border: none;
  border-radius: 2vw;
  padding: 1.4vw 10vw;
  font-size: 1.3vw;
  font-family: "Ownglyph_meetme-Rg";
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.7vw;
  cursor: pointer;
  margin-top: 1vw;
  box-shadow: 0 0.2vw 0.5vw rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
`;

export const PencilImg = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
`;

export const ArrowDownButton = styled.button`
  position: absolute;
  bottom: 10px;
  animation: ${blink} 1.5s infinite ease-in-out;
  /* margin-top: 10vh; */
`;

export const ArrowDownImg = styled.img`
  width: 4.5vw;
  height: 5vh;
`;

// 두번째 페이지
export const HomeSecondPage = styled.div`
  /* background-image: url(${MAINBG2});
  background-size: 100%;
  background-position: top center;
  background-attachment: fixed;

  background-repeat: no-repeat; */

  width: 100%;

  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
  margin-top: 20vh;
`;

export const FeatureCardWrapper = styled.div`
  width: 40vw;
  min-height: 90%; // 🔥 전체 화면 높이 확보
`;

export const FeatureCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2열 구성
  grid-row-gap: 2rem; // 행 사이 간격
  grid-column-gap: 2rem; // 열 사이 간격
  max-width: 100%;
  margin: 0 auto;

  // 마지막 카드 가운데 정렬
  & > div:last-child {
    grid-column: span 2;
  }
`;

// 두번째 페이지 - 기능 설명 카드
export const FeatureCardLayout = styled.div`
  width: 25vw; // 추가
  height: ${({ isWide }) => (isWide ? "30vh" : "60vh")};
  flex-shrink: 0;
  border-radius: 40px;
  background: #fff;
  display: flex;
  flex-direction: ${({ isWide }) => (isWide ? "row" : "column")};
  padding: 3rem;
  align-items: center;
  align-self: ${({ isWide }) => (isWide ? "center" : "unset")}; // 가운데 정렬
  gap: 1.2rem;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.5);
`;

export const FeatureImgBox = styled.div`
  width: ${({ isWide }) => (isWide ? "50%" : "100%")};
  height: ${({ isWide }) => (isWide ? "100%" : "52%")};
  flex-shrink: 0;
  border-radius: 20px;
  border: 4px solid #c3ea8e;
  padding: 22px;
`;
export const FeatureImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const FeatureTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8vw;
`;
export const FeatureSubtitleText = styled.div`
  color: #7d4d00;
  font-family: "Noto Sans";
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FeatureTitleText = styled.div`
  color: #000;
  font-family: "Noto Sans";
  font-size: 1.25vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Highlight = styled.span`
  color: #ff9123;
  font-weight: 700;
`;

export const FeatureDescriptionText = styled.div`
  color: #000;
  font-family: "Noto Sans";
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: pre-line; // 줄바꿈
  word-break: break-word; // 긴 단어가 넘칠 경우 줄바꿈
  overflow-wrap: break-word;
`;

// FeatureItem.jsx
export const FeatureItemContainer = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;
export const FeatureCardContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center; // 가운데 정렬
  gap: 1.5rem;
  position: relative;
  justify-content: space-between;
`;

export const StepP = styled.div`
  width: 30%;
  text-align: center;
  font-size: 6.5rem;
  font-family: "Pretendard";
  font-weight: bold;
  color: ${colors.brown};
  text-align: center;
`;
