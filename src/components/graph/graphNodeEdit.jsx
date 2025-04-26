import * as G from "../../styles/graph/graph";
import useGet from "../../hooks/useGet";
import { useState, useEffect } from "react";
import usePatch from "../../hooks/usePatch";

const GraphNodeEdit = ({ node }) => {
    const [selectedId, setSelectedId] = useState(node.id);
    const [name, setName] = useState("");
    const [includeSentence, setIncludeSentence] = useState("");

    const { data } = useGet(`/users/${selectedId}`);
    const { patch, loading, error } = usePatch();

    // console.log("받은 데이터:", data);

    useEffect(() => {
        setSelectedId(node.id);
    }, [node]);

    useEffect(() => {
        if (data) {
            setName(data.name || "");
            setIncludeSentence(data.email || "");
        }
    }, [data]);

    const handleUpdate = async () => {
        try {
          const response = await patch(`/users/${selectedId}`, {
            label: name,
            includeSentence: includeSentence,
          });
          alert("수정이 완료되었습니다.");
          console.log("수정 완료:", response);
        } catch (err) {
          console.error("수정 실패", err);
        }
      };

    const isDisabled = !name?.trim() || !includeSentence?.trim(); 

    return (
        <G.GraphNodeAddContainer>
            <G.LabelContainer>
                <G.NodeP>노드 이름</G.NodeP>
                <G.NodeInput value={name} onChange={(e) => setName(e.target.value)} />
            </G.LabelContainer>

            <G.LabelContainer>
                <G.NodeP>포함된 문장</G.NodeP>
                <G.NodeInput value={includeSentence} onChange={(e) => setIncludeSentence(e.target.value)} />
            </G.LabelContainer>

            <G.AddButton onClick={handleUpdate} disabled={isDisabled || loading}>
                {loading ? "수정 중..." : "수정완료"}
            </G.AddButton>
        </G.GraphNodeAddContainer>
    )
}

export default GraphNodeEdit;