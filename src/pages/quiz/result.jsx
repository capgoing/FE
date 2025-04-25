import * as L from "../../styles/list/list";
import * as Q from "../../styles/quiz/quiz";
import colors from "../../styles/common/colors";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  // 받은 점수 정보
  const { total = 0, correct = 0, mode } = location.state || {};

  console.log("mode: " + mode);
  const handleQuizClick = () => {
    navigate(`/quiz/${id}/${mode}`);
  };

  const handleGraphClick = () => {
    navigate(`/graph/${id}`);
  };

  const handleTypeClick = () => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="pageContainer">
      <L.ListContainer>
        <Q.ResultContainer>
          <Q.InnerResultContainer>
            <Q.ResultP>정답 개수</Q.ResultP>
            <Q.ResultP style={{ fontSize: "2vw" }}>
              {correct}개 맞췄어요
              <br />
              {correct < total ? "다시 한번 도전해 볼까요?" : "대단해요 👍"}
            </Q.ResultP>
          </Q.InnerResultContainer>
        </Q.ResultContainer>

        <Q.ResultButtonContainer>
          <Q.ResultButton onClick={handleQuizClick}>
            다시 풀러가기
          </Q.ResultButton>
          <Q.ResultButton
            onClick={handleTypeClick}
            style={{ background: colors.orange2, color: colors.white }}
          >
            퀴즈 유형 <br />
            다시 선택하기
          </Q.ResultButton>
        </Q.ResultButtonContainer>
      </L.ListContainer>
    </div>
  );
};

export default Result;
