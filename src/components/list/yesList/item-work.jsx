import { useNavigate } from "react-router-dom";
import * as s from "../../../styles/list/list";
import colors from "../../../styles/common/colors";
import Delete from "../../../assets/images/list/delete.png";
import useDelete from "../../../hooks/useDelete";

const ItemWork = ({ id, name }) => {
    const navigate = useNavigate();
    const { remove, loading } = useDelete();

    const handleGraphClick = () => {
        navigate(`/graph/${id}`);
    }

    const handleQuizClick = () => {
        navigate(`/quiz/${id}`);
    }

    const handleDelete = async () => {
        try {
          const response = await remove(`/posts/${id}`);
          alert("삭제가 완료되었습니다.")
        } catch (err) {
          console.error("삭제 실패", err);
        }
    };

    return (
        <s.ItemContainer id={id}>
           <s.InnerItemContainer>
                <s.TopContainer>
                    <div className="quizContainer">
                        <s.QuizP>쉬움 만점!</s.QuizP>
                        <s.QuizP style={{color: colors.red}}>어려움 만점!</s.QuizP>
                    </div>
                    <s.DeleteButton onClick={handleDelete}><s.DeleteImg src={Delete} alt="delete"/></s.DeleteButton>
                </s.TopContainer>
                <s.BottomContainer>
                    <s.BottomButton onClick={handleGraphClick}>지식 그래프</s.BottomButton>
                    <s.BottomButton onClick={handleQuizClick}>퀴즈</s.BottomButton>
                </s.BottomContainer>
            </s.InnerItemContainer>

            <s.ItemP>{name}</s.ItemP>
        </s.ItemContainer>
    )
}

export default ItemWork;