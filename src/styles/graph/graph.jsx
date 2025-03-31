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