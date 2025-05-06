import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as Q from "../../../styles/quiz/quiz.jsx";
import Modal from "../modal/modal.jsx";
import LISTENUP from "../../../assets/images/quiz/listenup.svg";
import AnswerOptionList from "./AnswerOptionList.jsx";
import { speak, stop } from "../../../utils/tts.jsx";
import usePost from "../../../hooks/usePost.jsx";
import usePatch from "../../../hooks/usePatch.jsx";
import Loading from "./Loading.jsx";
import { useTTS } from "../../../contexts/TTSContext.jsx";

export default function ListenUp() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [currentQuizNum, setCurrentQuizNum] = useState(1);
  const [correctNum, setCorrectNum] = useState(0);

  // 드래그앤드롭 상태변수들
  const [dragList, setDragList] = useState([]); // 드래그 가능한 단어들
  const [droppedList, setDroppedList] = useState([]); // 드롭된 정답 슬롯
  const dragItemRef = useRef(null); // 현재 드래그 중인 단어 인덱스
  const [hiddenIndices, setHiddenIndices] = useState([]);

  const { id: graphId, mode: modeName } = useParams(); // 그래프 id값 가져오기
  const { post, loading, error } = usePost(`/quiz/${graphId}?mode=${modeName}`); // 퀴즈 api 불러오기
  const { patch } = usePatch();
  const [data, setData] = useState(null);

  //const { shouldSpeak, setShouldSpeak } = useTTS();

  // ✅ 더미 데이터
  /*   const dummyData = {
    questions: [
      {
        shuffled: ["개를", "좋아한다", "나는", "정말"],
        answer: ["나는", "개를", "정말", "좋아한다"],
      },
      {
        shuffled: ["강아지를", "보면", "웃는", "사람이", "많다"],
        answer: ["사람이", "강아지를", "보면", "웃는", "많다"],
      },
    ],
  }; */

  // 통신 연결 시 주석 해제
  useEffect(() => {
    // graphId, modeName이 있을 때만 요청
    if (graphId && modeName) {
      post().then(setData).catch(console.error);
    }
  }, [graphId, modeName]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const quizList = data?.data?.quizzes?.quizzes || [];
  useEffect(() => {
    if (quizList.length > 0) {
      // 문제 받아오면 초기화
      const currentQuestion = quizList[currentQuizNum - 1];
      setDragList(currentQuestion.shuffled);
      setDroppedList(Array(currentQuestion.answer.length).fill("")); // 빈칸 초기화
    }
  }, [data, currentQuizNum]);

  /*  useEffect(() => {
    const currentQuestion = dummyData.questions[currentQuizNum - 1];
    console.log(currentQuestion);

    setDragList(currentQuestion.shuffled);
    setDroppedList(Array(currentQuestion.answer.length).fill(""));
  }, [currentQuizNum]); */

  const handleDragStart = (index) => {
    dragItemRef.current = index;
  };

  const handleDrop = (dropIndex) => {
    //const draggedIndex = dragItemRef.current;

    const dragged = dragList[dragItemRef.current];
    if (!dragged) return;

    setDroppedList((prev) => {
      const newList = [...prev];
      if (newList[dropIndex] === "") {
        newList[dropIndex] = dragged;
        setDragList((prevList) => prevList.filter((word) => word !== dragged));
      }
      return newList;
    });

    // 드래그 참조값 초기화
    dragItemRef.current = null;
  };

  const handleSlotClick = (index) => {
    const removed = droppedList[index]; // 클릭한 단어 저장
    if (removed === "") return; // 빈칸 클릭 방지

    setDroppedList((prev) => {
      const newList = [...prev];
      newList[index] = ""; // 빈 문자열로 변경
      return newList;
    });

    setDragList((prev) => [...prev, removed]);
  };

  // 정답확인버튼을 눌렀을 때
  const handleCheckAnswer = () => {
    const currentAnswer = quizList[currentQuizNum - 1].answer.join("");
    const userAnswer = droppedList.join("");
    const result = currentAnswer === userAnswer;
    if (result) setCorrectNum((prev) => prev + 1);
    setIsOpen(true);
  };

  const handleCloseModal = async () => {
    setIsOpen(false);
    const total = data.data.quizzes.quizzes.length;
    const isLast = currentQuizNum >= total;
    const isPerfect = correctNum === total;

    if (isLast) {
      if (isPerfect) {
        try {
          const result = await patch(
            `/quiz/perfect-score/${graphId}?mode=${modeName}`
          );
          console.log("Perfect score patch success" + result);
        } catch (e) {
          console.error("Perfect score patch error:", e);
        }
      }
      navigate(`/quiz/${graphId}/result`, {
        state: {
          total,
          correct: correctNum,
          mode: modeName,
        },
      });
    } else {
      setCurrentQuizNum((prev) => prev + 1);
    }
  };

  // tts
  const handleSound = useCallback(() => {
    const currentAnswerArray = quizList[currentQuizNum - 1]?.answer;
    if (!currentAnswerArray) return;
    const sentence = currentAnswerArray.join(" ");
    speak(sentence);
  }, [quizList, currentQuizNum]);

  // 처음 렌더링(문제 데이터가 준비된 직후)에도 자동 실행
  useEffect(() => {
    // const shouldSpeak = localStorage.getItem("shouldSpeak") === "true";
    if (
      // shouldSpeak &&
      quizList.length > 0 &&
      quizList[currentQuizNum - 1] &&
      Array.isArray(quizList[currentQuizNum - 1].answer)
    ) {
      handleSound();
      //setShouldSpeak(false); // 플래그 초기화
    }
    // eslint-disable-next-line
  }, [quizList, currentQuizNum]);

  return (
    <Q.QnaModeLayout>
      {loading ? (
        <Q.LoadingContainer>
          <Loading />
        </Q.LoadingContainer>
      ) : (
        <>
          <Q.QnaQuestionContainer>
            <Q.QuestionText>들은 순서대로 문장을 선택해보세요!</Q.QuestionText>
            <Q.ListenupImg src={LISTENUP} />
            <Q.ListenAgainButton onClick={handleSound}>
              다시 듣기
            </Q.ListenAgainButton>
            <Q.ConfirmButton onClick={handleCheckAnswer}>
              정답 확인
            </Q.ConfirmButton>
            <Q.QuizCount>{currentQuizNum} / 5</Q.QuizCount>
          </Q.QnaQuestionContainer>

          {/* answer 문자열값 텍스트 길이에 맞게 늘어나도록 스타일 조정 필요 */}
          <Q.DropItemContainer>
            {droppedList.map((word, idx) => (
              <Q.DropItem
                key={idx}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(idx)}
                onClick={() => handleSlotClick(idx)}
              >
                {word}
              </Q.DropItem>
            ))}
          </Q.DropItemContainer>
          <Q.QnaBottomContainer>
            <AnswerOptionList
              options={dragList}
              isDraggable={true}
              onDragStart={handleDragStart}
            />
          </Q.QnaBottomContainer>
          {isOpen && <Modal onClose={handleCloseModal} />}
        </>
      )}
    </Q.QnaModeLayout>
  );
}
