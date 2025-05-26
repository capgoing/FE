import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position, useUpdateNodeInternals, useReactFlow } from "reactflow";
import * as G from "../../styles/graph/graph";
import { levelStyles, groupStyles } from "../../mocks/graphData";
import { useEditMode } from "../../contexts/editModeContext";
import Sound from "../../assets/images/graph/sound.png";
import { useTTS } from "../../contexts/TTSContext";

const GraphNode = ({ id, data }) => {
  const { label, level, group, includeSentence, image, onContextMenu, onZoomStateChange } = data;
  const style = levelStyles[level] || levelStyles[1];
  const style2 = groupStyles[group] || groupStyles[1];
  const { isEditMode } = useEditMode();
 
  const handleContextMenu = (e) => {
    e.preventDefault();
    if (onContextMenu) {
      onContextMenu(e, { id, data });
    }
  };

  const { speak, stop } = useTTS();

  // tts
  const handleSoundClick = useCallback(() => {
    speak(includeSentence);
  }, [includeSentence, speak]);

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
  
      if (zoomCheck !== isZoomedIn) {
      setIsZoomedIn(zoomCheck);
      if (typeof onZoomStateChange === "function") {
        onZoomStateChange(zoomCheck);
      }
    }
  };

  checkZoom();
  const interval = setInterval(checkZoom, 300);
  return () => clearInterval(interval);
}, [getZoom, style.zoom, isZoomedIn, stop, onZoomStateChange]);

  return (
    <G.NodeWrapper
      ref={ref}
      onContextMenu={handleContextMenu}
      size={style.size}
      bg={style2.background}
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
          {isZoomedIn && 
            <G.IncludeSentence isZoomedIn={isZoomedIn} fontSize={style.includeSentenceFontSize} isEditMode={isEditMode}>
              {includeSentence
                ?.split('.')
                .filter((s) => s.trim() !== '')
                .map((s, i) => (
                <span key={i}>
                    {s.trim()}.
                    <br />
                </span>
    ))}
            </G.IncludeSentence>
          }
        </G.NodeLeftContainer>

        {isZoomedIn && image && (
          <G.NodeRightContainer>
            <img
              src={image}
              alt="image"
              loading="eager"
              style={{ width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </G.NodeRightContainer>
        )}
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
