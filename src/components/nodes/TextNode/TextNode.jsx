// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import MuiTextInput from '../../common/InputField/MuiTextInput';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <NodeLayout>
      <div>
        <span>Text</span>
      </div>
      <MuiTextInput value={currText} onChange={handleTextChange} />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </NodeLayout>
  );
};
