import * as Q from "../../../styles/quiz/quiz";
import { useNavigate, useParams } from "react-router-dom";

const ItemQuiz = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/quiz/${id}/${data.mode}`);
  };

  return (
    <Q.ItemQuizContainer onClick={handleItemClick}>
      <Q.ItemQuizP>{data.title}</Q.ItemQuizP>
      <Q.ItemQuizP2>
        {data.subTitle.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
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
