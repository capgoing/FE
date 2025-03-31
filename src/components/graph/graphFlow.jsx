import React, { useEffect, useState, useCallback, useRef } from "react";
import ReactFlow, {
  Controls,
  ReactFlowProvider,
  MarkerType,
  getStraightPath,
} from "reactflow";
import styled from "styled-components";
import colors from "../../styles/common/colors";
import { forceSimulation, forceManyBody, forceCenter, forceLink } from "d3-force";

import GraphNode from "./graphNode";
import { nodes as rawNodes, edges as rawEdges, levelStyles } from "../../mocks/graphData";
import 'reactflow/dist/style.css';

const GraphFlowContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2.4vw;
  background: ${colors.white};
`;

const nodeTypes = {
  custom: GraphNode,
};

const GraphFlow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const reactFlowWrapper = useRef(null);
  const reactFlowInstance = useRef(null);

  useEffect(() => {
    const width = 1000;
    const height = 800;
    const centerX = width / 2;
    const centerY = height / 2;

    const simNodes = rawNodes.map((node) => ({ ...node }));
    const simLinks = rawEdges.map((edge) => ({
      source: edge.source,
      target: edge.target,
    }));

    const simulation = forceSimulation(simNodes)
      .force("charge", forceManyBody().strength(-500))
      .force("center", forceCenter(centerX, centerY))
      .force("link", forceLink(simLinks).id((d) => d.id).distance(180))
      .stop();

    for (let i = 0; i < 300; ++i) simulation.tick();

    const positionedNodes = simNodes.map((node) => {
      const style = levelStyles[node.level] || levelStyles[1];
      const size = parseFloat(style.size) / 100 * width;

      return {
        id: node.id,
        type: "custom",
        data: {
          label: node.label,
          level: node.level,
          description: node.description,
        },
        position: { x: node.x, y: node.y },
        draggable: true,
        width: size,
        height: size,
      };
    });

    const edgeWithLabels = rawEdges.map((edge, i) => {
      const sourceNode = simNodes.find(n => n.id === edge.source);
      const targetNode = simNodes.find(n => n.id === edge.target);

      const dx = targetNode.x - sourceNode.x;
      const dy = targetNode.y - sourceNode.y;
      const angle = Math.atan2(dy, dx);
      const offset = 40;

      const adjustedSource = {
        x: sourceNode.x + offset * Math.cos(angle),
        y: sourceNode.y + offset * Math.sin(angle),
      };
      const adjustedTarget = {
        x: targetNode.x - offset * Math.cos(angle),
        y: targetNode.y - offset * Math.sin(angle),
      };

      const [path] = getStraightPath({
        sourceX: adjustedSource.x,
        sourceY: adjustedSource.y,
        targetX: adjustedTarget.x,
        targetY: adjustedTarget.y,
      });

      return {
        id: `e${edge.source}-${edge.target}`,
        source: edge.source,
        target: edge.target,
        type: "straight",
        label: edge.label,
        data: { path },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#f89d36',
        },
        style: {
          strokeWidth: 2,
          stroke: '#f89d36',
          strokeDasharray: '0',
          opacity: 1,
        },
        labelBgStyle: {
          fill: "#fff8d6",
          fillOpacity: 1,
          stroke: '#f0c14b',
          strokeWidth: 0.5,
          rx: 4,
          ry: 4,
        },
        labelStyle: {
          fontWeight: 600,
          fontSize: 12,
          fill: '#333',
        },
      };
    });

    setNodes(positionedNodes);
    setEdges(edgeWithLabels);
  }, []);

  const onInit = (instance) => {
    reactFlowInstance.current = instance;
  };

  const handleNodeDoubleClick = useCallback((event, node) => {
    if (reactFlowInstance.current) {
      const level = node.data?.level;
      const zoom = levelStyles[level]?.zoom || 4;
      const centerX = node.position.x + (node.width || 100) / 2;
      const centerY = node.position.y + (node.height || 100) / 2;
      reactFlowInstance.current.setCenter(centerX, centerY, { zoom, duration: 500 });
    }
  }, []);

  return (
    <GraphFlowContainer ref={reactFlowWrapper}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          panOnDrag={true}
          zoomOnScroll={true}
          fitViewOptions={{ padding: 0.2 }}
          onInit={onInit}
          onNodeDoubleClick={handleNodeDoubleClick}
        >
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </GraphFlowContainer>
  );
};

export default GraphFlow;
