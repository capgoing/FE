import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as Q from "../../../styles/quiz/quiz.jsx";
import AnswerOptionList from "./AnswerOptionList.jsx";
import Modal from "../modal/modal.jsx";
import usePost from "../../../hooks/usePost.jsx";
import Loading from "./Loading.jsx";

export default function Picture() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [currentQuizNum, setCurrentQuizNum] = useState(1);
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [correctNum, setCorrectNum] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const [answerOptions, setAnswerOptions] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const { id: graphId, mode: modeName } = useParams(); // 그래프 id값 가져오기
  const { post, loading, error } = usePost(`/quiz/${graphId}?mode=${modeName}`); // 퀴즈 api 불러오기
  const [data, setData] = useState(null);
  // ✅ 더미 데이터
  const dummyData = {
    questions: [
      {
        image:
          "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/gDYF/image/E701VpFReM5ktHOyRKX3FE2mJ7U.jpg",
        shuffledOptions: [
          "고양이는 생선을 매우 좋아하는 동물로 자주 묘사됩니다",
          "초식동물이며 아프리카 사바나에서 주로 서식하고, 길고 튼튼한 다리로 천천히 이동하며, 천적을 피할 때는 매우 빠른 속도로 달릴 수 있습니다",
          "기린은 세계에서 가장 키가 큰 동물로, 길게 뻗은 목을 이용해 높은 나무의 잎을 먹습니다",
          "초식동물이며 아프리카 사바나에서 주로 서식하고, 길고 튼튼한 다리로 천천히 이동하며, 천적을 피할 때는 매우 빠른 속도로 달릴 수 있습니다",
          "기린은 세계에서 가장 키가 큰 동물로, 길게 뻗은 목을 이용해 높은 나무의 잎을 먹습니다",
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

  useEffect(() => {
    // graphId, modeName이 있을 때만 요청
    if (graphId && modeName) {
      //post().then(setData).catch(console.error);
    }
  }, [graphId, modeName]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const quizList = data?.data?.quizzes || null;

  // 통신 연결 시 주석 해제
  useEffect(() => {
    // if (quizList) {
    //   setAnswerOptions(quizList.shuffled);
    //   setCurrentQuiz(quizList);
    // }

    // 통신 연결 시 삭제
    setCurrentQuiz(dummyData.questions[currentQuizNum - 1]);
    setAnswerOptions(dummyData.questions[currentQuizNum - 1].shuffledOptions);
    console.log(answerOptions);
  }, [data, currentQuizNum]);

  // 정답확인버튼을 눌렀을 때
  const handleCheckAnswer = () => {
    //const currentQuestion = dummyData.questions[currentQuizNum - 1];
    const selectedAnswer = answerOptions[selectedIdx];
    const result = selectedAnswer === currentQuiz.answer;
    setIsCorrect(result);
    setCorrectAnswer(currentQuiz.answer);

    if (result) setCorrectNum((prev) => prev + 1);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    const isLast = currentQuizNum >= quizList.length;

    if (isLast) {
      navigate(`/quiz/${graphId}/result`, {
        state: {
          total: quizList.length,
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
      {loading ? (
        <Q.LoadingContainer>
          <Loading />
        </Q.LoadingContainer>
      ) : (
        <>
          <Q.QnaQuestionContainer $height="120%">
            <Q.QuestionText>
              다음 그림과 가장 관련이 있는 문장은?
            </Q.QuestionText>

            <Q.ConfirmButton onClick={handleCheckAnswer}>
              정답 확인
            </Q.ConfirmButton>
            <Q.QuizCount>{currentQuizNum} / 1</Q.QuizCount>
            <Q.PictureContainer>
              <Q.PictureImg src={currentQuiz.imageUrl} />
              <Q.QnaBottomContainer $mode={modeName}>
                <AnswerOptionList
                  options={answerOptions}
                  selectedIdx={selectedIdx}
                  onClick={handleOptionClick}
                  mode={modeName}
                />
              </Q.QnaBottomContainer>
            </Q.PictureContainer>
          </Q.QnaQuestionContainer>

          {isOpen && (
            <Modal
              onClose={handleCloseModal}
              isCorrect={isCorrect}
              correctAnswer={correctAnswer}
            />
          )}
        </>
      )}
    </Q.QnaModeLayout>
  );
}
