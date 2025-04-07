import styled from "styled-components";
import colors from "../common/colors";

export const GraphContainer = styled.div`
    width: 76vw;
    height: 43.4vw;
    border-radius: 2vw;
    background: ${colors.white};
    margin-top: 1.1vw;
    position: relative;
`

export const GraphButtonContainer = styled.div`
    position: absolute;
    bottom: 1vw;
    right: 1vw;
    display: flex;
    flex-direction: column;
    gap: 1vw;
`

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
`

export const CommonButtonImg = styled.img`
    width: 1.5vw;
    height: 2vw;
    display: flex;
    justify-content: center;
`

export const CommonP = styled.p`
    font-size: 1vw;
    font-weight: 400;
    color: ${colors.brown};
    font-family: 'Ownglyph_meetme-Rg';
    text-align: left;
`

// graphFlow.jsx
export const GraphFlowContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 2.4vw;
    background: ${colors.white};
`;

// graphNode.jsx
export const NodeWrapper = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2vw;
  background: ${({ bg }) => colors[bg]};
  border: 0.15vw solid ${colors.orange2};
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  transition: font-size 0.2s ease;
`;

export const NodeLeftContainer = styled.div`
  width: 50%;
`

export const NodeRightContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`

export const LabelP = styled.p`
  width: 100%;
  font-weight: 400;
  text-align: ${({ isZoomedIn }) => (isZoomedIn ? 'left' : 'center')};
  font-family: 'Ownglyph_meetme-Rg';
  font-size: ${({ fontSize }) => fontSize};
  color: ${colors.black};  
`

export const Description = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  color: ${colors.black};
  text-align: left;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`