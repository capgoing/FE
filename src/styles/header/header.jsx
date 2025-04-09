import styled from "styled-components";
import colors from "../common/colors";

// header.jsx
export const HeaderContainer = styled.div`
  width: 100%;
  height: 6vw;
  margin-top: 1.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerHeaderContainer = styled.div`
  width: 76vw;
  height: 6vw;
  border-radius: 3vw;
  background: ${({ theme }) => theme.components?.innerHeaderContainer?.background || colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5vw 0 3vw;
`;

export const LogoImg = styled.img`
  width: 8.4vw;
  height: 2.85vw;
  cursor: pointer;
`;

export const AddButton = styled.button`
  width: 6.5vw;
  height: 3.2vw;
  background: ${colors.mainYellow};
  border-radius: 1.7vw;
  font-size: 1vw;
  font-weight: 600;
  color: ${colors.white};
`;

// toggle.jsx
export const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;
`;

export const ToggleBox = styled.div`
    width: 14vw;
    height: 4vw;
    background: ${({ theme }) => theme.components?.toggleBox?.background || colors.subYellow};
    border-radius: 2vw;
    padding: 0.4vw;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
`;

export const ToggleButton = styled.button`
    position: absolute;
    top: 0.4vw;
    left: ${({ active }) => (active ? "7.1vw" : "0.4vw")};
    width: 6.5vw;
    height: 3.2vw;
    background: ${({ theme }) => theme.components?.toggleButton?.background || colors.mainYellow};
    border-radius: 1.7vw;
    font-size: 1vw;
    font-weight: 600;
    font-family: 'Noto Sans';
    color: ${({ theme }) => theme.components?.toggleButton?.text || colors.white};
    border: none;
    transition: left 0.3s ease;
    z-index: 2;
`;

export const LabelText = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1;
`;

export const Label = styled.p`
    font-size: 1vw;
    font-weight: 600;
    font-family: 'Noto Sans';
    color: ${({ theme }) => theme.components?.toggleLabel?.text || colors.white};
    padding: 0 1vw;
`;

export const CloseImg = styled.img`
    width: 2.3vw;
    height: 2.3vw;
    cursor: pointer;
`