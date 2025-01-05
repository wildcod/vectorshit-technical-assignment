// llmNode.js

import { Position } from 'reactflow';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';
import Typography from '../../common/Typography/Typography';
import Handle from '../../common/Handle/Handle';

export const LLMNode = ({ id }) => {
  return (
    <NodeLayout title="LLM" id={id}>
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
      <Typography variant="body">This is a LLM.</Typography>
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </NodeLayout>
  );
};
