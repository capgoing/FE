import styled from "styled-components"
import colors from "../common/colors"

// header.jsx
export const HeaderContainer = styled.div`
    width: 100%;
    height: 6vw;
    margin-top: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InnerHeaderContainer = styled.div`
    width: 76vw;
    height: 6vw;
    border-radius: 3vw;
    background: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5vw 0 3vw;
`

export const LogoImg = styled.img`
    width: 8.4vw;
    height: 2.85vw;
    cursor: pointer;
`

export const AddButton = styled.button`
    width: 6.5vw;
    height: 3.2vw;
    background: ${colors.mainYellow};
    border-radius: 1.7vw;
    font-size: 1vw;
    font-weight: 600;
    color: ${colors.white};
`
