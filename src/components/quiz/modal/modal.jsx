import * as L from "../../../styles/list/list";
import * as Q from "../../../styles/quiz/quiz";
import Success from "../../../assets/images/quiz/success.png";
import Fail from "../../../assets/images/quiz/fail.png";

const Modal = ({ onClose }) => {
    return (
        <L.Overlay>
            <Q.ModalContainer>
                <Q.ModalP>정답입니다!</Q.ModalP>
                <Q.ModalImg src={Success} alt="success" />
                <Q.ModalP2>
                    여당의 여(與)는 '같은 편' 또는 '돕다'라는 뜻이며,<br/>
                    야당은 재야 정당(在野政黨)의 준말로,<br/>
                    현재 정당 정치에서 정권을 잡고 있지 않은 정당이에요.
                </Q.ModalP2>
                <Q.CloseButton onClick={onClose}>확인</Q.CloseButton>
            </Q.ModalContainer>
        </L.Overlay>
    )
}

export default Modal;