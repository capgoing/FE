import * as L from "../../styles/list/list";
import * as Q from "../../styles/quiz/quiz";
import colors from "../../styles/common/colors";
import { useNavigate, useParams } from "react-router-dom";

const Result = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleQuizClick = () => {
        navigate(`/quiz/${id}`);
    }

    const handleGraphClick = () => {
        navigate(`/graph/${id}`);
    }

    return (
        <div className="pageContainer">
            <L.ListContainer>
            <Q.ResultContainer>
                    <Q.InnerResultContainer>
                        <Q.ResultP>정답 개수</Q.ResultP>
                        <Q.ResultP style={{fontSize: "2vw"}}>
                            3개 맞췄어요<br/>
                            다시 한번 도전해 볼까요?
                        </Q.ResultP>
                    </Q.InnerResultContainer>
                </Q.ResultContainer>

                <Q.ResultButtonContainer>
                    <Q.ResultButton onClick={handleQuizClick}>다시 풀러가기</Q.ResultButton>
                    <Q.ResultButton onClick={handleGraphClick} style={{background: colors.orange2, color: colors.white}}>그래프 보러가기</Q.ResultButton>
                </Q.ResultButtonContainer>
            </L.ListContainer>
        </div>
    )
}

export default Result;