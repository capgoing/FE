import React, { useEffect, useState } from "react";
import * as G from "../../../styles/graph/graph";

// images
import CHATBOT from "../../../assets/images/graph/chatbot.png";
import CLOSE from "../../../assets/images/header/close.png";

export default function Chatbot({ setIsClickChatbotBtn, isVisible }) {
  const [input, setInput] = useState(""); // 입력값
  const [messages, setMessages] = useState([]); // 대화 목록

  // 메세지 목록 더미 데이터 (통신시 삭제할 예정)
  useEffect(() => {
    setMessages([
      { from: "bot", text: "안녕하세요! 궁금한 걸 물어보세요 😊" },
      { from: "user", text: "태양은 어떤 역할을 해?" },
      { from: "bot", text: "태양은 지구에 빛과 열을 주는 별이에요!" },
      { from: "user", text: "태양은 어떤 역할을 해?" },
      { from: "bot", text: "태양은 지구에 빛과 열을 주는 별이에요!" },
      { from: "user", text: "태양은 어떤 역할을 해?" },
      { from: "bot", text: "태양은 지구에 빛과 열을 주는 별이에요!" },
      { from: "user", text: "태양은 어떤 역할을 해?" },
      { from: "bot", text: "태양은 지구에 빛과 열을 주는 별이에요!" },
      { from: "user", text: "태양은 어떤 역할을 해?" },
    ]);
  }, []);

  const handleCloseClick = () => {
    setIsClickChatbotBtn(false);
  };

  const handleSubmit = async () => {
    if (!input.trim()) return;

    // 사용자 메시지 추가
    setMessages((prev) => [...prev, { from: "user", text: input }]);

    try {
      const response = await fetch(`/chatbot/${graphId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isNewChat: messages.length === 0, // 첫 메시지면 true
          chatContent: input,
        }),
      });

      const result = await response.json();
      const reply = result.data?.chatContent || "응답 오류";

      // 챗봇 응답 추가
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { from: "bot", text: "에러 발생!" }]);
    }

    setInput(""); // 입력 초기화
  };

  return (
    <G.ChatbotLayout isVisible={isVisible}>
      <G.ChatbotHeader>
        <G.CommonButtonImg
          style={{ width: "2.5vw", height: "2.3vw" }}
          src={CHATBOT}
          alt="chatBot"
        />
        <G.CommonButtonImg
          style={{ width: "2.5vw", height: "2.3vw", cursor: "pointer" }}
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
        </G.ChatContent>
        <G.ChatInputContainer>
          <G.ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          ></G.ChatInput>
          <G.ChatSubmitButton onClick={handleSubmit}>전송</G.ChatSubmitButton>
        </G.ChatInputContainer>
      </G.ChattingContainer>
    </G.ChatbotLayout>
  );
}
