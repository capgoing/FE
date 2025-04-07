import { useEffect, useRef, useState } from "react";
import { Handle, Position, useUpdateNodeInternals, useReactFlow } from "reactflow";
import * as G from "../../styles/graph/graph";
import { levelStyles } from "../../mocks/graphData";

const GraphNode = ({ id, data }) => {
  const { label, level, description, image } = data;
  const style = levelStyles[level] || levelStyles[1];

  const ref = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();
  const { getZoom } = useReactFlow();
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  useEffect(() => {
    if (id) updateNodeInternals(id);
  }, [id, updateNodeInternals]);

  useEffect(() => {
    const checkZoom = () => {
      const currentZoom = getZoom();
      setIsZoomedIn(currentZoom >= style.zoom);
    };

    checkZoom();
    const interval = setInterval(checkZoom, 300);
    return () => clearInterval(interval);
  }, [getZoom, style.zoom]);

  return (
    <G.NodeWrapper
      ref={ref}
      size={style.size}
      bg={style.background}
      color={style.color}
      isZoomedIn={isZoomedIn}
    >
      <G.NodeLeftContainer>
        <G.LabelP isZoomedIn={isZoomedIn} fontSize={isZoomedIn ? style.fontSize.zoomIn : style.fontSize.zoomOut}>{label}</G.LabelP>
        {isZoomedIn && <G.Description fontSize={style.descriptionFontSize}>{description}</G.Description>}
      </G.NodeLeftContainer>

      {isZoomedIn && <G.NodeRightContainer>
        <G.ImageContainer src={image} alt="image" />
      </G.NodeRightContainer>
      }


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
    </G.NodeWrapper>
  );
};

export default GraphNode;
