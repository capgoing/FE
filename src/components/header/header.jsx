import styled from "styled-components";
import colors from "../../styles/colors";

const HeaderContainer = styled.div`
    width: 100%;
    height: 6vw;
    margin-top: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InnerHeaderContainer = styled.div`
    width: 76vw;
    height: 6vw;
    border-radius: 3vw;
    background: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <InnerHeaderContainer>
                Header
            </InnerHeaderContainer>
        </HeaderContainer>
    )
}

export default Header;