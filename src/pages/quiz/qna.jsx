import { useState } from "react";
import Modal from "../../components/quiz/modal/modal";
import * as Q from "../../styles/quiz/quiz";

const Qna = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pageContainer">
            <Q.CloseButton onClick={() => setIsOpen(true)}>정답 확인</Q.CloseButton>

            {isOpen && <Modal onClose={() => setIsOpen(false)} />}
        </div>
    )
}

export default Qna;