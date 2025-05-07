import styled from "styled-components";
import colors from "../common/colors";

export const GraphContainer = styled.div`
  width: 76vw;
  height: 43.4vw;
  border-radius: 2vw;
  background: ${colors.white};
  margin-top: 1.1vw;
  position: relative;
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
  font-size: 1vw;
  font-weight: 400;
  color: ${colors.brown};
  font-family: "Ownglyph_meetme-Rg";
  text-align: left;
`;

// graphFlow.jsx
export const GraphLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.components?.graphFlowContainer?.background || colors.white};

  border-radius: 2.4vw;
  position: relative;
`;

export const GraphFlowContainer = styled.div`
  width: ${({ isChatbotOpen }) => (isChatbotOpen ? "70%" : "100%")};
  transition: width 0.4s ease;
  height: 100%;
  border-radius: 2.4vw;
  background: ${({ theme }) =>
    theme.components?.graphFlowContainer?.background || colors.white};
  position: relative;
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
  width: 50%;
`;

export const NodeRightContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

export const LabelP = styled.p`
  width: 100%;
  font-weight: 400;
  text-align: ${({ isZoomedIn }) => (isZoomedIn ? "left" : "center")};
  font-family: "Ownglyph_meetme-Rg";
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ isEditMode, isZoomedIn }) =>
    isEditMode && isZoomedIn ? colors.white : colors.black};
`;

export const IncludeSentence = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  text-align: left;
  color: ${({ isEditMode, isZoomedIn }) =>
    isEditMode && isZoomedIn ? colors.white : colors.black};
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
  width: ${({ isVisible }) => (isVisible ? "20vw" : "0")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding: ${({ isVisible }) => (isVisible ? "1vw" : "0")};
  transition: width 0.3s ease, opacity 0.3s ease, padding 0.3s ease;

  overflow: hidden;
  height: 96%;
  background-color: ${colors.subYellow};
  border-radius: 2.4vw;
  position: relative;
  z-index: 10;
  margin: 1vw;
`;

export const ChatbotHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5vw;
`;
export const ChattingContainer = styled.div`
  width: 100%;
  height: 93%;
`;

export const ChatContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  overflow-y: auto;
  margin-bottom: 1vh;
`;

export const ChatBox = styled.div`
  max-width: 70%;
  padding: 1vw;
  border-radius: 1.2vw;
  background-color: ${colors.white};
  align-self: ${({ from }) => (from === "user" ? "flex-end" : "flex-start")};
`;

export const ChatP = styled.p`
  font-size: 1.5rem;
`;

export const ChatInputContainer = styled.div`
  width: 100%;
  height: 19%;
  position: relative;
  display: flex;
  align-items: flex-start;
  bottom: 0;
  padding: 1vw;
  background-color: ${colors.white};
  border-radius: 1vw;
`;

export const ChatInput = styled.input`
  width: 100%;
  height: auto;
  border-radius: 1vw;
`;
export const ChatSubmitButton = styled.button`
  position: absolute;
  right: 1vw;
  bottom: 1vw;
  padding: 0.5vw 1vw;
  border-radius: 1vw;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
