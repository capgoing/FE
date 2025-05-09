import React, { useEffect, useState, useRef } from "react";
import * as G from "../../../styles/graph/graph";
import usePost from "../../../hooks/usePost";
import CHATBOT from "../../../assets/images/graph/chatbot.png";
import CLOSE from "../../../assets/images/header/close.png";
import { useParams } from "react-router-dom";

export default function Chatbot({ setIsClickChatbotBtn, isVisible }) {
  const { id } = useParams();
  const [input, setInput] = useState(""); // 입력값
  const loadingText = "답변 생성 중이에요..";
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState(() => {
    const savedMessages = sessionStorage.getItem(`chatbot_graph_${id}`);
    return savedMessages
      ? JSON.parse(savedMessages)
      : [{ from: "bot", text: "안녕하세요! 궁금한 게 있으신가요?" }];
  }); // 대화 목록
  const { post, loading, error } = usePost(`/chatbot/${id}`);

  // 메시지가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    sessionStorage.setItem(`chatbot_graph_${id}`, JSON.stringify(messages));
  }, [messages, id]);

  // 챗봇 닫기
  const handleCloseClick = () => {
    setIsClickChatbotBtn(false);
  };

  // 챗봇 전송
  const handleSubmit = async () => {
    if (!input.trim() || loading) return;

    const userInput = input;
    setInput("");

    setMessages((prev) => [...prev, { from: "user", text: userInput }]);

    try {
      const result = await post({
        isNewChat: messages.length === 1,
        chatContent: userInput,
      });

      const reply = result.data?.chatContent || "응답 오류";
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { from: "bot", text: "에러 발생!" }]);
    }
  };

  // 챗봇 전송 후 하단으로 이동
  useEffect(() => {
    sessionStorage.setItem(`chatbot_graph_${id}`, JSON.stringify(messages));

    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, id]);

  return (
    <G.ChatbotLayout isVisible={isVisible}>
      <G.ChatbotHeader>
        <G.CommonButtonImg
          style={{ width: "2vw", height: "2vw" }}
          src={CHATBOT}
          alt="chatBot"
        />
        <G.CommonButtonImg
          style={{ width: "2vw", height: "2vw", cursor: "pointer" }}
          src={CLOSE}
          alt="close"
          onClick={handleCloseClick}
        />
      </G.ChatbotHeader>

      <G.ChattingContainer>
        <G.ChatContent>
          {messages.map((msg, i) => (
            <G.ChatBox key={i} from={msg.from}>
              <G.ChatP>{msg.text}</G.ChatP>
            </G.ChatBox>
          ))}
          {loading && (
            <G.ChatBox from="bot">
              <G.ChatLoadingP>
                {loadingText.split("").map((char, i) => (
                  <span key={i}>{char === " " ? "\u00A0" : char}</span>
                ))}
              </G.ChatLoadingP>
            </G.ChatBox>
          )}
          <div ref={bottomRef} />
        </G.ChatContent>
        <G.ChatInputContainer>
          <G.ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          ></G.ChatInput>
          <G.ChatSubmitButton onClick={handleSubmit} disabled={loading}>
            전송
          </G.ChatSubmitButton>
        </G.ChatInputContainer>
      </G.ChattingContainer>
    </G.ChatbotLayout>
  );
}
