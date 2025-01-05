import { useState, useRef } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';
import { InputNode } from '../nodes/InputNode/InputNode';
import { LLMNode } from '../nodes/LLMNode/LLMNode';
import { OutputNode } from '../nodes/OutputNode/OutputNode';
import { TextNode } from '../nodes/TextNode/TextNode';
import { FileNode } from '../nodes/FileNode/FileNode';
import useDragNDrop from '../../hooks/useDragNDrop';
import { Box } from '@mui/material';
import styles from './PIpelineUI.styles';
import 'reactflow/dist/style.css';

const gridSize = 20;
const backgroundColor = '#aaa';
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  file: FileNode
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore(selector, shallow);

  const { onDrop, onDragOver } = useDragNDrop({
    reactFlowWrapper,
    reactFlowInstance,
    getNodeID,
    addNode
  });

  return (
    <Box ref={reactFlowWrapper} sx={styles.container}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        connectionLineType="smoothstep"
      >
        <Background color={backgroundColor} gap={gridSize} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Box>
  );
};
