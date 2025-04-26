import { useNavigate } from "react-router-dom";
import * as s from "../../../styles/list/list";
import Delete from "../../../assets/images/list/delete.png";
import ListenUp from "../../../assets/images/list/listenUp.png";
import Connect from "../../../assets/images/list/connect.png";
import Picture from "../../../assets/images/list/picture.png";
import useDelete from "../../../hooks/useDelete";

const ItemWork = ({ id, name, listenUpPerfect, connectPerfect, picturePerfect }) => {
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
                    <s.ItemQuizContainer>
                        {listenUpPerfect && (
                            <s.QuizImg src={ListenUp} style={{ width: "2.8vw", height: "3.15vw" }} alt="ListenUpPerfect" />
                        )}
                        {connectPerfect && (
                            <s.QuizImg src={Connect} alt="ConnectPerfect" />
                        )}
                        {picturePerfect && (
                            <s.QuizImg src={Picture} alt="PicturePerfect" />
                        )}
                    </s.ItemQuizContainer>
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