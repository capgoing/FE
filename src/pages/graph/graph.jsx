import GraphButton from "../../components/graph/graphButton";
import * as G from "../../styles/graph/graph";
import GraphFlow from "../../components/graph/graphFlow";
import { useEditMode } from "../../contexts/editModeContext";
import { useState } from "react";

const Graph = () => {
  const { isEditMode } = useEditMode();
  const [isClickChatbotBtn, setIsClickChatbotBtn] = useState(false);

  return (
    <div className="pageContainer">
      <G.GraphContainer>
        <GraphFlow
          isClickChatbotBtn={isClickChatbotBtn}
          setIsClickChatbotBtn={setIsClickChatbotBtn}
        />
        {!isEditMode && !isClickChatbotBtn && (
          <GraphButton setIsClickChatbotBtn={setIsClickChatbotBtn} />
        )}
      </G.GraphContainer>
    </div>
  );
};

export default Graph;
