import * as Q from "../../../styles/quiz/quiz";
import { useNavigate, useParams } from "react-router-dom";
import { useTTS } from "../../../contexts/TTSContext.jsx";
const ItemQuiz = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setShouldSpeak } = useTTS();

  const handleItemClick = () => {
    if (data.mode === "listenUp") {
      localStorage.setItem("shouldSpeak", "true");
      setShouldSpeak(true); // 클릭 감지!
    }
    navigate(`/quiz/${data.id}/${data.mode}`);
  };

  return (
    <Q.ItemQuizContainer onClick={handleItemClick}>
      <Q.ItemQuizP>{data.title}</Q.ItemQuizP>
      <Q.ItemQuizP2>
        {data.subTitle.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </Q.ItemQuizP2>

      <Q.ImageContainer>
        <Q.ItemQuizImg src={data.image} alt="image" />

        {data.image2 && <Q.ItemQuizImg2 src={data.image2} alt="image2" />}
      </Q.ImageContainer>
    </Q.ItemQuizContainer>
  );
};

export default ItemQuiz;
