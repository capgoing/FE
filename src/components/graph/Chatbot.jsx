import React from "react";
import * as G from "../../styles/graph/graph";

// images
import CHATBOT from "../../assets/images/graph/chatbot.png";
import CLOSE from "../../assets/images/header/close.png";

export default function Chatbot({ setIsClickChatbotBtn }) {
  const handleCloseClick = () => {
    setIsClickChatbotBtn(false);
  };
  return (
    <G.ChatbotLayout>
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
        <G.ChatContent></G.ChatContent>
        <G.ChatInputContainer>
          <G.ChatInput></G.ChatInput>
          <G.ChatSubmitButton>전송</G.ChatSubmitButton>
        </G.ChatInputContainer>
      </G.ChattingContainer>
    </G.ChatbotLayout>
  );
}
