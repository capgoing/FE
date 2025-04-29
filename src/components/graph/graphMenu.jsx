import * as G from "../../styles/graph/graph";
import Close from "../../assets/images/header/close.png";
import { useState } from "react";
import GraphNodeAdd from "./graphNodeAdd";
import GraphNodeEdit from "./graphNodeEdit";
import useDelete from "../../hooks/useDelete";
import { useParams } from "react-router-dom";

const GraphMenu = ({ node, onClose }) => {
    const { id: graphId } = useParams();
    const { id, data } = node;
    const [isAddMode, setIsAddMode] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const { remove, loading: deleteLoading } = useDelete();

    const handleDelete = async () => {
        try {
          const response = await remove(`/graph/${graphId}/${id}`);
          alert("노드가 삭제되었습니다.");
          // console.log(response);
          window.location.reload();
          onClose();
        } catch (err) {
          console.error("노드 삭제 실패:", err);
        }
      };

    return (
        <G.MenuContainer>
            <G.MenuTopContainer>
                <G.MenuTitle>선택한 노드: {data.label}</G.MenuTitle>
                <G.CloseImg src={Close} alt="close" onClick={onClose} />
            </G.MenuTopContainer>
            {isAddMode ? (
                <GraphNodeAdd node={node} />
            ) : isEditMode ? (
                <GraphNodeEdit node={node} />
            ) : (
                <G.MenuList>
                    <G.MenuItem onClick={() => setIsAddMode(true)}>노드 추가</G.MenuItem>
                    <G.MenuItem onClick={() => setIsEditMode(true)}>노드 수정</G.MenuItem>
                    <G.MenuItem onClick={handleDelete}>노드 삭제</G.MenuItem>
                </G.MenuList>
            )}
        </G.MenuContainer>
    )
}

export default GraphMenu;