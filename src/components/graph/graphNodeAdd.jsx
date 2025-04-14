import * as G from "../../styles/graph/graph";
import { nodes as nodeList } from "../../mocks/graphData";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import usePost from "../../hooks/usePost";


const GraphNodeAdd = ({ node }) => {
    const [selectedId, setSelectedId] = useState(node.id);
    const [name, setName] = useState("");
    const isDisabled = !name.trim() || !selectedId;
    const { post, loading, error } = usePost("/users");

    useEffect(() => {
        setSelectedId(node.id);
    }, [node]);

    const handleSubmit = async () => {
        try {
            const body = {
                parentId: selectedId,
                name: name.trim(),
            };
            const response = await post(body);
            alert("노드가 추가되었습니다.");
            setName("");
            setSelectedId(node.id);
            console.log(response);
        } catch (err) {
            console.error("노드 추가 실패:", err);
        }
      };

    return (
        <G.GraphNodeAddContainer>
            <G.LabelContainer>
                <G.NodeP>노드 이름</G.NodeP>
                <G.NodeInput value={name} onChange={(e) => setName(e.target.value)} />
            </G.LabelContainer>

            <G.LabelContainer>
                <G.NodeP>노드 위치</G.NodeP>
                <G.SelectWrapper>
                    <G.NodeSelect value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
                        {nodeList.map((n) => (
                            <option key={n.id} value={n.label}>
                                {n.label}
                            </option>
                        ))}
                    </G.NodeSelect>
                    <G.IconWrapper>
                        <FiChevronDown />
                    </G.IconWrapper>
                </G.SelectWrapper>
            </G.LabelContainer>

            <G.AddButton onClick={handleSubmit} disabled={isDisabled || loading}>
                {loading ? "추가 중..." : "추가하기"}
            </G.AddButton>
        </G.GraphNodeAddContainer>
    )
}

export default GraphNodeAdd;