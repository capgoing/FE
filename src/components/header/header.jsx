import * as s from "../../styles/header/header";
import Modal from "../list/modal/modal";
import Toggle from "./toggle";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEditMode } from "../../contexts/editModeContext";
import Logo from "../../assets/images/header/logo.png";
import DarkLogo from "../../assets/images/header/darkLogo.png";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const hiddenToggle = location.pathname == "/" || location.pathname == "/list";
    const { isEditMode } = useEditMode();

    const handleHomeClick = () => {
        navigate("/");
    }

    const toggleModal = () => {
        setShowModal(prev => !prev);
      };

    return (
        <>
            <s.HeaderContainer>
                <s.InnerHeaderContainer>
                    <s.LogoImg src={isEditMode ? DarkLogo : Logo} alt="logo" onClick={handleHomeClick} />
                    {location.pathname == "/list" && <s.AddButton onClick={toggleModal}>추가</s.AddButton>}
                    {!hiddenToggle && <Toggle />}
                </s.InnerHeaderContainer>
            </s.HeaderContainer>

            {showModal && <Modal onClose={toggleModal} />}
        </>
    )
}

export default Header;