import * as G from "../../styles/graph/graph";
import Close from "../../assets/images/header/close.png";
import { useState } from "react";
import GraphNodeAdd from "./graphNodeAdd";
import { API } from "../../apis/axios";


const GraphMenu = ({ node, onClose }) => {
    const { id, data } = node;
    const [isAddMode, setIsAddMode] = useState(false);

    const handleDelete = async () => {
        try {
          const response = await API.delete(`/users/${id}`);
          alert("노드가 삭제되었습니다.");
          console.log(response.data);
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
                <GraphNodeAdd node={node}/>
            ) : (
                <G.MenuList>
                    <G.MenuItem onClick={() => setIsAddMode(true)}>노드 추가</G.MenuItem>
                    <G.MenuItem onClick={handleDelete}>노드 삭제</G.MenuItem>
                </G.MenuList>
            )}
        </G.MenuContainer>
    )
}

export default GraphMenu;