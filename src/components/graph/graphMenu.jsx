import * as G from "../../styles/graph/graph";
import Close from "../../assets/images/header/close.png";
import { useState } from "react";
import GraphNodeAdd from "./graphNodeAdd";



const GraphMenu = ({ node, onClose }) => {
    const { id, data } = node;
    const [isAddMode, setIsAddMode] = useState(false);

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
                    <G.MenuItem>노드 삭제</G.MenuItem>
                </G.MenuList>
            )}
        </G.MenuContainer>
    )
}

export default GraphMenu;