import * as G from "../../styles/game/game";
import { useNavigate } from "react-router-dom";

const Game = () => {
    const navigate = useNavigate();

    const handleQnaClick = () => {
        navigate("/game/qna");
    }

    return (
        <div className="pageContainer">
            <G.GameContainer>
                <G.GameP>난이도 선택</G.GameP>
                <G.ButtonContainer>
                    <G.StageButton onClick={handleQnaClick}>쉬움</G.StageButton>
                    <G.StageButton onClick={handleQnaClick}>어려움</G.StageButton>
                </G.ButtonContainer>
            </G.GameContainer>
        </div>
    )
}

export default Game;