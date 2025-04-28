import * as G from "../../styles/graph/graph";
import { useEffect, useState } from "react";
import usePost from "../../hooks/usePost";
import { useParams } from "react-router-dom";

const GraphNodeAdd = ({ node }) => {
    const { id } = useParams();
    const [selectedId, setSelectedId] = useState(node.id);
    const [nodeLabel, setNodeLabel] = useState("");
    const [edgeLabel, setEdgeLabel] = useState("")
    const [includeSentence, setIncludeSentence] = useState("");
    const isDisabled = !nodeLabel.trim() || !edgeLabel.trim() || !includeSentence.trim();
    const { post, loading, error } = usePost(`/graph/${id}`);

    useEffect(() => {
        setSelectedId(node.id);
    }, [node]);

    const handleSubmit = async () => {
        try {
            const body = {
                parentId: selectedId,
                nodeLabel: nodeLabel.trim(),
                edgeLabel: edgeLabel.trim(),
                includeSentence: includeSentence.trim(),
            };
            const response = await post(body);
            alert("노드가 추가되었습니다.");
            setNodeLabel("");
            setEdgeLabel("");
            setIncludeSentence("");
            console.log(response);
        } catch (err) {
            console.error("노드 추가 실패:", err);
        }
      };

    return (
        <G.GraphNodeAddContainer>
            <G.LabelContainer>
                <G.NodeP>노드 이름</G.NodeP>
                <G.NodeInput value={nodeLabel} onChange={(e) => setNodeLabel(e.target.value)} />
            </G.LabelContainer>

            <G.LabelContainer>
                <G.NodeP>엣지 이름</G.NodeP>
                <G.NodeInput value={edgeLabel} onChange={(e) => setEdgeLabel(e.target.value)} />
            </G.LabelContainer>

            <G.LabelContainer>
                <G.NodeP>포함된 문장</G.NodeP>
                <G.NodeInput value={includeSentence} onChange={(e) => setIncludeSentence(e.target.value)} />
            </G.LabelContainer>

            <G.AddButton onClick={handleSubmit} disabled={isDisabled || loading}>
                {loading ? "추가 중..." : "추가하기"}
            </G.AddButton>
        </G.GraphNodeAddContainer>
    )
}

export default GraphNodeAdd;