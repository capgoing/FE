import * as Q from "../../styles/quiz/quiz";
import ListQuiz from "../../components/quiz/quiz/list-quiz";

const Quiz = () => {
  return (
    <div className="pageContainer">
      <Q.QuizContainer>
        <Q.QuizP>다양한 퀴즈로 개념을 다시 확인해요!</Q.QuizP>
        <ListQuiz />
      </Q.QuizContainer>
    </div>
  );
};

export default Quiz;
