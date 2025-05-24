import GraphButton from "../../components/graph/graphButton";
import * as G from "../../styles/graph/graph";
import GraphFlow from "../../components/graph/graphFlow";
import { useEditMode } from "../../contexts/editModeContext";
import { useEffect, useState } from "react";
import useGet from "../../hooks/useGet";
import { useParams } from "react-router-dom";

const Graph = () => {
  const { id } = useParams();
  const { isEditMode } = useEditMode();
  const [isClickChatbotBtn, setIsClickChatbotBtn] = useState(false);
  const { data, loading } = useGet(`/graph/${id}`);

  console.log("그래프 데이터", data);

  const nodeData = data?.data?.nodes;
  const edgeData = data?.data?.edges;

  useEffect(() => {
    console.log("isClickChatbotBtn", isClickChatbotBtn);
  }, [isClickChatbotBtn]);

  useEffect(() => {
    if (isEditMode) {
      setIsClickChatbotBtn(false);
    }
  }, [isEditMode]);

  return (
    <div className="pageContainer">
      <G.GraphContainer>
        <GraphFlow
          isClickChatbotBtn={isClickChatbotBtn}
          setIsClickChatbotBtn={setIsClickChatbotBtn}
          nodeData={nodeData}
          edgeData={edgeData}
        />
        {!isEditMode && !isClickChatbotBtn && (
          <GraphButton setIsClickChatbotBtn={setIsClickChatbotBtn} />
        )}
      </G.GraphContainer>
    </div>
  );
};

export default Graph;
