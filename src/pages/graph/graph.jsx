import GraphButton from "../../components/graph/graphButton";
import * as G from "../../styles/graph/graph";
import GraphFlow from "../../components/graph/graphFlow";

const Graph = () => {
    return (
        <div className="pageContainer">
            <G.GraphContainer>
                <GraphFlow />
                <GraphButton />
            </G.GraphContainer>
        </div>
    )
}

export default Graph;