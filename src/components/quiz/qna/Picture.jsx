import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as Q from "../../../styles/quiz/quiz.jsx";
import AnswerOptionList from "./AnswerOptionList.jsx";
import Modal from "../modal/modal.jsx";
import usePost from "../../../hooks/usePost.jsx";

export default function Picture() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [currentQuizNum, setCurrentQuizNum] = useState(1);
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [correctNum, setCorrectNum] = useState(0);

  const [answerOptions, setAnswerOptions] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const { id: graphId, mode: modeName } = useParams(); // 그래프 id값 가져오기
  const { data, loading, error } = usePost(`/quiz/${graphId}?mode=${modeName}`); // 퀴즈 api 불러오기

  // ✅ 더미 데이터
  const dummyData = {
    questions: [
      {
        image:
          "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/gDYF/image/E701VpFReM5ktHOyRKX3FE2mJ7U.jpg",
        shuffledOptions: [
          "지구는 목성을 공전합니다.",
          "태양은 태양계의 중심별입니다.",
          "화성은 가장 큰 행성입니다.",
        ],
        answer: "태양은 태양계의 중심별입니다.",
      },
      {
        shuffledOptions: ["달", "사람", "바람", "기분", "사과"],
        answer: "사람",
      },
      {
        shuffledOptions: ["모자", "바지", "물", "행성", "창문"],
        answer: "행성",
      },
    ],
  };

  // 통신 연결 시 주석 해제
  useEffect(() => {
    if (data?.quizzes?.questions?.length > 0) {
      const currentQuestion = data.quizzes.questions[currentQuizNum - 1];
      setAnswerOptions(currentQuestion.shuffledOptions);
    }

    // 통신 연결 시 삭제
    // setCurrentQuiz(dummyData.questions[currentQuizNum - 1]);
    // setAnswerOptions(dummyData.questions[currentQuizNum - 1].shuffledOptions);
    // console.log(answerOptions);
  }, [data, currentQuizNum]);

  // 정답확인버튼을 눌렀을 때
  const handleCheckAnswer = () => {
    //const currentQuestion = dummyData.questions[currentQuizNum - 1];
    const selectedAnswer = answerOptions[selectedIdx];
    const result = selectedAnswer === currentQuiz.answer;

    if (result) setCorrectNum((prev) => prev + 1);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    const isLast = currentQuizNum >= dummyData.questions.length;

    if (isLast) {
      navigate(`/quiz/${graphId}/result`, {
        state: {
          total: dummyData.questions.length,
          correct: correctNum,
          mode: modeName,
        },
      });
    } else {
      setCurrentQuizNum((prev) => prev + 1);
    }
  };

  const handleOptionClick = (idx) => {
    setSelectedIdx(idx);
  };

  return (
    <Q.QnaModeLayout>
      <Q.QnaQuestionContainer $height="100%">
        <Q.QuestionText>다음 그림과 가장 관련이 있는 문장은?</Q.QuestionText>
        <Q.PictureImg src={currentQuiz.image} />
        <Q.ConfirmButton onClick={handleCheckAnswer}>정답 확인</Q.ConfirmButton>
        <Q.QuizCount>{currentQuizNum} / 5</Q.QuizCount>
      </Q.QnaQuestionContainer>
      <Q.QnaBottomContainer>
        <AnswerOptionList
          options={answerOptions}
          selectedIdx={selectedIdx}
          onClick={handleOptionClick}
        />
      </Q.QnaBottomContainer>
      {isOpen && <Modal onClose={handleCloseModal} />}
    </Q.QnaModeLayout>
  );
}
