import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position, useUpdateNodeInternals, useReactFlow } from "reactflow";
import * as G from "../../styles/graph/graph";
import { levelStyles } from "../../mocks/graphData";
import { useEditMode } from "../../contexts/editModeContext";
import Sound from "../../assets/images/graph/sound.png";
import { speak, stop } from "../../utils/tts";

const GraphNode = ({ id, data }) => {
  const { label, level, description, image, onContextMenu } = data;
  const style = levelStyles[level] || levelStyles[1];
  const { isEditMode } = useEditMode();
 
  const handleContextMenu = (e) => {
    e.preventDefault();
    if (onContextMenu) {
      onContextMenu(e, { id, data });
    }
  };

  // tts
  const handleSoundClick = useCallback(() => {
    speak(description);
  }, [description]);

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
      const zoomCheck = currentZoom >= style.zoom;
  
      if (!zoomCheck && isZoomedIn) {
        stop();
      }
  
      setIsZoomedIn(zoomCheck);
    };
  
    checkZoom();
    const interval = setInterval(checkZoom, 300);
    return () => clearInterval(interval);
  }, [getZoom, style.zoom, isZoomedIn]);
  

  return (
    <G.NodeWrapper
      ref={ref}
      onContextMenu={handleContextMenu}
      size={style.size}
      bg={style.background}
      color={style.color}
      isZoomedIn={isZoomedIn}
      isEditMode={isEditMode}
    >
      <G.NodeContainer>
        <G.NodeLeftContainer>
          <G.NodeTitleContainer nodeTitleContainerGap={style.nodeTitleContainerGap}>
            {isZoomedIn && 
              <G.SoundImgContainer soundImgContainerWidth={style.soundImgContainerWidth} soundImgContainerHeight={style.soundImgContainerHeight} onClick={handleSoundClick}>
                <G.SoundImg src={Sound} alt="sound" soundImgWidth={style.soundImgWidth} />
              </G.SoundImgContainer>
            }
            <G.LabelP isZoomedIn={isZoomedIn} fontSize={isZoomedIn ? style.fontSize.zoomIn : style.fontSize.zoomOut} isEditMode={isEditMode}>{label}</G.LabelP>
          </G.NodeTitleContainer>
          {isZoomedIn && <G.Description isZoomedIn={isZoomedIn} fontSize={style.descriptionFontSize} isEditMode={isEditMode}>{description}</G.Description>}
        </G.NodeLeftContainer>

        {isZoomedIn && <G.NodeRightContainer>
          <G.ImageContainer src={image} alt="image" />
        </G.NodeRightContainer>
        }
      </G.NodeContainer>

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
