import * as Q from "../../styles/quiz/quiz";
import { useNavigate, useParams } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleQnaClick = (mode) => {
    navigate(`/quiz/${id}/qna?mode=${mode}`);
  };

  return (
    <div className="pageContainer">
      <Q.QuizContainer>
        <Q.QuizP>난이도 선택</Q.QuizP>
        <Q.ButtonContainer>
          <Q.StageButton onClick={() => handleQnaClick("easy")}>
            쉬움
          </Q.StageButton>
          <Q.StageButton onClick={() => handleQnaClick("hard")}>
            어려움
          </Q.StageButton>{" "}
        </Q.ButtonContainer>
      </Q.QuizContainer>
    </div>
  );
};

export default Quiz;
