import { useEffect, useRef, useState } from "react";
import { Handle, Position, useUpdateNodeInternals, useReactFlow } from "reactflow";
import styled from "styled-components";
import { levelStyles } from "../../mocks/graphData";

const NodeWrapper = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border: 2px solid #f7c948;
  border-radius: 50%;
  font-weight: bold;
  font-family: 'Noto Sans';
  font-size: 1vw;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
`;

const Description = styled.p`
  margin-top: 0.5vw;
  font-size: 0.2vw;
  color: #333;
  text-align: center;
  padding: 0 0.5vw;
`;

const GraphNode = ({ id, data }) => {
  const { label, level, description } = data;
  const style = levelStyles[level] || levelStyles[1];

  const ref = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();
  const { getZoom } = useReactFlow();
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (id) updateNodeInternals(id);
  }, [id, updateNodeInternals]);

  useEffect(() => {
    const checkZoom = () => {
      const currentZoom = getZoom();
      setShowDescription(currentZoom >= style.zoom);
    };
    
    checkZoom();
    const interval = setInterval(checkZoom, 300);
    return () => clearInterval(interval);
  }, [getZoom, style.zoom]);

  return (
    <NodeWrapper ref={ref} size={style.size} bg={style.background} color={style.color}>
      {label}
      {showDescription && <Description>{description}</Description>}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0 }}
      />
      <Handle
        type="target"
        position={Position.Top}
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0 }}
      />
    </NodeWrapper>
  );
};

export default GraphNode;