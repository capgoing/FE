import React from "react";
import { useState, useEffect, useRef } from "react";
import * as Q from "../../../../styles/quiz/quiz.jsx";
import Modal from "../../modal/modal.jsx";
import LISTENUP from "../../../../assets/images/quiz/listenup.svg";

export default function ListenUp() {
  const [isOpen, setIsOpen] = useState(false);

  const [currentQuizNum, setCurrentQuizNum] = useState(1);
  const [isCorrect, setIsCorrect] = useState(false);

  // 드래그앤드롭 상태변수들
  const [dragList, setDragList] = useState([]); // 드래그 가능한 단어들
  const [droppedList, setDroppedList] = useState([]); // 드롭된 정답 슬롯
  const dragItemRef = useRef(null); // 현재 드래그 중인 단어 인덱스
  const [hiddenIndices, setHiddenIndices] = useState([]);

  // ✅ 더미 데이터
  const dummyData = {
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
  };

  // 통신 연결 시 주석 해제
  // useEffect(() => {
  //   if (data && data?.questions?.length > 0) {
  //     // 문제 받아오면 초기화
  //     const currentQuestion = data.questions[currentQuizNum - 1];
  //     setDragList(currentQuestion.shuffled);
  //     setDroppedList(Array(currentQuestion.answer.length).fill("")); // 빈칸 초기화
  //   }
  // }, [data, currentQuizNum]);

  useEffect(() => {
    const currentQuestion = dummyData.questions[currentQuizNum - 1];
    console.log(currentQuestion);

    setDragList(currentQuestion.shuffled);
    setDroppedList(Array(currentQuestion.answer.length).fill(""));
  }, [currentQuizNum]);

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
    const currentAnswer =
      dummyData.questions[currentQuizNum - 1].answer.join("");
    const userAnswer = droppedList.join("");
    const result = currentAnswer === userAnswer;
    setIsCorrect(result);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    if (isCorrect) {
      setCurrentQuizNum((prev) => prev + 1); // 모달을 닫을 때 정답일 경우에만 다음 퀴즈로 이동
    }
  };

  return (
    <Q.QnaModeLayout>
      <Q.ListenUpQuestionContainer>
        <Q.QuestionText>들은 순서대로 문장을 선택해보세요!</Q.QuestionText>
        <Q.ListenupImg src={LISTENUP} />
        <Q.ListenAgainButton>다시 듣기</Q.ListenAgainButton>
        <Q.ConfirmButton onClick={handleCheckAnswer}>정답 확인</Q.ConfirmButton>
        <Q.QuizCount>{currentQuizNum} / 5</Q.QuizCount>
      </Q.ListenUpQuestionContainer>

      {/* answer 문자열값 텍스트 길이에 맞게 늘어나도록 스타일 조정 필요 */}
      {/* {data?.questions?.map((question, qIdx) => (
            <Q.DropItemContainer key={qIdx}>
              {question.answer.map((word, idx) => (
                <Q.DropItem
                  key={idx}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(i)}
                  onClick={() => handleSlotClick(i)}
                ></Q.DropItem>
              ))}
            </Q.DropItemContainer>
          ))} */}
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
        {/* {data?.questions?.map((question, qIdx) => (
                  <Q.DraaggableItemContainer key={qIdx}>
                    {question.shuffled.map((word, idx) => (
                      <Q.DraaggableItem
                        key={idx}
                        draggable
                        onDragStart={() => handleDragStart(i)}
                      >
                        {word}
                      </Q.DraaggableItem>
                    ))}
                  </Q.DraaggableItemContainer>
                ))} */}
        <Q.DraaggableItemContainer>
          {dragList.map((word, idx) =>
            word ? ( // 드래그된 후 제거된 항목은 undefined나 null이 될 수 있음
              <Q.DraaggableItem
                key={idx}
                draggable
                onDragStart={() => handleDragStart(idx)}
              >
                {word}
              </Q.DraaggableItem>
            ) : null
          )}
        </Q.DraaggableItemContainer>
      </Q.QnaBottomContainer>
      {isOpen && <Modal onClose={handleCloseModal} />}
    </Q.QnaModeLayout>
  );
}
