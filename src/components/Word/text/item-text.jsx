import styled from "styled-components";
import colors from "../../../styles/colors";

const ItemContainer = styled.div`
    width: 100%;
`

const ItemP = styled.p`
    font-size: 0.7vw;
    font-weight: 500;
    color: ${colors.black};
`

const ItemText = ({ title }) => {
    return (
        <ItemContainer>
            <ItemP>{title}</ItemP>
        </ItemContainer>
    )
}

export default ItemText;