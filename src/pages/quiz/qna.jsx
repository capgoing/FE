import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/quiz/modal/modal";
import * as L from "../../styles/list/list";
import * as Q from "../../styles/quiz/quiz";
import ListenUp from "../../components/quiz/quiz/mode/Listenup";

const Qna = () => {
  const { id, mode } = useParams(); // 퀴즈 ID와 mode

  return (
    <div className="pageContainer">
      <L.ListContainer>
        <Q.QnaMainContainer>
          {mode === "listenUp" ? <ListenUp /> : <></>}
        </Q.QnaMainContainer>
      </L.ListContainer>
    </div>
  );
};

export default Qna;
