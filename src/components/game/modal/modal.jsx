import * as L from "../../../styles/list/list";
import * as G from "../../../styles/game/game";
import Success from "../../../assets/images/game/success.png";
import Fail from "../../../assets/images/game/fail.png";

const Modal = ({ onClose }) => {
    return (
        <L.Overlay>
            <G.ModalContainer>
                <G.ModalP>정답입니다!</G.ModalP>
                <G.ModalImg src={Success} alt="success" />
                <G.ModalP2>
                    여당의 여(與)는 '같은 편' 또는 '돕다'라는 뜻이며,<br/>
                    야당은 재야 정당(在野政黨)의 준말로,<br/>
                    현재 정당 정치에서 정권을 잡고 있지 않은 정당이에요.
                </G.ModalP2>
                <G.CloseButton onClick={onClose}>확인</G.CloseButton>
            </G.ModalContainer>
        </L.Overlay>
    )
}

export default Modal;