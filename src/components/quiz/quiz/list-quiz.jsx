import ItemQuiz from "./item-quiz";
import { QuizData } from "../../../mocks/quiz/quizData";
import * as Q from "../../../styles/quiz/quiz"

const ListQuiz = () => {
  return (
    <Q.ListQuizContainer>
      {QuizData.map((item, index) => (
        <ItemQuiz 
            key={index} 
            data={item} 
        />
      ))}
    </Q.ListQuizContainer>
  );
};

export default ListQuiz;