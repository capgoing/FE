import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as s from "../../../styles/list/list";
import Delete from "../../../assets/images/list/delete.png";
import ListenUp from "../../../assets/images/list/listenUp.png";
import Connect from "../../../assets/images/list/connect.png";
import Picture from "../../../assets/images/list/picture.png";
import DeleteModal from "../modal/deleteModal";

const ItemWork = ({ id, title, image, listenUpPerfect, connectPerfect, picturePerfect }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleGraphClick = () => {
        navigate(`/graph/${id}`);
    }

    const handleQuizClick = () => {
        navigate(`/quiz/${id}`);
    }

    const handleDeleteModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <s.ItemContainer id={id}>
            <s.InnerItemContainer $backgroundImage={image}>
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
                        <s.DeleteButton onClick={handleDeleteModal}><s.DeleteImg src={Delete} alt="delete"/></s.DeleteButton>
                    </s.TopContainer>
                    <s.BottomContainer>
                        <s.BottomButton onClick={handleGraphClick}>지식 그래프</s.BottomButton>
                        <s.BottomButton onClick={handleQuizClick}>퀴즈</s.BottomButton>
                    </s.BottomContainer>
                </s.InnerItemContainer>

                <s.ItemP>{title}</s.ItemP>
            </s.ItemContainer>

            {showModal && <DeleteModal onClose={handleDeleteModal} id={id} />}
        </>
    )
}

export default ItemWork;