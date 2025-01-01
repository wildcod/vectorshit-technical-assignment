// llmNode.js

import { Handle, Position } from 'reactflow';
import Typography from '../Typography/Typography';
// export const LLMNode = ({ id, data }) => {
export const LLMNode = ({ id }) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
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
      <div>
        <Typography>LLM</Typography>
      </div>
      <div>
        <Typography>This is a LLM.</Typography>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </div>
  );
};