import styled from "styled-components";
import colors from "../../styles/common/colors";

// game.jsx
export const GameContainer = styled.div`
    margin-top: 13.6vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vw;
`

export const GameP = styled.p`
    font-size: 1.8vw;
    font-weight: 400;
    color: ${colors.gray3};
    font-family: 'Ownglyph_meetme-Rg';
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 3vw;
`

export const StageButton = styled.button`
    width: 10vw;
    height: 5vw;
    border-radius: 2.5vw;
    background: ${colors.white};
    font-family: 'Ownglyph_meetme-Rg';
    font-size: 2vw;
    font-weight: 400;
    color: ${colors.brown};
`

// modal.jsx
export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vw;
    min-height: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.2vw 7.5vw 1.75vw 7.5vw;
    background: ${colors.white};
    border-radius: 2vw;
`

export const ModalP = styled.p`
    font-size: 2vw;
    font-weight: 400;
    color: ${colors.black};
    font-family: 'Ownglyph_meetme-Rg';
`

export const ModalImg = styled.img`
    width: 7.3vw;
    height: 7.1vw;
    margin: 1.25vw 0 2vw 0;
`

export const ModalP2 = styled(ModalP)`
    font-size: 1.5vw;
    color: ${colors.gray4};
    font-weight: 400;
    font-family: 'Ownglyph_meetme-Rg';
    line-height: 175%;
    text-align: center;
    margin-bottom: 2vw;
`

export const CloseButton = styled.button`
    width: 6.5vw;
    height: 3.4vw;
    border-radius: 1.7vw;
    background: ${colors.orange};
    font-size: 1.8vw;
    font-weight: 400;
    color: ${colors.white};
    font-family: 'Ownglyph_meetme-Rg';
`

// result.jsx
export const ResultContainer = styled.div`
    width: 100%;
    height: 33.5vw;
    border-radius: 3vw;
    background: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vw 0 3vw 0;
`

export const InnerResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vw;
`

export const ResultP = styled.p`
    font-size: 3.5vw;
    font-weight: 400;
    color: ${colors.brown};
    font-family: 'Ownglyph_meetme-Rg';
    text-align: center;
`

export const ResultButtonContainer = styled.div`
    display: flex;
    gap: 3vw;
`

export const ResultButton = styled.button`
    width: 15.7vw;
    height: 5vw;
    border-radius: 2.5vw;
    outline: 0.2vw solid ${colors.orange2};
    background: ${colors.white};
    font-size: 2vw;
    font-weight: 400;
    color: ${colors.orange2};
    font-family: 'Ownglyph_meetme-Rg';
`
