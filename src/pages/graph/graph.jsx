import GraphButton from "../../components/graph/graphButton";
import * as G from "../../styles/graph/graph";
import GraphFlow from "../../components/graph/graphFlow";
import { useEditMode } from "../../contexts/editModeContext";

const Graph = () => {
  const { isEditMode } = useEditMode();

  return (
    <div className="pageContainer">
      <G.GraphContainer>
        <GraphFlow />
        {!isEditMode && <GraphButton />}
      </G.GraphContainer>
    </div>
  );
};

export default Graph;
