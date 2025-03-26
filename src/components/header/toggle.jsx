import styled from "styled-components";
import colors from "../../styles/common/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Close from "../../assets/images/header/close.png";

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;
`;

const ToggleBox = styled.div`
    width: 14vw;
    height: 4vw;
    background: ${colors.subYellow};
    border-radius: 2vw;
    padding: 0.4vw;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
`;

const ToggleButton = styled.button`
    position: absolute;
    top: 0.4vw;
    left: ${({ active }) => (active ? "7.1vw" : "0.4vw")};
    width: 6.5vw;
    height: 3.2vw;
    background: ${colors.mainYellow};
    border-radius: 1.7vw;
    font-size: 1vw;
    font-weight: 600;
    font-family: 'Noto Sans';
    color: ${colors.white};
    border: none;
    transition: left 0.3s ease;
    z-index: 2;
`;

const LabelText = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1;
`;

const Label = styled.p`
    font-size: 1vw;
    font-weight: 600;
    font-family: 'Noto Sans';
    color: ${colors.mainYellow};
    padding: 0 1vw;
`;

const CloseImg = styled.img`
    width: 2.3vw;
    height: 2.3vw;
    cursor: pointer;
`

const Toggle = () => {
    const navigate = useNavigate();
    const [isEditMode, setIsEditMode] = useState(true);

    const handleToggle = () => {
        setIsEditMode((prev) => !prev);
    };
    
    const handleCloseClick = () => {
        navigate("/list");
    }

    return (
        <ToggleContainer>
            <ToggleBox onClick={handleToggle}>
                <LabelText>
                    <Label>수정모드</Label>
                    <Label>학습모드</Label>
                </LabelText>
                <ToggleButton active={!isEditMode}>
                    {isEditMode ? "수정모드" : "학습모드"}
                </ToggleButton>
            </ToggleBox>

            <CloseImg src={Close} alt="closeButton" onClick={handleCloseClick}/>
        </ToggleContainer>
    );
};

export default Toggle;
