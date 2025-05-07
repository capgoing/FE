import * as s from "../../../styles/list/list";
import Delete from "../../../assets/images/list/delete.png";
import useDelete from "../../../hooks/useDelete";

const DeleteModal = ({ id, onClose }) => {
    const { remove, loading } = useDelete();

    const handleDelete = async () => {
        try {
          const response = await remove(`/graph/${id}`);
          alert("삭제가 완료되었습니다.")
          console.log(response);
          onClose();
        } catch (err) {
          console.error("삭제 실패", err);
        }
    };

    return (
        <s.Overlay>
            <s.ModalContainer>
                <s.CloseContainer>
                    <s.CloseButton onClick={onClose}><s.CloseImg src={Delete} alt="delete"/></s.CloseButton>
                </s.CloseContainer>

                <s.InnerForm>
                    <s.ModalP>정말 삭제하시겠습니까?</s.ModalP>
                    <s.ModalBar />

                    <s.FileContainer>
                        <s.ModalP>삭제 시 지식그래프, 퀴즈, 챗봇 기록 등 모든 정보가 삭제됩니다.</s.ModalP>
                    </s.FileContainer>
            
                    <s.AddButton onClick={handleDelete}>
                        {loading ? "삭제 중.." : "네, 삭제합니다."}
                    </s.AddButton>
                </s.InnerForm>
            </s.ModalContainer>
        </s.Overlay>
    )
}

export default DeleteModal;