import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as Q from "../../../styles/quiz/quiz.jsx";
import AnswerOptionList from "./AnswerOptionList.jsx";
import Modal from "../modal/modal.jsx";
import usePost from "../../../hooks/usePost.jsx";
import ReactFlow, {
  Background,
  ReactFlowProvider,
  MarkerType,
  getStraightPath,
} from "reactflow";
import "reactflow/dist/style.css";
import { useMemo } from "react";
import { levelStyles, groupStyles } from "../../../mocks/graphData";
import Loading from "./Loading.jsx";
import colors from "../../../styles/common/colors";

export default function Connect() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [currentQuizNum, setCurrentQuizNum] = useState(1);
  const [correctNum, setCorrectNum] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const [answerOptions, setAnswerOptions] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const { id: graphId, mode: modeName } = useParams(); // 그래프 id값 가져오기
  const { post, loading, error } = usePost(`/quiz/${graphId}?mode=${modeName}`); // 퀴즈 api 불러오기
  const [data, setData] = useState(null);
  // const [nodes, setNodes] = useState([]);
  // const [edges, setEdges] = useState([]);

  useEffect(() => {
    // graphId, modeName이 있을 때만 요청
    if (graphId && modeName) {
      post().then(setData).catch(console.error);
    }
  }, [graphId, modeName]);

  useEffect(() => {
    console.log(data);
    console.log(data?.data?.quizzes?.knowledgeGraph.nodes);
  }, [data]);

  const quizList = data?.data?.quizzes?.quizList || [];
  const knowledgeGraph = data?.data?.quizzes?.knowledgeGraph;
  //const questionTargetId = quizList[currentQuizNum - 1]?.questionTargetId;

  const processedNodes = useMemo(() => {
    if (!knowledgeGraph) return [];
    const questionTargetId = quizList[currentQuizNum - 1]?.questionTargetId;
    return knowledgeGraph.nodes.map((node) => ({
      ...node,
      label: node.id === questionTargetId ? "?" : node.label,
    }));
  }, [knowledgeGraph, quizList, currentQuizNum]); // ← currentQuizNum 포함

  // 통신 연결 시 주석 해제
  useEffect(() => {
    if (quizList.length > 0) {
      const currentQuestion = quizList[currentQuizNum - 1];
      setAnswerOptions(currentQuestion.shuffledOptions);
      setSelectedIdx(null); // 문제가 바뀔 때마다 선택 초기화
    }
  }, [data, currentQuizNum]);

  // 정답확인버튼을 눌렀을 때
  const handleCheckAnswer = () => {
    const currentQuestion = quizList[currentQuizNum - 1];
    const selectedAnswer = answerOptions[selectedIdx];
    const result = selectedAnswer === currentQuestion.answer;
    setIsCorrect(result);
    setCorrectAnswer(currentQuestion.answer);
    if (result) setCorrectNum((prev) => prev + 1);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedIdx(null);
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

  const nodes = useMemo(() => {
    if (!knowledgeGraph) return [];

    // 레벨별로 노드 분리
    const rootNodes = processedNodes.filter((n) => n.level === 0);
    const level1Nodes = processedNodes.filter((n) => n.level === 1);
    const level2Nodes = processedNodes.filter((n) => n.level === 2);

    // 중심 좌표
    const centerX = 600;
    const centerY = 350;

    // 루트(레벨 0) 노드: 중앙에 배치
    const rootNodePositions = rootNodes.map((node, i) => ({
      ...node,
      x: centerX,
      y: centerY,
    }));

    // 레벨 1: 루트 주변 원형 배치
    const radius1 = 200;
    const angleStep1 = (2 * Math.PI) / level1Nodes.length;
    const level1NodePositions = level1Nodes.map((node, i) => ({
      ...node,
      x: centerX + radius1 * Math.cos(i * angleStep1),
      y: centerY + radius1 * Math.sin(i * angleStep1),
    }));

    // 레벨 2: 레벨 1 주변 원형 배치 (각 레벨1 노드 기준)
    const radius2 = 120;
    let level2NodePositions = [];
    level1Nodes.forEach((parentNode, parentIdx) => {
      const children = level2Nodes.filter((n) =>
        knowledgeGraph.edges.some(
          (e) => e.source === parentNode.id && e.target === n.id
        )
      );
      const angleStep2 = Math.PI / (children.length + 1);
      children.forEach((child, childIdx) => {
        level2NodePositions.push({
          ...child,
          x:
            level1NodePositions[parentIdx].x +
            radius2 * Math.cos(Math.PI + (childIdx + 1) * angleStep2),
          y:
            level1NodePositions[parentIdx].y +
            radius2 * Math.sin(Math.PI + (childIdx + 1) * angleStep2),
        });
      });
    });

    // 중복된 레벨2 노드 제거(여러 부모를 가질 수 있으므로)
    const uniqueLevel2 = [];
    const seen = new Set();
    for (const n of level2NodePositions) {
      if (!seen.has(n.id)) {
        uniqueLevel2.push(n);
        seen.add(n.id);
      }
    }
    const level3Nodes = processedNodes.filter((n) => n.level === 3);
    const level3NodePositions = level3Nodes.map((node, i) => ({
      ...node,
      x: centerX + i * 120 - 100, // 단순 가로 나열 예시
      y: centerY + 300,
    }));

    // 모든 노드 합치기
    const allNodes = [
      ...rootNodePositions,
      ...level1NodePositions,
      ...uniqueLevel2,
      ...level3NodePositions,
    ];

    // 스타일 적용
    return allNodes.map((node) => {
      const levelStyle = levelStyles[node.level] || levelStyles[1];
      const groupStyle = groupStyles[node.group] || {};
      const backgroundColor = colors[groupStyle.background] || levelStyle.color;
      const labelColor = "#fff8d6";

      return {
        id: node.id,
        type: "straight",
        data: { label: node.label },
        position: { x: node.x, y: node.y },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#f89d36",
        },
        style: {
          width: levelStyle.size,
          height: levelStyle.size,
          stroke: "#f89d36",
          background: backgroundColor,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: 16,
          color: groupStyle.color || "#333",
          border: "2px solid #888",
        },
      };
    });
  }, [processedNodes]);

  const edges = useMemo(
    () =>
      knowledgeGraph
        ? knowledgeGraph.edges.map((edge) => ({
            id: `e${edge.source}-${edge.target}`,
            source: edge.source,
            target: edge.target,
            label: edge.label,
            type: "straight",
            animated: false,
            style: {
              stroke: "#f89d36",
              strokeWidth: 2,
            },
            labelBgStyle: {
              fill: "#fff8d6",
              fillOpacity: 1,
              stroke: "#f89d36",
              strokeWidth: 0.5,
              rx: 4,
              ry: 4,
            },
            labelStyle: {
              fontWeight: 600,
              fontSize: 12,
              fill: "#333", // 텍스트 색
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: "#f89d36",
            },
          }))
        : [],
    [knowledgeGraph]
  );

  return (
    <Q.QnaModeLayout>
      {loading ? (
        <Q.LoadingContainer>
          <Loading />
        </Q.LoadingContainer>
      ) : (
        <ReactFlowProvider>
          <>
            <Q.QnaQuestionContainer $height="100%">
              <Q.QuestionText>
                다음 ? 과 가장 관련이 있는 단어는?
              </Q.QuestionText>
              <Q.GraphContainer>
                <ReactFlow
                  key={currentQuizNum}
                  nodes={nodes || []}
                  edges={edges || []}
                  fitView
                  zoomOnScroll={false}
                  panOnScroll={false}
                  zoomOnDoubleClick={false}
                  panOnDrag={false}
                  nodesDraggable={false}
                  nodesConnectable={false}
                  elementsSelectable={false}
                >
                  <Background />
                </ReactFlow>
              </Q.GraphContainer>
              <Q.ConfirmButton onClick={handleCheckAnswer}>
                정답 확인
              </Q.ConfirmButton>
              <Q.QuizCount>
                {currentQuizNum} / {quizList.length}
              </Q.QuizCount>
            </Q.QnaQuestionContainer>
            <Q.QnaBottomContainer>
              <AnswerOptionList
                options={answerOptions}
                selectedIdx={selectedIdx}
                onClick={handleOptionClick}
              />
            </Q.QnaBottomContainer>
            {isOpen && (
              <Modal
                onClose={handleCloseModal}
                isCorrect={isCorrect}
                correctAnswer={correctAnswer}
              />
            )}
          </>
        </ReactFlowProvider>
      )}
    </Q.QnaModeLayout>
  );
}
