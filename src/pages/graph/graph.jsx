import styled from "styled-components";
import colors from "../../styles/common/colors";

const GraphContainer = styled.div`
  width: 76vw;
  height: 43.4vw;
  border-radius: 2vw;
  background: ${colors.white};
  margin-top: 1.1vw;
`;

const Graph = () => {
  return (
    <div className="pageContainer">
      <GraphContainer></GraphContainer>
    </div>
  );
};

export default Graph;
