import * as s from "../../styles/header/header";
import Modal from "../list/modal/modal";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/images/header/logo.png";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);

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
                    <s.LogoImg src={Logo} alt="logo" onClick={handleHomeClick} />
                    {location.pathname !== "/" && <s.AddButton onClick={toggleModal}>추가</s.AddButton>}
                </s.InnerHeaderContainer>
            </s.HeaderContainer>

            {showModal && <Modal onClose={toggleModal} />}
        </>
    )
}

export default Header;