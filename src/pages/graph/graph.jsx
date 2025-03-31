import GraphButton from "../../components/graph/graphButton";
import * as G from "../../styles/graph/graph";

const Graph = () => {
    return (
        <div className="pageContainer">
            <G.GraphContainer>
                <GraphButton />
            </G.GraphContainer>
        </div>
    )
}

export default Graph;