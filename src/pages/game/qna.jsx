import { useState } from "react";
import Modal from "../../components/game/modal/modal";
import * as G from "../../styles/game/game";

const Qna = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pageContainer">
            <G.CloseButton onClick={() => setIsOpen(true)}>정답 확인</G.CloseButton>

            {isOpen && <Modal onClose={() => setIsOpen(false)} />}
        </div>
    )
}

export default Qna;