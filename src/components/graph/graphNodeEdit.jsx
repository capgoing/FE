import * as G from "../../styles/graph/graph";
import useGet from "../../hooks/useGet";
import { useState, useEffect } from "react";
import usePatch from "../../hooks/usePatch";

const GraphNodeEdit = ({ node }) => {
    const [selectedId, setSelectedId] = useState(node.id);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const { data } = useGet(`/users/${selectedId}`);
    const { patch, loading, error } = usePatch();

    // console.log("받은 데이터:", data);

    useEffect(() => {
        setSelectedId(node.id);
    }, [node]);

    useEffect(() => {
        if (data) {
            setName(data.name || "");
            setDescription(data.email || "");
        }
    }, [data]);

    const handleUpdate = async () => {
        try {
          const response = await patch(`/users/${selectedId}`, {
            label: name,
            description: description,
          });
          alert("수정이 완료되었습니다.");
          console.log("수정 완료:", response);
        } catch (err) {
          console.error("수정 실패", err);
        }
      };

    const isDisabled = !name?.trim() || !description?.trim(); 

    return (
        <G.GraphNodeAddContainer>
            <G.LabelContainer>
                <G.NodeP>노드 이름</G.NodeP>
                <G.NodeInput value={name} onChange={(e) => setName(e.target.value)} />
            </G.LabelContainer>

            <G.LabelContainer>
                <G.NodeP>노드 설명</G.NodeP>
                <G.NodeInput value={description} onChange={(e) => setDescription(e.target.value)} />
            </G.LabelContainer>

            <G.AddButton onClick={handleUpdate} disabled={isDisabled || loading}>
                {loading ? "수정 중..." : "수정완료"}
            </G.AddButton>
        </G.GraphNodeAddContainer>
    )
}

export default GraphNodeEdit;