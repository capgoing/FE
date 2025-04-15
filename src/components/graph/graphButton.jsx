import * as G from "../../styles/graph/graph";
import Quiz from "../../assets/images/graph/quiz.png";
import ChatBot from "../../assets/images/graph/chatbot.png";
import { useNavigate, useParams } from "react-router-dom";

const GraphButton = ({ setIsClickChatbotBtn }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleQuizClick = () => {
    navigate(`/quiz/${id}`);
  };

  const handleChatbotClick = () => {
    setIsClickChatbotBtn(true);
  };

  return (
    <G.GraphButtonContainer>
      <G.CommonButton onClick={handleQuizClick}>
        <G.CommonButtonImg src={Quiz} alt="quiz" />
        <G.CommonP>
          게임하러
          <br />
          가기
        </G.CommonP>
      </G.CommonButton>
      <G.CommonButton onClick={handleChatbotClick}>
        <G.CommonButtonImg
          style={{ width: "2.5vw", height: "2.3vw" }}
          src={ChatBot}
          alt="chatBot"
        />
        <G.CommonP>
          챗봇
          <br />
          사용하기
        </G.CommonP>
      </G.CommonButton>
    </G.GraphButtonContainer>
  );
};

export default GraphButton;
