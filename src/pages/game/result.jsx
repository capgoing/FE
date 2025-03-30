import * as L from "../../styles/list/list";
import * as G from "../../styles/game/game";
import colors from "../../styles/common/colors";
import { useNavigate } from "react-router-dom";

const Result = () => {
    const navigate = useNavigate();

    const handleGameClick = () => {
        navigate("/game");
    }

    const handleGraphClick = () => {
        navigate("/graph/1");
    }

    return (
        <div className="pageContainer">
            <L.ListContainer>
                <G.ResultContainer>
                    <G.InnerResultContainer>
                        <G.ResultP>정답 개수</G.ResultP>
                        <G.ResultP style={{fontSize: "2vw"}}>
                            3개 맞췄어요<br/>
                            다시 한번 도전해 볼까요?
                        </G.ResultP>
                    </G.InnerResultContainer>
                </G.ResultContainer>

                <G.ResultButtonContainer>
                    <G.ResultButton onClick={handleGameClick}>다시 풀러가기</G.ResultButton>
                    <G.ResultButton onClick={handleGraphClick} style={{background: colors.orange2, color: colors.white}}>그래프 보러가기</G.ResultButton>
                </G.ResultButtonContainer>
            </L.ListContainer>
        </div>
    )
}

export default Result;