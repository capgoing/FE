import React, { useEffect, useState, useRef } from "react";
import * as G from "../../../styles/graph/graph";
import usePost from "../../../hooks/usePost";
import CHATBOT from "../../../assets/images/graph/chatbot.png";
import CLOSE from "../../../assets/images/header/close.png";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Chatbot({ setIsClickChatbotBtn, isVisible }) {
  const { id } = useParams();
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("default");
  const [isComposing, setIsComposing] = useState(false);
  const loadingText = "답변 생성 중이에요..";
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState(() => {
    const savedMessages = sessionStorage.getItem(`chatbot_graph_${id}`);
    return savedMessages
      ? JSON.parse(savedMessages)
      : [{ from: "bot", text: "안녕하세요! 궁금한 게 있으신가요?" }];
  });

  const url = mode === "default" ? `/chatbot/${id}` : `/chatbot/${id}?mode=${mode}`;
  const { post, loading, error } = usePost(url);
  const { post: postOriginal } = usePost(`/chatbot/${id}/original`);
  const { post: postSummary } = usePost(`/chatbot/${id}/summary`);
  
  useEffect(() => {
    sessionStorage.setItem(`chatbot_graph_${id}`, JSON.stringify(messages));
  }, [messages, id]);

  const handleCloseClick = () => {
    setIsClickChatbotBtn(false);
  };

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
  }, [messages]);

  return (
    <G.ChatbotLayout isVisible={isVisible}>
      <G.ChatbotContainer>
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

        <G.ChatContent>
          {messages.map((msg, i) => (
            <G.ChatBox key={i} from={msg.from}>
               {console.log("msg.mode:", msg.mode)}
    {console.log("msg.text:", msg.text)}

<ReactMarkdown
  rehypePlugins={[rehypeRaw]}
  components={{
    p: (props) => <G.MarkdownP {...props} />,
    ul: (props) => <G.MarkdownUL {...props} />,
    li: (props) => <G.MarkdownLI {...props} />,
    h1: (props) => <G.MarkdownH1 {...props} />,
    h2: (props) => <G.MarkdownH2 {...props} />,
    h3: (props) => <G.MarkdownH3 {...props} />,
    details: (props) => <G.MarkdownDetails {...props} />,
    summary: (props) => <G.MarkdownSummary {...props} />,
  }}
>
  {msg.text}
</ReactMarkdown>

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

       <G.ChatControlGroup>
        <G.ChatControlItem>
          <G.ChatModeSelector>
            <label htmlFor="mode">모드</label>
            <select id="mode" value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="default">기본</option>
              <option value="rag">RAG 응답</option>
              {/* <option value="cartoon">4컷 만화</option> */}
              {/* <option value="video">교육 영상</option> */}
            </select> 
          </G.ChatModeSelector>
        </G.ChatControlItem>
        <G.ChatControlItem>
          <G.ChatActionButtons>
            <button onClick={async () => {
              const result = await postOriginal({});
              const reply = result.data?.chatContent || "원문 불러오기 실패";
              setMessages((prev) => [...prev, {
                from: "bot",
                text: reply,
                mode: mode, // 모드 추가
              }]);
            }}>원문 보기</button>

            <button onClick={async () => {
              const result = await postSummary({});
              const reply = result.data?.chatContent || "요약 불러오기 실패";
              setMessages(prev => [...prev, { from: "bot", text: reply }]);
            }}>요약 보기</button>
          </G.ChatActionButtons>
        </G.ChatControlItem>
      </G.ChatControlGroup>

        <G.ChatInputContainer>
          <G.ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isComposing && !loading) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          ></G.ChatInput>
          <G.ChatSubmitButton onClick={handleSubmit} disabled={loading}>
            전송
          </G.ChatSubmitButton>
        </G.ChatInputContainer>
        
      </G.ChatbotContainer>
    </G.ChatbotLayout>
  );
}
