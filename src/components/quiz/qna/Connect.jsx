import React from "react";
import { useState, useEffect, useRef } from "react";
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
import {
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceLink,
  forceCollide,
} from "d3-force";
import GraphNode from "../../graph/graphNode";

const nodeTypes = {
  custom: GraphNode,
};

export default function Connect() {
  const navigate = useNavigate();
  // 모달 상태 및 퀴즈 상태 관리
  const [isOpen, setIsOpen] = useState(false);
  const [correctNum, setCorrectNum] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState("");
  // 현재 문제 번호 및 정답 수 관리
  const [currentQuizNum, setCurrentQuizNum] = useState(1);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const { id: graphId, mode: modeName } = useParams(); // 그래프 id값 가져오기
  const { post, loading, error } = usePost(`/quiz/${graphId}?mode=${modeName}`); // 퀴즈 api 불러오기
  const [data, setData] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const graphRef = useRef(null); // 그래프 참조

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

  // 노드 처리
  const processedNodes = useMemo(() => {
    if (!knowledgeGraph) return [];
    const questionTargetId = quizList[currentQuizNum - 1]?.questionTargetId; // ? 노드 아이디
    return knowledgeGraph.nodes.map((node) => ({
      ...node,
      label: node.id === questionTargetId ? "?" : node.label, // 문제 노드 아이디와 일치하면 ? 표시
    }));
  }, [knowledgeGraph, quizList, currentQuizNum]);

  useEffect(() => {
    console.log("processedNodes", processedNodes);
  }, [processedNodes]);

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

  useEffect(() => {
    if (!knowledgeGraph) return;

    const questionTargetId = quizList[currentQuizNum - 1]?.questionTargetId;

    // 그래프 영역 크기 계산
    const rect = graphRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // 시뮬레이션용 노드/링크 구성
    const simNodes = knowledgeGraph.nodes.map((node) => ({
      ...node,
      label: node.id === questionTargetId ? "?" : node.label,
    }));

    // 링크 목록 생성
    const simLinks = knowledgeGraph.edges.map((edge) => ({
      source: edge.source,
      target: edge.target,
    }));

    // 연결된 노드 ID들 모으기
    /*     const connectedNodeIds = new Set();
    knowledgeGraph.edges.forEach((edge) => {
      if (edge.source === questionTargetId) connectedNodeIds.add(edge.target);
      if (edge.target === questionTargetId) connectedNodeIds.add(edge.source);
    });
    connectedNodeIds.add(questionTargetId);

    // 노드 먼저 필터링
    const simNodes = knowledgeGraph.nodes
      .filter((node) => connectedNodeIds.has(node.id))
      .map((node) => ({
        ...node,
        label: node.id === questionTargetId ? "?" : node.label,
      }));

    // 노드 기준으로 다시 엣지 필터링
    const nodeIdSet = new Set(simNodes.map((n) => n.id));

    const simLinks = knowledgeGraph.edges.filter(
      (edge) => nodeIdSet.has(edge.source) && nodeIdSet.has(edge.target)
    ); */

    const simulation = forceSimulation(simNodes)
      .force("charge", forceManyBody().strength(-430)) // 서로 밀어냄
      .force("center", forceCenter(centerX, centerY)) // 중앙 기준
      .force(
        "link",
        forceLink(simLinks)
          .id((d) => d.id)
          .distance((link) => {
            const source = simNodes.find((n) => n.id === link.source);
            const target = simNodes.find((n) => n.id === link.target);
            const levelGap = Math.abs(
              (source?.level ?? 1) - (target?.level ?? 1)
            );
            return 430 + levelGap * 200;
          })
      )
      .force(
        "collide",
        forceCollide().radius((d) => {
          const style = levelStyles[d.level] || levelStyles[1];
          const size = parseFloat(style.size) || 80;
          return size / 2 + 50; // 노드 간 간격 확보
        })
      )
      .stop();

    const root = simNodes.find((n) => n.level === 0);
    if (root) {
      root.fx = centerX;
      root.fy = centerY;
    }

    for (let i = 0; i < 300; ++i) simulation.tick();

    // 노드 스타일링
    const styledNodes = simNodes.map((node) => {
      const levelStyle = levelStyles[node.level] || levelStyles[1];
      const groupStyle = groupStyles[node.group] || {};
      const backgroundColor = colors[groupStyle.background] || levelStyle.color;

      const isQuestionNode = node.label === "?"; // 문제 노드 아이디와 일치하는 '?' 노드를 확인한다

      return {
        id: node.id,
        type: "custom",
        data: {
          label: node.label,
          level: node.level,
          group: node.group,
        },
        position: { x: node.x, y: node.y },
        style: {
          width: levelStyle.size,
          height: levelStyle.size,
          background: backgroundColor,
          color: isQuestionNode ? "#ff0000" : groupStyle.color || "#333", // ? 노드는 빨간색
          borderRadius: "50%",
          border: isQuestionNode ? "3px dashed #ff0000" : "2px solid #f89d36",
          fontWeight: isQuestionNode ? 900 : "bold", // ? 노드는 ultra-bold
          fontSize: isQuestionNode ? 35 : 20, // ? 노드는 더 크게
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Ownglyph_meetme-Rg",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#f89d36",
        },
      };
    });

    // 엣지 스타일링
    const styledEdges = knowledgeGraph.edges.map((edge) => ({
      id: `e${edge.source}-${edge.target}`,
      source: edge.source,
      target: edge.target,
      label: edge.label,
      type: "straight",
      style: {
        stroke: "#f89d36",
        strokeWidth: 2,
      },
      labelStyle: {
        fontWeight: 600,
        fontSize: 12,
        fill: "#333",
        padding: 4,
      },
      labelBgStyle: {
        fill: "#fff8d6",
        stroke: "#f89d36",
        strokeWidth: 0.5,
        rx: 4,
        ry: 4,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#f89d36",
      },
    }));

    setNodes(styledNodes);
    setEdges(styledEdges);
  }, [knowledgeGraph, currentQuizNum]);

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
                다음 <span style={{ color: "#ff0000" }}>?</span> 과 가장 관련이
                있는 단어는?
              </Q.QuestionText>
              <Q.GraphContainer ref={graphRef}>
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
