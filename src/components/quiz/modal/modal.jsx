import * as L from "../../../styles/list/list";
import * as Q from "../../../styles/quiz/quiz";
import Success from "../../../assets/images/quiz/success.png";
import Fail from "../../../assets/images/quiz/fail.png";

const Modal = ({ onClose, isCorrect, correctAnswer }) => {
  return (
    <L.Overlay>
      <Q.ModalContainer>
        <Q.ModalP>{isCorrect ? "정답입니다!" : "오답입니다ㅜㅜ"}</Q.ModalP>
        <Q.ModalImg
          src={isCorrect ? Success : Fail}
          alt={isCorrect ? "success" : "fail"}
        />
        <Q.ModalP2>
          {isCorrect ? null : (
            <>
              정답은
              <br />"{correctAnswer}"
              <br />
            </>
          )}
        </Q.ModalP2>
        <Q.CloseButton onClick={onClose}>확인</Q.CloseButton>
      </Q.ModalContainer>
    </L.Overlay>
  );
};

export default Modal;
