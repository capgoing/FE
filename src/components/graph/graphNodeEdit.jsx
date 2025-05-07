import * as G from "../../styles/graph/graph";
import useGet from "../../hooks/useGet";
import { useState, useEffect } from "react";
import usePatch from "../../hooks/usePatch";
import { useParams } from "react-router-dom";

const GraphNodeEdit = ({ node }) => {
    const { id } = useParams();
    const [selectedId, setSelectedId] = useState(node.id);
    const [label, setLabel] = useState("");
    const [includeSentence, setIncludeSentence] = useState("");

    const { data } = useGet(`/graph/${id}/${selectedId}`);
    const { patch, loading, error } = usePatch();

    // console.log("받은 데이터:", data);

    useEffect(() => {
        setSelectedId(node.id);
    }, [node]);

    useEffect(() => {
        if (data) {
            setLabel(data.data.label || "");
            setIncludeSentence(data.data.includeSentence || "");
        }
    }, [data]);

    const handleUpdate = async () => {
        try {
          const response = await patch(`/graph/${id}/${selectedId}`, {
            label: label,
            includeSentence: includeSentence,
          });
          alert("수정이 완료되었습니다.");
          window.location.reload();
          // console.log("수정 완료:", response);
        } catch (err) {
          console.error("수정 실패", err);
        }
      };

    const isDisabled = !label?.trim() || !includeSentence?.trim(); 

    return (
        <G.GraphNodeAddContainer>
            <G.LabelContainer>
                <G.NodeP>노드 이름</G.NodeP>
                <G.NodeInput value={label} onChange={(e) => setLabel(e.target.value)} />
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