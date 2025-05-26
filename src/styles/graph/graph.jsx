import styled, { keyframes } from "styled-components";
import colors from "../common/colors";

const wave = keyframes`
  0% { opacity: 0.5 }
  50% { opacity: 1 }
  100% { opacity: 0.5 }
`;

export const ChatControlGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  width: 100%;
  background-color: #fffdf7;
  border-top: 0.05vw solid #eee;
  border-bottom: 0.05vw solid #eee;
  flex-wrap: wrap;

  font-size: 2rem; // 모든 자식 요소에 기본 글꼴 크기 적용
  font-family: "Ownglyph_meetme-Rg", sans-serif; // 통일된 폰트
`;

export const ChatControlItem = styled.div`
  width: 80%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align || "center"}; // 왼쪽/오른쪽 조절 가능
`;
export const ChatModeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    font-weight: 600;
    font-size: 1.2rem;
    font-family: "Ownglyph_meetme-Rg", sans-serif;
  }

  select {
    width: 16rem;
    height: 3.5rem;
    padding: 0 1rem;
    border-radius: 0.4vw;
    border: 0.05vw solid #ccc;
    font-size: 1.8rem; // ✅ 크지만 너무 과하지 않게
    font-family: "Ownglyph_meetme-Rg", sans-serif;
    background-color: white;
    cursor: pointer;
    line-height: 1;

    option {
      font-size: 1rem;
    }
  }
`;
export const ChatActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;

  button {
    background-color: #ffd54f;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 0.5vw;
    font-weight: 700;
    font-size: 2rem;
    font-family: "Ownglyph_meetme-Rg", sans-serif;
    cursor: pointer;
    transition: background-color 0.2s ease;
    min-width: 10rem;

    &:hover {
      background-color: #ffca28;
    }

    &:active {
      transform: scale(0.97);
    }
  }
`;


export const ChatQuickButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 0.5rem 1rem;

  button {
    background-color: #ffa726; // 따뜻한 주황
    border: none;
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #fb8c00;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const GraphContainer = styled.div`
  width: 76vw;
  height: 43.4vw;
  border-radius: 2vw;
  background: ${colors.white};
  margin-top: 1.1vw;
  position: relative;
  overflow: hidden;
`;

export const GraphButtonContainer = styled.div`
  position: absolute;
  bottom: 1vw;
  right: 1vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

export const CommonButton = styled.button`
  width: 7.5vw;
  height: 4vw;
  border-radius: 2.425vw;
  background: ${colors.subYellow};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1vw;
`;

export const CommonButtonImg = styled.img`
  width: 1.5vw;
  height: 2vw;
  display: flex;
  justify-content: center;
`;

export const CommonP = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: ${colors.brown};
  font-family: "Ownglyph_meetme-Rg";
  text-align: left;
`;

// graphFlow.jsx
export const GraphLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.components?.graphFlowContainer?.background || colors.white};

  border-radius: 2vw;
  position: relative;
`;

export const GraphFlowContainer = styled.div`
  width: ${({ isChatbotOpen }) => (isChatbotOpen ? "70%" : "100%")};

  transition: width 0.4s ease;
  height: 100%;
  //border-radius: 2vw;
  background: ${({ theme }) =>
    theme.components?.graphFlowContainer?.background || colors.white};
  position: relative;
  overflow: hidden;
`;

// graphNode.jsx
export const NodeWrapper = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.1vw;
  background: ${({ bg, isEditMode, isZoomedIn }) =>
    isEditMode && isZoomedIn
      ? colors.black
      : isEditMode
      ? colors.white
      : colors[bg]};
  border: 0.15vw solid
    ${({ isEditMode }) => (isEditMode ? colors.black : colors.orange2)};
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  transition: font-size 0.2s ease;
`;

export const NodeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.1vw;
`;

export const NodeLeftContainer = styled.div`
  width: ${({ isZoomedIn }) => (isZoomedIn ? "50%" : "100%")};
  height: 100%;
`;

export const NodeRightContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

export const LabelP = styled.p`
  width: 100%;
  height: 10%;
  font-weight: 400;
  text-align: ${({ isZoomedIn }) => (isZoomedIn ? "left" : "center")};
  font-family: "Ownglyph_meetme-Rg";
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ isEditMode, isZoomedIn }) =>
    isEditMode && isZoomedIn ? colors.white : colors.brown};
`;

export const IncludeSentence = styled.p`
  width: 100%;
  height: 70%;
  font-size: ${({ fontSize }) => fontSize};
  text-align: left;
  color: ${({ isEditMode, isZoomedIn }) =>
    isEditMode && isZoomedIn ? colors.white : colors.brown};
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const NodeTitleContainer = styled.div`
  display: flex;
  gap: ${({ nodeTitleContainerGap }) => nodeTitleContainerGap};
  align-items: center;
`;

export const SoundImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ soundImgContainerWidth }) => soundImgContainerWidth};
  height: ${({ soundImgContainerHeight }) => soundImgContainerHeight};
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.components?.soundImgContainer?.background || colors.white};
  cursor: pointer;
`;

export const SoundImg = styled.img`
  width: ${({ soundImgWidth }) => soundImgWidth};
`;

// graphMenu.jsx
export const MenuContainer = styled.div`
  width: 14.3vw;
  // height: 15vw;
  background: ${colors.subYellow};
  border: 0.1vw solid ${colors.mainYellow};
  border-radius: 1vw;
  position: absolute;
  top: 1vw;
  right: 1vw;
  color: ${colors.black};
  padding: 1vw;
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
`;

export const MenuTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseImg = styled.img`
  width: 1vw;
  height: 1vw;
  cursor: pointer;
`;

export const MenuTitle = styled.p`
  font-size: 1vw;
  font-weight: 600;
`;

export const MenuList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 2vw;
  font-size: 1vw;
  font-weight: 600;
  border-radius: 0.5vw;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${colors.mainYellow};
  }
`;

// graphNodeAdd.jsx
export const GraphNodeAddContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
`;

export const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.1vw;
`;

export const NodeP = styled.p`
  font-size: 0.7vw;
  font-weight: 600;
`;

export const NodeInput = styled.input`
  width: 100%;
  height: 2vw;
  background: ${colors.white};
  border: 0.1vw solid ${colors.mainYellow};
  border-radius: 0.5vw;
  padding: 0.5vw;
  box-sizing: border-box;
  font-size: 0.7vw;
  color: ${colors.black};
  font-weight: 600;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: 2vw;
  position: relative;
  display: flex;
  align-items: center;
`;

export const NodeSelect = styled.select`
  width: 100%;
  height: 100%;
  appearance: none;
  background: ${colors.white};
  border: 0.1vw solid ${colors.mainYellow};
  border-radius: 0.5vw;
  padding: 0.5vw;
  padding-right: 2vw;
  box-sizing: border-box;
  font-size: 0.7vw;
  color: ${colors.black};
  font-weight: 600;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0.8vw;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${colors.black};
  font-size: 1vw;
`;

export const AddButton = styled.button`
  width: 100%;
  height: 2vw;
  background: ${colors.mainYellow};
  border-radius: 0.5vw;
  text-align: center;
  color: ${colors.black};
  font-size: 0.7vw;
  margin-top: 1vw;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background: ${colors.white};
    border: 0.1vw solid ${colors.mainYellow};
  }
`;

// Chatbot.jsx
export const ChatbotLayout = styled.div`
  width: ${({ isVisible }) => (isVisible ? "30%" : "0")};
  height: 100%;
  /* width: ${({ isVisible }) => (isVisible ? "20vw" : "0")}; */
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding: ${({ isVisible }) => (isVisible ? "1vw" : "0")};
  transition: width 0.3s ease, opacity 0.3s ease, padding 0.3s ease;

  overflow: hidden;
  border-radius: 1.5vw;
  position: relative;
  z-index: 10;

  /* margin: 1vw; */
`;

export const MarkdownP = styled.p`
  font-size: 2rem;
  font-family: "Ownglyph_meetme-Rg";
  color: ${colors.brown};
`;

export const MarkdownUL = styled.ul`
  font-size: 2rem;
  padding-left: 2rem;
  font-family: "Ownglyph_meetme-Rg", sans-serif;
  color: ${colors.brown};
`;

// 기본
export const MarkdownLI = styled.li`
  font-size: 2rem;
  font-family: "Ownglyph_meetme-Rg", sans-serif;
  color: ${colors.black};
`;
export const MarkdownH1 = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: ${colors.brown};
  margin: 1.5rem 0 1rem;
  font-family: "Ownglyph_meetme-Rg", sans-serif;
`;

export const MarkdownH2 = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${colors.brown};
  margin: 1.2rem 0 0.8rem;
  font-family: "Ownglyph_meetme-Rg", sans-serif;
`;

export const MarkdownH3 = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: ${colors.brown};
  margin: 1rem 0 0.6rem;
  font-family: "Ownglyph_meetme-Rg", sans-serif;
`;

export const MarkdownDetails = styled.details`
  margin: 1rem 0;
  padding: 1.2rem;
  background-color:${colors.subYellow};
  border: 1px solid ${colors.textYellow};
  color: ${colors.textYellow};
  border-radius: 8px;
  font-size: 2rem;
  font-family: "Ownglyph_meetme-Rg", sans-serif;
  line-height: 1.6;
  cursor: pointer;

  &[open] summary::after {
    content: " ▲";
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }

  summary::after {
    content: " ▼";
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }
`;

export const MarkdownSummary = styled.summary`
  font-weight: bold;
  font-size: 2rem;
  font-family: "Ownglyph_meetme-Rg", sans-serif;
  color: ${colors.brown};
  cursor: pointer;
`;

export const ChatbotContainer = styled.div`
  height: 100%;
  background-color: ${colors.subYellow};
  border-radius: 1.5vw;
  position: relative;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
`;

export const ChatbotHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  //margin-bottom: 0.5vw;
`;
export const ChattingContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ChatContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  overflow-y: auto;

  // 마크다운 기본 스타일
  h1, h2, h3 {
    font-weight: bold;
    margin: 1rem 0 0.5rem;
  }

  p {
    font-size: 2rem;
    line-height: 1.6;
    margin: 0.3rem 0;
    white-space: pre-wrap; // 줄바꿈 유지
  }

  ul {
    padding-left: 2rem;
    list-style-type: disc;
  }

  code {
    background-color: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
  }
`;


export const ChatBox = styled.div`
  max-width: 70%;
  padding: 1vw;
  border-radius: 2.4vw;
  background-color: ${colors.white};
  align-self: ${({ from }) => (from === "user" ? "flex-end" : "flex-start")};
`;

export const ChatP = styled.p`
  font-size: 5vw;
  font-weight: 400;
  color: ${colors.brown};
  font-family: "Ownglyph_meetme-Rg";
`;

export const ChatLoadingP = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: ${colors.brown};
  font-family: "Ownglyph_meetme-Rg";

  span {
    display: inline-block;
    animation: ${wave} 1.2s infinite;
  }

  span:nth-child(1) {
    animation-delay: 0s;
  }
  span:nth-child(2) {
    animation-delay: 0.1s;
  }
  span:nth-child(3) {
    animation-delay: 0.2s;
  }
  span:nth-child(4) {
    animation-delay: 0.3s;
  }
  span:nth-child(5) {
    animation-delay: 0.4s;
  }
  span:nth-child(6) {
    animation-delay: 0.5s;
  }
  span:nth-child(7) {
    animation-delay: 0.6s;
  }
  span:nth-child(8) {
    animation-delay: 0.7s;
  }
  span:nth-child(9) {
    animation-delay: 0.8s;
  }
  span:nth-child(10) {
    animation-delay: 0.9s;
  }
  span:nth-child(11) {
    animation-delay: 1s;
  }
  span:nth-child(12) {
    animation-delay: 1.1s;
  }
`;

export const ChatInputContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: flex-start;
  bottom: 0.8vw;
  padding: 1vw;
  background-color: ${colors.white};
  border-radius: 1vw;
`;

export const ChatInput = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  border: none;
  font-size: 1vw;
  font-weight: 400;
  font-family: "Ownglyph_meetme-Rg";

  &:focus {
    outline: none;
    border: none;
  }
`;

export const ChatSubmitButton = styled.button`
  position: absolute;
  right: 0.8vw;
  bottom: 0.8vw;
  padding: 0.5vw 1vw;
  border-radius: 2.4vw;
  background-color: ${colors.orange2};
  color: ${colors.white};
  font-weight: 400;
  font-size: 1vw;
  font-family: "Ownglyph_meetme-Rg";
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: ${colors.gray2};
    cursor: not-allowed;
  }
`;
