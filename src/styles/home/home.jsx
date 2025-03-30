import styled from "styled-components";
import colors from "../common/colors";
import MAINBG from "../../assets/images/home/mainbg.svg";
import MAINBG2 from "../../assets/images/home/mainbg2.svg";
import HOMEFRAME from "../../assets/images/home/homeframe.svg";
import { keyframes } from "styled-components";

// import MAINBG from "../../assets/images/home/mainbg.svg";

export const HomeLayout = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

// 첫번째 페이지
export const HomeFirstPage = styled.div`
  position: relative;
  background: url(${MAINBG}) no-repeat center center;
  background-size: cover; // 배경 이미지를 꽉 채움
  background-position-y: 20px;
  background-attachment: fixed; // 배경이 뷰포트 기준으로 고정

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
  align-items: center;
`;

export const MainLogoAndButton = styled.div`
  position: relative;
  display: inline-block;
  width: 42.08vw;
`;

export const LOGO = styled.img`
  width: 17.6vw;
  height: 20%;
  position: absolute;
  bottom: 55%;
  left: 50%;
  transform: translateX(-50%) translateY(50%); // 가운데 정렬 + 이미지 바깥쪽으로 조금 내림
  z-index: 2;
`;
export const HomeFrameImg = styled.img`
  width: 42vw;
  height: 100%;
  display: block;
`;
export const UploadPdfButton = styled.button`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%) translateY(50%); // 가운데 정렬 + 이미지 바깥쪽으로 조금 내림
  z-index: 5;
  width: 70%;
  height: 13%;
  flex-shrink: 0;
  border-radius: 40.842px;
  background: #fe8f00;
  color: white;
  font-size: 1.5vw;
  margin-top: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem; // 텍스트와 이미지 간 간격
  font-family: "Ownglyph_meetme-Rg";
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
  background-image: url(${MAINBG2});
  background-size: cover;
  background-position: center;

  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
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
