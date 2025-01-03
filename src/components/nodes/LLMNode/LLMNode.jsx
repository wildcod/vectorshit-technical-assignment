// llmNode.js

import { Handle, Position } from 'reactflow';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';
import Typography from '../../common/Typography/Typography';
// export const LLMNode = ({ id, data }) => {
export const LLMNode = ({ id }) => {
  return (
    <NodeLayout>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
      />
      <Typography variant="h5" color="primary.main" mb={2}>
        LLM
      </Typography>
      <Typography variant="body">This is a LLM.</Typography>
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </NodeLayout>
  );
};
